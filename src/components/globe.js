/**
 * Three.js Procedural Accurate Dot-Matrix Globe with Kochi Origin
 * Verdant Telemetry & Antenna Systems
 */

// Accurate Natural Earth 90x180 Raster Land Mask (Base64 encoded bitmask)
export const LAND_MASK_B64 = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4AP/AAAAAAAAAAAAAAAAAAAAAAAAX/z///+AAAAAAAABAAAAAAAAAAAAAYd8P///wAA+AAAAAA8AAAAAAAAAAAwAnw////4AAIAAAAAAGAAAAAAAAAAADivwAf//wAAAAADAAf/wAHYAAAAAADoi3sAP//gAAAAAMAD///sAAAAgBgACfwz/AD/+gAAAwAEHf///+/8gBAP/7/nJdjwD/+AAAH/AA7f///////f4P//////h8H/gAAAf/6//f////////Mf/////9H4D8AeAA+ev///////////AP/////4A0B4AAAD5/////////////Af3////gHgA4AAAH5///////////LwAHgH///gHkAAAAAH4/////////+CIAABAB///4D+AAAAGCx/////////4A8AAIAAf///n/gAAAOCD/////////wA4AAAAAf///n/wAAAbP///////////AgAAAAAP/////wAAADf//////////9AAAAAAAF////0YAAAB///////////9AAAAAAAD////8EAAAB///////////5AAAAAAAD////2AAAAB/f5f///////wAAAAAAAD////gAAAAfxnwP///////jAAAAAAAD////AAAAAPCb3///////+CAAAAAAAD///8AAAAAfALf//////+ECAAAAAAAB///8AAAAAGHQP///////mMAAAAAAAA///8AAAAAH+Ai///////E8AAAAAAAAf//wAAAAAP/AA///////BgAAAAAAAAP//gAAAAAf/73///////gAAAAAAAAAD/AQAAAAAf////f/////gAAAAAAAAAF+AQAAAAB///+/n/////AAAAAAAAAAC+AAAAAAB///+f0H////AAAAAAAAAAAeAwAAAAD////f/B///8gAAAAAAAAAAeGEAAAAH////v+B/z/AAAAAAAAAAAAPMAgAAAD////n+A/B+gAAAAAAAAAAAD8AAAAAD////n4AeB/AgAAAAAAAAAAAPAAAAAH////3gAcAfAgAAAAAAAAAAADAAAAAD////6AAcAfggAAAAAAAAAAABDwAAAD////8wAMATAIAAAAAAAAAAAAr/AAAB/////gAKASAAAAAAAAAAAAAAH/gAAA/////gACAAAIAAAAAAAAAAAAH/8AAAaH///AAAAsGAAAAAAAAAAAAAH/+AAAAB//+AAAAUOAAAAAAAAAAAAAP/+AAAAB//8AAAAYegAAAAAAAAAAAAP//gAAAD//4AAAAMeBgAAAAAAAAAAAP//8AAAB//wAAAAGdiuAAAAAAAAAAAf///AAAA//wAAAACAQHgAAAAAAAAAAP///gAAA//wAAAABwAHwgAAAAAAAAAH///AAAA//wAAAAACIDQIAAAAAAAAAH//+AAAAf/wAAAAAAAAAAAAAAAAAAAD//+AAAA//wgAAAAABxAAAAAAAAAAAD//+AAAA//wgAAAAAPxgBAAAAAAAAAA//8AAAA//jgAAAAAf5gAAAAAAAAAAAf/8AAAA//DgAAAAAf/gAAAAAAAAAAAf/8AAAAf/DAAAAAD//4CAAAAAAAAAAf/wAAAAf/DAAAAAH//4AAAAAAAAAAAf/AAAAAf+CAAAAAH//8AAAAAAAAAAAf/AAAAAP8AAAAAAH//+AAAAAAAAAAA/+AAAAAP8AAAAAAH//+AAAAAAAAAAA/+AAAAAH4AAAAAAD//+AAAAAAAAAAA/8AAAAAHwAAAAAADwf8AAAAAAAAAAA/gAAAAAAAAAAAAACAH4AIAAAAAAAAB/wAAAAAAAAAAAAAAAD4AEAAAAAAAAB+AAAAAAAAAAAAAAAAAAAGAAAAAAAAB6AAAAAAAAAAAAAAAAAwAMAAAAAAAAA8AAAAAAAAAAAAAAAAAQAYAAAAAAAAB4AAAAAAAAAAAAAAAAAAAwAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAACAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAeAAIP+f/gAAAAAAAAAAAMAAAAAAABP/+H//////AAAAAAAAAAA+AAAAAf////8////////AAAAAAAOEAPAAAB///////////////gAAAP//T//8AAAH//////////////+AAAH/////4AAAH///////////////8AAE//////4ABw////////////////8AAAD//////gCA////////////////wAAAf/////////////////////////+A/4A///////////////////////////////////////////////////////////////////////////////////////";

