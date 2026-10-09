/**
 * Direct Engineering Contact Page View & Interactive Forms
 * Verdant Telemetry & Antenna Systems
 */

import { showToast, openEnquiryModal } from '../components/modals.js';

let currentContactDomain = 'Airborne & Jets';

export function getCurrentContactDomain() {
  return currentContactDomain;
}

export function selectContactDomain(domainName, btnEl = null) {
  currentContactDomain = domainName;
  document.querySelectorAll('.contact-domain-badge').forEach(b => {
    b.classList.remove('active');
  });
  if (btnEl) {
    btnEl.classList.add('active');
  } else {
    document.querySelectorAll(`[data-domain="${domainName}"]`).forEach(b => b.classList.add('active'));
  }
  const homeMsg = document.getElementById('c-msg');
  if (homeMsg && (!homeMsg.value || homeMsg.value.startsWith('Inquiry regarding '))) {
    homeMsg.placeholder = `Technical enquiry regarding ${domainName}: frequency bands, platform envelope, radome requirements...`;
  }
  const pageMsg = document.getElementById('p-msg');
  if (pageMsg && (!pageMsg.value || pageMsg.value.startsWith('Inquiry regarding '))) {
    pageMsg.placeholder = `Technical enquiry regarding ${domainName}: frequency bands, platform envelope, radome requirements...`;
  }
  showToast(`Selected technical domain: ${domainName}`);
}

export function openEnquirySection() {
  const section = document.getElementById('enquiry-section');
  if (section) {
    section.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.getElementById('c-name')?.focus();
    }, 100);
  } else {
    const pageInput = document.getElementById('p-name');
    if (pageInput) {
      pageInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      pageInput.focus();
    } else {
      openEnquiryModal();
    }
  }
}

export function closeEnquirySection() {
  const section = document.getElementById('enquiry-section');
  if (section) {
    section.style.display = 'none';
    document.body.style.overflow = '';
  }
}

export function toggleInlineEnquiryForm() {
  const container = document.getElementById('inline-enquiry-drawer');
  if (!container) return;
  const isHidden = container.style.display === 'none' || !container.style.display;
  if (isHidden) {
    container.style.display = 'block';
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const nameInput = container.querySelector('input');
    if (nameInput) setTimeout(() => nameInput.focus(), 250);
  } else {
    container.style.display = 'none';
  }
}

export function copyContactEmail(email) {
  navigator.clipboard.writeText(email).then(() => {
    showToast(`Copied ${email} to clipboard`);
  }).catch(() => {
    const temp = document.createElement('input');
    temp.value = email;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    showToast(`Copied ${email} to clipboard`);
  });
}

export function resetContactForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.reset();
  const feedbackId = formId === 'home-contact-form' ? 'form-feedback' :
                     formId === 'page-contact-form' ? 'page-form-feedback' :
                     formId === 'modal-enquiry-form' ? 'modal-enquiry-feedback' : null;
  const feedbackEl = feedbackId ? document.getElementById(feedbackId) : null;
  if (feedbackEl) {
    feedbackEl.style.display = 'none';
    feedbackEl.innerHTML = '';
  }
  const fields = form.querySelector('.contact-fields-container');
  if (fields) fields.style.display = 'flex';
}