let landMaskCache = null;
export function getLandMaskBytes() {
  if (landMaskCache) return landMaskCache;
  if (typeof atob !== 'undefined') {
    const bin = atob(LAND_MASK_B64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
      arr[i] = bin.charCodeAt(i);
    }
    landMaskCache = arr;
    return arr;
  }
  return null;
}

export function checkLandAccurate(lat, lon) {
  const bytes = getLandMaskBytes();
  if (!bytes) return false;
  const rows = 90;
  const cols = 180;
  const r = Math.max(0, Math.min(rows - 1, Math.floor((90 - lat) / (180 / rows))));
  const c = Math.max(0, Math.min(cols - 1, Math.floor((lon + 180) / (360 / cols))));
  const idx = r * cols + c;
  const byteIdx = Math.floor(idx / 8);
  const bitIdx = 7 - (idx % 8);
  if (byteIdx < bytes.length) {
    return (bytes[byteIdx] & (1 << bitIdx)) !== 0;
  }
  return false;
}

export class DotMatrixGlobe {
  constructor(canvasContainer) {
    this.container = canvasContainer;
    this.animId = null;
    this.isDestroyed = false;
    this.isPaused = false;
    this.targetRotationY = 0.45;
    this.targetRotationX = 0.16;
    this.rotationY = 0.45;
    this.rotationX = 0.16;
    this.scrollRotationBoost = 0;
    this.isDragging = false;
    this.prevMousePos = { x: 0, y: 0 };
    this.lastTime = performance.now();
    this.init();
  }

  init() {
    if (typeof THREE === 'undefined') {
      console.warn('Three.js not loaded. Skipping WebGL globe.');
      return;
    }

    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    // Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    // Landing animation: start slightly closer (z: 198) and smoothly zoom out to original position (z: 245)
    this.targetCameraZ = 245;
    this.introStartZ = 198;
    this.camera.position.z = this.introStartZ;
    this.introStartTime = performance.now();
    this.introDuration = 2200; // 2.2s silky smooth deceleration ease

    // WebGL Renderer with High-Performance Settings
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.container.appendChild(this.renderer.domElement);

    this.globeGroup = new THREE.Group();
    this.scene.add(this.globeGroup);

    // Shift globe cleanly to the right side on desktop
    this.updateGlobePosition();

    // High quality soft textures
    this.pointTexture = this.createSoftPointTexture();
    this.headTexture = this.createSoftHeadTexture();

    // Build procedural dot matrix sphere with accurate continents, subtle atmosphere, stations, and refined signals
    this.buildDots();
    this.buildSubtleAtmosphere();
    this.buildStations();
    this.buildSignalSystem();

    this.bindEvents();
    this.animate();
  }

  updateGlobePosition() {
    if (!this.globeGroup) return;
    const w = window.innerWidth;
    if (w >= 1024) {
      this.globeGroup.position.x = 54;
      this.globeGroup.position.y = 0;
      this.globeGroup.position.z = 0;
    } else if (w >= 768) {
      this.globeGroup.position.x = 30;
      this.globeGroup.position.y = -4;
      this.globeGroup.position.z = 0;
    } else {
      this.globeGroup.position.x = 14;
      this.globeGroup.position.y = 8;
      this.globeGroup.position.z = 0;
    }
  }

  createSoftPointTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 28);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(240, 255, 250, 0.95)');
    grad.addColorStop(0.6, 'rgba(3, 188, 159, 0.6)');
    grad.addColorStop(0.85, 'rgba(3, 188, 159, 0.12)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 28, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(canvas);
  }

  createSoftHeadTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 26);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.28, 'rgba(240, 255, 252, 0.95)');
    grad.addColorStop(0.55, 'rgba(3, 188, 159, 0.65)');
    grad.addColorStop(0.8, 'rgba(3, 188, 159, 0.12)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 26, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(canvas);
  }

  latLongToVector3(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  }

  buildDots() {
    const radius = 84;
    const dotsCount = 11800;
    const positions = [];
    const colors = [];

    const landColor = new THREE.Color('#03BC9F');
    const oceanColor = new THREE.Color('#102533');

    for (let i = 0; i < dotsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotsCount);
      const theta = Math.sqrt(dotsCount * Math.PI) * phi;
      const lat = 90 - (phi * 180) / Math.PI;
      const lon = ((theta * 180) / Math.PI) % 360 - 180;

      const isLand = checkLandAccurate(lat, lon);
      const r = radius * (isLand ? 1.004 : 0.996);

      const v = this.latLongToVector3(lat, lon, r);
      positions.push(v.x, v.y, v.z);

      if (isLand) {
        colors.push(landColor.r * 1.2, landColor.g * 1.2, landColor.b * 1.2);
      } else {
        colors.push(oceanColor.r * 0.6, oceanColor.g * 0.6, oceanColor.b * 0.6);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2.25,
      map: this.pointTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.dotsMesh = new THREE.Points(geometry, material);
    this.globeGroup.add(this.dotsMesh);

    const coreGeo = new THREE.SphereGeometry(radius * 0.985, 40, 40);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x05090D });
    this.globeGroup.add(new THREE.Mesh(coreGeo, coreMat));
  }

  createGlobeGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(256, 256, 120, 256, 256, 256);
    grad.addColorStop(0, 'rgba(3, 188, 159, 0.18)');
    grad.addColorStop(0.3, 'rgba(10, 155, 135, 0.09)');
    grad.addColorStop(0.65, 'rgba(30, 111, 140, 0.03)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);
    return new THREE.CanvasTexture(canvas);
  }

  buildSubtleAtmosphere() {
    const radius = 84;

    const glowTex = this.createGlobeGlowTexture();
    const glowMat = new THREE.SpriteMaterial({
      map: glowTex,
      color: 0xffffff,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const glowSprite = new THREE.Sprite(glowMat);
    glowSprite.scale.set(radius * 2.7, radius * 2.7, 1);
    glowSprite.position.set(0, 0, -3);
    this.globeGroup.add(glowSprite);

    const atmoInnerGeo = new THREE.SphereGeometry(radius * 1.025, 48, 48);
    const atmoInnerMat = new THREE.MeshBasicMaterial({
      color: 0x03BC9F,
      transparent: true,
      opacity: 0.10,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    this.globeGroup.add(new THREE.Mesh(atmoInnerGeo, atmoInnerMat));

    const atmoMidGeo = new THREE.SphereGeometry(radius * 1.06, 48, 48);
    const atmoMidMat = new THREE.MeshBasicMaterial({
      color: 0x0ab59b,
      transparent: true,
      opacity: 0.05,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    this.globeGroup.add(new THREE.Mesh(atmoMidGeo, atmoMidMat));

    const atmoOuterGeo = new THREE.SphereGeometry(radius * 1.12, 48, 48);
    const atmoOuterMat = new THREE.MeshBasicMaterial({
      color: 0x1E6F8C,
      transparent: true,
      opacity: 0.028,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    this.globeGroup.add(new THREE.Mesh(atmoOuterGeo, atmoOuterMat));

    const equatorGeo = new THREE.BufferGeometry();
    const eqPts = [];
    for (let deg = 0; deg <= 360; deg += 3) {
      const rad = (deg * Math.PI) / 180;
      eqPts.push(new THREE.Vector3(Math.cos(rad) * radius * 1.002, 0, Math.sin(rad) * radius * 1.002));
    }
    equatorGeo.setFromPoints(eqPts);
    const equatorMat = new THREE.LineBasicMaterial({
      color: 0x03BC9F,
      transparent: true,
      opacity: 0.14,
      blending: THREE.AdditiveBlending
    });
    this.globeGroup.add(new THREE.Line(equatorGeo, equatorMat));

    const satOrbitGeo = new THREE.BufferGeometry();
    const satOrbitPts = [];
    const tilt = 32 * (Math.PI / 180);
    for (let deg = 0; deg <= 360; deg += 4) {
      const rad = (deg * Math.PI) / 180;
      const x = Math.cos(rad) * radius * 1.045;
      const z = Math.sin(rad) * radius * 1.045;
      const y = Math.sin(rad) * Math.sin(tilt) * radius * 0.45;
      satOrbitPts.push(new THREE.Vector3(x, y, z));
    }
    satOrbitGeo.setFromPoints(satOrbitPts);
    const satOrbitMat = new THREE.LineBasicMaterial({
      color: 0x4DB6FF,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending
    });
    this.globeGroup.add(new THREE.Line(satOrbitGeo, satOrbitMat));
  }

  buildStations() {
    const radius = 84;
    this.kochiPos = this.latLongToVector3(9.9312, 76.2673, radius);

    this.stations = [
      { name: 'Cochin / Verdant HQ', lat: 9.9312, lon: 76.2673, isOrigin: true },
      { name: 'Bengaluru / ISRO & HAL', lat: 12.9716, lon: 77.5946 },
      { name: 'Hyderabad / DRDO Labs', lat: 17.3850, lon: 78.4867 },
      { name: 'New Delhi / MoD Air HQ', lat: 28.6139, lon: 77.2090 },
      { name: 'Coimbatore / Design Centre', lat: 11.0168, lon: 76.9558 },
      { name: 'Thiruvananthapuram / VSSC ISRO', lat: 8.5241, lon: 76.9366 },
      { name: 'Mumbai / Western Fleet', lat: 18.9220, lon: 72.8347 },
      { name: 'Visakhapatnam / Eastern Fleet', lat: 17.6868, lon: 83.2185 },
      { name: 'Chandipur / ITR Missile Range', lat: 21.4682, lon: 87.0167 },
      { name: 'Sriharikota / SDSC Spaceport', lat: 13.7199, lon: 80.2304 },
      { name: 'London / Farnborough BAE', lat: 51.2882, lon: -0.7583 },
      { name: 'Paris / Toulouse Airbus', lat: 43.6047, lon: 1.4442 },
      { name: 'Munich / Ottobrunn Eurofighter', lat: 48.0694, lon: 11.6667 },
      { name: 'Rome / Leonardo Avionics', lat: 41.9028, lon: 12.4964 },
      { name: 'Stockholm / Linköping Saab', lat: 58.4108, lon: 15.6214 },
      { name: 'Madrid / Getafe Defence', lat: 40.3083, lon: -3.7327 },
      { name: 'Kiruna / Esrange Space Center', lat: 67.8558, lon: 20.2253 },
      { name: 'Tel Aviv / LCA EW Partner', lat: 32.0853, lon: 34.7818 },
      { name: 'Dubai / Gulf Aviation', lat: 25.2048, lon: 55.2708 },
      { name: 'Abu Dhabi / EDGE Aerospace', lat: 24.4539, lon: 54.3773 },
      { name: 'Overberg / Flight Test Range RSA', lat: -34.6167, lon: 20.3000 },
      { name: 'Washington DC / Pentagon', lat: 38.8719, lon: -77.0563 },
      { name: 'Seattle / Boeing Defense', lat: 47.6062, lon: -122.3321 },
      { name: 'Los Angeles / Space Systems Command', lat: 33.9192, lon: -118.3797 },
      { name: 'Cape Canaveral / Space Force', lat: 28.4889, lon: -80.5778 },
      { name: 'Dallas / Fort Worth Lockheed', lat: 32.7555, lon: -97.3308 },
      { name: 'Reno / Sierra Nevada Corp', lat: 39.5296, lon: -119.8138 },
      { name: 'Colorado Springs / Peterson SFB', lat: 38.8339, lon: -104.8214 },
      { name: 'White Sands / Missile Range', lat: 32.3838, lon: -106.4764 },
      { name: 'Boston / MIT Lincoln Lab', lat: 42.3601, lon: -71.0589 },
      { name: 'Singapore / Changi Aviation Hub', lat: 1.3521, lon: 103.8198 },
      { name: 'Tokyo / Tsukuba JAXA', lat: 36.0645, lon: 140.1264 },
      { name: 'Seoul / Sacheon Aerospace', lat: 35.0883, lon: 128.0833 },
      { name: 'Canberra / Defence HQ', lat: -35.2809, lon: 149.1300 },
      { name: 'Woomera / Range Complex', lat: -31.1983, lon: 136.8256 },
      { name: 'Perth / Deep Space Tracking', lat: -31.9505, lon: 115.8605 },
      { name: 'Guam / Pacific Relay', lat: 13.4443, lon: 144.7937 },
      { name: 'Honolulu / INDOPACOM Fleet', lat: 21.3069, lon: -157.8583 },
      { name: 'São José dos Campos / Embraer', lat: -23.1791, lon: -45.8872 }
    ];

    this.stationPositions = [];
    this.ripples = [];

    this.stations.forEach((st) => {
      const pos = this.latLongToVector3(st.lat, st.lon, radius);
      this.stationPositions.push(pos);

      const isOrigin = !!st.isOrigin;
      const dotGeo = new THREE.SphereGeometry(isOrigin ? 1.2 : 0.72, 12, 12);
      const dotMat = new THREE.MeshBasicMaterial({
        color: isOrigin ? 0x03BC9F : 0x8FA3A0,
        blending: THREE.AdditiveBlending
      });
      const m = new THREE.Mesh(dotGeo, dotMat);
      m.position.copy(pos);
      this.globeGroup.add(m);

      const spriteMat = new THREE.SpriteMaterial({
        map: this.headTexture,
        color: isOrigin ? 0x03BC9F : 0x1E6F8C,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: isOrigin ? 0.75 : 0.32,
        depthWrite: false
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.copy(pos);
      sprite.scale.set(isOrigin ? 5.2 : 2.6, isOrigin ? 5.2 : 2.6, 1);
      this.globeGroup.add(sprite);

      if (isOrigin) {
        this.kochiMesh = m;
        this.kochiSprite = sprite;
      }
    });

    this.kochiWaves = [];
    for (let w = 0; w < 2; w++) {
      const waveGeo = new THREE.RingGeometry(1.6, 2.4, 32);
      const waveMat = new THREE.MeshBasicMaterial({
        color: 0x03BC9F,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending
      });
      const waveMesh = new THREE.Mesh(waveGeo, waveMat);
      waveMesh.position.copy(this.kochiPos);
      waveMesh.lookAt(new THREE.Vector3(0, 0, 0));
      this.globeGroup.add(waveMesh);
      this.kochiWaves.push({ mesh: waveMesh, phase: w * 0.5 });
    }
  }

  createSignalShaderMaterial(colorHex) {
    const vertexShader = `
      attribute float arcProgress;
      varying float vProgress;
      void main() {
        vProgress = arcProgress;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uProgress;
      uniform vec3 uColor;
      uniform vec3 uGlowColor;
      uniform float uBaseAlpha;
      varying float vProgress;

      void main() {
        float baseLine = uBaseAlpha * smoothstep(0.0, 0.04, vProgress) * smoothstep(1.0, 0.96, vProgress);

        float dist = vProgress - uProgress;
        float packet = 0.0;
        
        if (dist <= 0.0 && dist >= -0.16) {
          packet = smoothstep(-0.16, 0.0, dist);
          packet = pow(packet, 2.0);
        } else if (dist > 0.0 && dist <= 0.02) {
          packet = smoothstep(0.02, 0.0, dist);
        }

        float endpointTaper = smoothstep(0.0, 0.035, vProgress) * smoothstep(1.0, 0.965, vProgress);
        packet *= endpointTaper;

        vec3 col = mix(uColor, uGlowColor, packet * 0.7);
        float alpha = baseLine + packet * 0.85;

        gl_FragColor = vec4(col, alpha);
      }
    `;

    return new THREE.ShaderMaterial({
      uniforms: {
        uProgress: { value: 0.0 },
        uColor: { value: new THREE.Color(colorHex) },
        uGlowColor: { value: new THREE.Color(0xFFFFFF) },
        uBaseAlpha: { value: 0.09 }
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
  }

  buildSignalSystem() {
    this.activeSignals = [];
    const numSignals = 8;
    const signalColors = [0x03BC9F, 0x4DB6FF, 0x2ECC8F, 0x64D2FF, 0x38BDF8, 0x34D399, 0xF2B84B];

    for (let i = 0; i < numSignals; i++) {
      const initialProgress = i / numSignals;
      const colorHex = signalColors[i % signalColors.length];
      const sig = this.createSignalSlot(initialProgress, colorHex);
      this.activeSignals.push(sig);
    }
  }

  createSignalSlot(initialProgress = 0, colorHex = 0x03BC9F) {
    const total = this.stationPositions.length;
    let fromIdx = 0;
    let toIdx = 1;
    if (Math.random() < 0.35) {
      fromIdx = 0;
      toIdx = 1 + Math.floor(Math.random() * (total - 1));
    } else if (Math.random() < 0.20) {
      fromIdx = 1 + Math.floor(Math.random() * (total - 1));
      toIdx = 0;
    } else {
      fromIdx = Math.floor(Math.random() * total);
      toIdx = Math.floor(Math.random() * total);
      if (toIdx === fromIdx) toIdx = (fromIdx + 1) % total;
    }

    const p1 = this.stationPositions[fromIdx];
    const p2 = this.stationPositions[toIdx];

    const curve = this.generateArcCurve(p1, p2);
    const arcPoints = curve.getPoints(64);
    const progressArr = new Float32Array(arcPoints.length);
    for (let k = 0; k < arcPoints.length; k++) {
      progressArr[k] = k / (arcPoints.length - 1);
    }

    const trackGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);
    trackGeo.setAttribute('arcProgress', new THREE.BufferAttribute(progressArr, 1));
    const shaderMat = this.createSignalShaderMaterial(colorHex);
    shaderMat.uniforms.uProgress.value = initialProgress;
    const trackLine = new THREE.Line(trackGeo, shaderMat);
    this.globeGroup.add(trackLine);

    const headSpriteMat = new THREE.SpriteMaterial({
      map: this.headTexture,
      color: colorHex,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.9,
      depthWrite: false
    });
    const headSprite = new THREE.Sprite(headSpriteMat);
    headSprite.scale.set(2.8, 2.8, 1);
    this.globeGroup.add(headSprite);

    const headCoreGeo = new THREE.SphereGeometry(0.5, 8, 8);
    const headCoreMat = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      blending: THREE.AdditiveBlending
    });
    const headCore = new THREE.Mesh(headCoreGeo, headCoreMat);
    this.globeGroup.add(headCore);

    const tailSprites = [];
    const tailCount = 5;
    for (let k = 0; k < tailCount; k++) {
      const frac = k / (tailCount - 1);
      const sSize = 1.9 * (1.0 - frac * 0.65);
      const sMat = new THREE.SpriteMaterial({
        map: this.headTexture,
        color: colorHex,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.45 * (1.0 - frac * 0.8),
        depthWrite: false
      });
      const s = new THREE.Sprite(sMat);
      s.scale.set(sSize, sSize, 1);
      this.globeGroup.add(s);
      tailSprites.push(s);
    }

    return {
      fromIdx,
      toIdx,
      curve,
      trackLine,
      shaderMat,
      headSprite,
      headCore,
      tailSprites,
      progress: initialProgress,
      speed: 0.22 + Math.random() * 0.08,
      colorHex
    };
  }

  generateArcCurve(p1, p2) {
    const radius = 84;
    const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
    const dist = p1.distanceTo(p2);
    midPoint.setLength(radius + Math.max(8, dist * 0.28));
    return new THREE.QuadraticBezierCurve3(p1, midPoint, p2);
  }

  resetSignal(sig) {
    const total = this.stationPositions.length;
    let fromIdx = 0;
    let toIdx = 1;
    if (Math.random() < 0.35) {
      fromIdx = 0;
      toIdx = 1 + Math.floor(Math.random() * (total - 1));
    } else if (Math.random() < 0.20) {
      fromIdx = 1 + Math.floor(Math.random() * (total - 1));
      toIdx = 0;
    } else {
      fromIdx = Math.floor(Math.random() * total);
      toIdx = Math.floor(Math.random() * total);
      if (toIdx === fromIdx) toIdx = (fromIdx + 1) % total;
    }

    sig.fromIdx = fromIdx;
    sig.toIdx = toIdx;
    const p1 = this.stationPositions[fromIdx];
    const p2 = this.stationPositions[toIdx];
    sig.curve = this.generateArcCurve(p1, p2);

    const arcPoints = sig.curve.getPoints(64);
    const progressArr = new Float32Array(arcPoints.length);
    for (let k = 0; k < arcPoints.length; k++) {
      progressArr[k] = k / (arcPoints.length - 1);
    }
    if (sig.trackLine && sig.trackLine.geometry) {
      sig.trackLine.geometry.dispose();
    }
    const newGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);
    newGeo.setAttribute('arcProgress', new THREE.BufferAttribute(progressArr, 1));
    sig.trackLine.geometry = newGeo;

    const colors = [0x03BC9F, 0x4DB6FF, 0x2ECC8F, 0x64D2FF, 0x38BDF8, 0x34D399, 0xF2B84B];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    sig.colorHex = newColor;

    if (sig.shaderMat && sig.shaderMat.uniforms) {
      sig.shaderMat.uniforms.uColor.value.setHex(newColor);
      sig.shaderMat.uniforms.uProgress.value = 0;
    }
    sig.headSprite.material.color.setHex(newColor);
    sig.tailSprites.forEach(s => s.material.color.setHex(newColor));

    sig.progress = 0;
    sig.speed = 0.22 + Math.random() * 0.08;
  }

  triggerArrivalRipple(pos, colorHex = 0x03BC9F) {
    const ringGeo = new THREE.RingGeometry(1.2, 2.0, 24);
    const ringMat = new THREE.MeshBasicMaterial({
      color: colorHex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const mesh = new THREE.Mesh(ringGeo, ringMat);
    mesh.position.copy(pos);
    mesh.lookAt(new THREE.Vector3(0, 0, 0));
    this.globeGroup.add(mesh);

    this.ripples.push({ mesh, scale: 1.0, opacity: 0.65 });
  }

  bindEvents() {
    this.onMouseDown = (e) => {
      this.isDragging = true;
      this.prevMousePos = { x: e.clientX, y: e.clientY };
    };

    this.onMouseMove = (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.prevMousePos.x;
      const deltaY = e.clientY - this.prevMousePos.y;
      this.targetRotationY += deltaX * 0.0035;
      this.targetRotationX += deltaY * 0.0035;
      this.targetRotationX = Math.max(-0.6, Math.min(0.6, this.targetRotationX));
      this.prevMousePos = { x: e.clientX, y: e.clientY };
    };

    this.onMouseUp = () => { this.isDragging = false; };

    this.onTouchStart = (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    this.onTouchMove = (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - this.prevMousePos.x;
      const deltaY = e.touches[0].clientY - this.prevMousePos.y;
      this.targetRotationY += deltaX * 0.004;
      this.targetRotationX += deltaY * 0.004;
      this.prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    this.onTouchEnd = () => { this.isDragging = false; };

    this.onResize = () => {
      if (!this.container || this.isDestroyed) return;
      const w = this.container.clientWidth;
      const h = this.container.clientHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
      this.updateGlobePosition();
    };

    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
    this.container.addEventListener('touchstart', this.onTouchStart, { passive: true });
    this.container.addEventListener('touchmove', this.onTouchMove, { passive: true });
    this.container.addEventListener('touchend', this.onTouchEnd, { passive: true });
    window.addEventListener('resize', this.onResize);
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    if (this.isPaused) {
      this.isPaused = false;
      this.lastTime = performance.now();
    }
  }

  onScrollUpdate(scrollFraction) {
    this.scrollRotationBoost = scrollFraction * 1.2;
    if (this.globeGroup) {
      const s = Math.max(0.72, 1.0 - scrollFraction * 0.28);
      this.globeGroup.scale.set(s, s, s);
    }
  }

  animate() {
    if (this.isDestroyed) return;

    this.animId = requestAnimationFrame(() => this.animate());

    if (this.isPaused) return;

    const now = performance.now();
    const dt = Math.min((now - this.lastTime) / 1000, 0.1);
    this.lastTime = now;

    // Smooth landing zoom-out transition on initial site load
    if (this.introStartTime) {
      const elapsed = now - this.introStartTime;
      const t = Math.min(1.0, elapsed / this.introDuration);
      // Cubic ease-out: 1 - (1 - t)^3
      const ease = 1 - Math.pow(1 - t, 3);
      this.camera.position.z = this.introStartZ + (this.targetCameraZ - this.introStartZ) * ease;
      if (t >= 1.0) {
        this.camera.position.z = this.targetCameraZ;
        this.introStartTime = null;
      }
    }

    if (!this.isDragging) {
      this.targetRotationY += 0.00085;
    }

    this.rotationY += (this.targetRotationY - this.rotationY) * 0.05;
    this.rotationX += (this.targetRotationX - this.rotationX) * 0.05;

    this.globeGroup.rotation.y = this.rotationY + this.scrollRotationBoost;
    this.globeGroup.rotation.x = this.rotationX;

    if (this.activeSignals) {
      this.activeSignals.forEach((sig) => {
        sig.progress += dt * sig.speed;

        if (sig.shaderMat && sig.shaderMat.uniforms && sig.shaderMat.uniforms.uProgress) {
          sig.shaderMat.uniforms.uProgress.value = sig.progress;
        }

        const t = Math.min(sig.progress, 1.0);
        const currentPos = sig.curve.getPointAt(t);
        sig.headSprite.position.copy(currentPos);
        sig.headCore.position.copy(currentPos);

        const tailCount = sig.tailSprites.length;
        const trailSpan = 0.065;
        for (let j = 0; j < tailCount; j++) {
          const frac = j / (tailCount - 1);
          const tTrail = Math.max(0, t - (1 - frac) * trailSpan);
          const pt = sig.curve.getPointAt(tTrail);
          sig.tailSprites[j].position.copy(pt);
        }

        if (sig.progress >= 1.0) {
          const destPos = this.stationPositions[sig.toIdx];
          this.triggerArrivalRipple(destPos, sig.colorHex);
          this.resetSignal(sig);
        }
      });
    }

    for (let r = this.ripples.length - 1; r >= 0; r--) {
      const rip = this.ripples[r];
      rip.scale += dt * 3.6;
      rip.opacity -= dt * 1.35;
      rip.mesh.scale.set(rip.scale, rip.scale, rip.scale);
      rip.mesh.material.opacity = Math.max(0, rip.opacity);
      if (rip.opacity <= 0) {
        this.globeGroup.remove(rip.mesh);
        this.ripples.splice(r, 1);
      }
    }

    const timeSec = now * 0.001;
    if (this.kochiWaves) {
      this.kochiWaves.forEach((w) => {
        const cycle = ((timeSec * 0.45 + w.phase) % 1.0);
        const s = 1.0 + cycle * 3.2;
        w.mesh.scale.set(s, s, s);
        w.mesh.material.opacity = (1.0 - cycle) * 0.55;
      });
    }

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    this.isDestroyed = true;
    if (this.animId) cancelAnimationFrame(this.animId);
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('resize', this.onResize);
    if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
  }
}