export function handleContactSubmit(e, formId) {
  e.preventDefault();
  const form = document.getElementById(formId);
  if (!form) return;

  const prefix = formId === 'home-contact-form' ? 'c-' :
                 formId === 'modal-enquiry-form' ? 'm-' : 'p-';
  const nameEl = form.querySelector(`#${prefix}name`);
  const emailEl = form.querySelector(`#${prefix}email`);
  const orgEl = form.querySelector(`#${prefix}org`);
  const msgEl = form.querySelector(`#${prefix}msg`);

  const name = nameEl?.value.trim() || '';
  const email = emailEl?.value.trim() || '';
  const org = orgEl?.value.trim() || '';
  const msg = msgEl?.value.trim() || '';

  const feedbackId = formId === 'home-contact-form' ? 'form-feedback' :
                     formId === 'page-contact-form' ? 'page-form-feedback' :
                     formId === 'modal-enquiry-form' ? 'modal-enquiry-feedback' : null;
  let feedbackEl = feedbackId ? document.getElementById(feedbackId) : null;

  if (!name || !email || !msg) {
    if (feedbackEl) {
      feedbackEl.style.display = 'block';
      feedbackEl.style.background = 'rgba(255, 92, 108, 0.12)';
      feedbackEl.style.border = '1px solid rgba(255, 92, 108, 0.35)';
      feedbackEl.style.color = '#FF5C6C';
      feedbackEl.style.padding = '0.85rem 1rem';
      feedbackEl.style.borderRadius = '8px';
      feedbackEl.style.fontSize = '0.85rem';
      feedbackEl.innerHTML = 'Please fill out all required fields (Name, Work Email, and Requirements).';
    }
    return;
  }

  // Generate Reference Tracking Code
  const refCode = `VRD-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  // Construct mailto link
  const emailSubject = encodeURIComponent(`[${refCode}] Technical Enquiry - ${org || name}`);
  const emailBody = encodeURIComponent(
    `REF: ${refCode}\n` +
    `REQUESTER: ${name}\n` +
    `ORGANISATION: ${org}\n` +
    `EMAIL: ${email}\n\n` +
    `REQUIREMENTS:\n${msg}\n\n` +
    `-- Verdant Engineering Portal`
  );
  const mailtoUrl = `mailto:info@verdanttelemetry.com?subject=${emailSubject}&body=${emailBody}`;

  // Hide fields container and show focused confirmation receipt
  const fieldsContainer = form.querySelector('.contact-fields-container');
  if (fieldsContainer) fieldsContainer.style.display = 'none';

  if (feedbackEl) {
    feedbackEl.style.display = 'block';
    feedbackEl.style.background = 'rgba(3, 188, 159, 0.08)';
    feedbackEl.style.border = '1px solid rgba(3, 188, 159, 0.4)';
    feedbackEl.style.borderRadius = '8px';
    feedbackEl.style.padding = '1.5rem';
    feedbackEl.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; border-bottom: 1px solid rgba(3, 188, 159, 0.25); padding-bottom: 0.6rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--accent); font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent); display: inline-block;"></span>
          ENQUIRY RECEIVED
        </div>
        <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">${refCode}</span>
      </div>

      <p style="font-size: 0.95rem; color: var(--text); line-height: 1.5; margin-bottom: 0.5rem;">
        Thank you, <strong>${name}</strong>.
      </p>
      <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1.25rem;">
        Your enquiry has been routed directly to our engineering team in Cochin and Coimbatore. We will review your specifications and follow up at <strong>${email}</strong>.
      </p>

      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
        <a href="${mailtoUrl}" class="btn-primary" style="font-size: 0.8rem; padding: 0.45rem 0.9rem; text-decoration: none;">
          Open in Email Client
        </a>
        <button type="button" onclick="window.resetContactForm('${formId}')" class="btn-secondary" style="font-size: 0.8rem; padding: 0.45rem 0.9rem;">
          Send Another Message
        </button>
      </div>
    `;
  }
}

export function renderContactView() {
  const hash = typeof window !== 'undefined' ? window.location.hash : '';
  const urlParams = new URLSearchParams(hash.split('?')[1] || '');
  const enquiryItem = urlParams.get('enquiry') || '';

  return `
  <section style="padding: 120px 0 80px; background: var(--bg); min-height: 85vh;">
    <div class="container-wide">
      
      <!-- HERO SHOWCASE BANNER MATCHING REFERENCE IMAGE -->
      <div class="contact-hero-banner" style="margin-bottom: 3.5rem;">
        <div class="contact-hero-content">
          <h1 class="contact-hero-title">
            Get in Touch
          </h1>
          <p class="contact-hero-desc">
            The defence and aerospace operating environment demands sovereign electromagnetic mastery. At Verdant Telemetry, collaborate directly with microwave engineers, radome aerodynamicists, and flight-qualification veterans on mission-critical technologies deployed and relied upon across frontline combat airframes, naval platforms, and tactical missiles.
          </p>

          <div class="contact-hero-action-row">
            <a href="#page-contact-form" class="contact-cta-pill" onclick="document.getElementById('p-name')?.focus()">
              Get started
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3.5rem; align-items: start; margin-top: 1rem;">
        <!-- Left: Contact Details -->
        <div style="padding: 0.5rem 0;">
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.5rem; font-weight: 600;">
            DEFENCE HEADQUARTERS &amp; FACILITIES
          </div>
          <h3 style="font-size: 1.35rem; font-weight: 700; color: var(--text); margin-bottom: 0.35rem;">
            Verdant Telemetry &amp; Antenna Systems
          </h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 2rem;">
            AS9100 Rev D &bull; CEMILAC Certified Aerospace Facility &bull; Est. 1997
          </p>

          <div style="display: flex; flex-direction: column; gap: 1.5rem; font-size: 0.9rem; color: var(--text-muted); margin-bottom: 2.5rem;">
            <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" style="margin-top: 3px; color: var(--accent); flex-shrink: 0;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <strong style="color: var(--text); display: block; margin-bottom: 0.2rem;">Headquarters &amp; Manufacturing Facility</strong>
                26/411 A, Konthuruthy, Cochin – 682 013, Kerala, India
              </div>
            </div>

            <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" style="margin-top: 3px; color: var(--accent); flex-shrink: 0;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <strong style="color: var(--text); display: block; margin-bottom: 0.2rem;">R&amp;D &amp; Design Centre</strong>
                Aerospace &amp; Defence Innovation Corridor, Coimbatore, Tamil Nadu, India
              </div>
            </div>

            <div style="display: flex; gap: 0.75rem; align-items: center;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" style="color: var(--accent); flex-shrink: 0;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div>
                <a href="tel:+914842663104" style="color: var(--text); text-decoration: none;">+91-484-2663104</a> / <a href="tel:+914842663576" style="color: var(--text); text-decoration: none;">2663576</a>
              </div>
            </div>

            <div style="display: flex; gap: 0.75rem; align-items: center;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" style="color: var(--accent); flex-shrink: 0;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <div>
                <a href="mailto:info@verdanttelemetry.com" style="color: var(--accent); text-decoration: none;">info@verdanttelemetry.com</a>
              </div>
            </div>
          </div>

          <div style="border-top: 1px solid var(--border); padding-top: 1.25rem; font-size: 0.8125rem; color: var(--text-muted); line-height: 1.6;">
            <div style="color: var(--text); font-weight: 600; margin-bottom: 0.25rem;">Operating Hours</div>
            <div>Monday &ndash; Friday: 09:00 &ndash; 18:00 IST (UTC+5:30)</div>
          </div>
        </div>

        <!-- Right: Un-islanded Direct Contact Form (Simplified & Clean) -->
        <div style="padding: 0.5rem 0;">
          <h3 style="font-size: 1.35rem; font-weight: 700; color: #EAF2F0; margin-bottom: 0.4rem; letter-spacing: -0.01em;">
            Technical Enquiry
          </h3>
          <p style="font-size: 0.875rem; color: #8FA3A0; margin-bottom: 1.5rem; line-height: 1.5;">
            ${enquiryItem ? `Direct inquiry regarding antenna reference: <strong style="color:#EAF2F0;">${enquiryItem}</strong>` : 'Connect directly with our microwave &amp; radome engineering team.'}
          </p>

          <form id="page-contact-form" onsubmit="handleContactSubmit(event, 'page-contact-form')" novalidate>
            <div class="contact-fields-container" style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.85rem;">
                <div>
                  <label for="p-name" style="display: block; font-size: 0.78rem; font-weight: 500; color: #8FA3A0; margin-bottom: 0.35rem;">Name *</label>
                  <input type="text" id="p-name" required placeholder="Your name" class="contact-input" style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 8px; padding: 0.7rem 0.85rem; color: #EAF2F0; font-size: 0.875rem; outline: none; transition: border-color 0.2s, box-shadow 0.2s;" />
                </div>

                <div>
                  <label for="p-email" style="display: block; font-size: 0.78rem; font-weight: 500; color: #8FA3A0; margin-bottom: 0.35rem;">Work Email *</label>
                  <input type="email" id="p-email" required placeholder="name@company.com" class="contact-input" style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 8px; padding: 0.7rem 0.85rem; color: #EAF2F0; font-size: 0.875rem; outline: none; transition: border-color 0.2s, box-shadow 0.2s;" />
                </div>
              </div>

              <div>
                <label for="p-org" style="display: block; font-size: 0.78rem; font-weight: 500; color: #8FA3A0; margin-bottom: 0.35rem;">Organisation <span style="color: #5B6E6C; font-weight: 400;">(optional)</span></label>
                <input type="text" id="p-org" placeholder="Company or Defence Agency" class="contact-input" style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 8px; padding: 0.7rem 0.85rem; color: #EAF2F0; font-size: 0.875rem; outline: none; transition: border-color 0.2s, box-shadow 0.2s;" />
              </div>

              <div>
                <label for="p-msg" style="display: block; font-size: 0.78rem; font-weight: 500; color: #8FA3A0; margin-bottom: 0.35rem;">Requirements *</label>
                <textarea id="p-msg" rows="3" required placeholder="Describe your platform envelope, frequency requirements, or model..." class="contact-input" style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 8px; padding: 0.7rem 0.85rem; color: #EAF2F0; font-size: 0.875rem; outline: none; resize: vertical; line-height: 1.5; transition: border-color 0.2s, box-shadow 0.2s;">${enquiryItem ? `Inquiry regarding antenna ${enquiryItem}:\n` : ''}</textarea>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.85rem; margin-top: 0.25rem;">
                <button type="submit" class="contact-cta-pill" style="padding: 0.75rem 1.75rem; font-size: 0.875rem;">
                  Submit enquiry &rarr;
                </button>
                <div style="font-size: 0.78rem; color: #8FA3A0;">
                  Direct: <a href="mailto:info@verdanttelemetry.com" style="color: var(--accent); text-decoration: none;">info@verdanttelemetry.com</a>
                </div>
              </div>
            </div>

            <div id="page-form-feedback" style="display: none; margin-top: 1rem;"></div>
          </form>
        </div>
      </div>
    </div>
  </section>
  `;
}
