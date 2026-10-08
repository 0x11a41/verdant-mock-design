/**
 * 404 Not Found View
 * Verdant Telemetry & Antenna Systems
 */

export function render404View() {
  return `
  <section style="padding: 160px 0 100px; background: var(--bg); text-align: center; min-height: 80vh; display: flex; align-items: center;">
    <div class="container-wide">
      <div style="font-family: var(--font-mono); font-size: 1rem; color: var(--accent); margin-bottom: 1rem;">404 · FREQUENCY OUT OF RANGE</div>
      <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; color: var(--text); margin-bottom: 1rem;">View Not Found</h1>
      <p style="font-size: 1.1rem; color: var(--text-muted); max-width: 500px; margin: 0 auto 2rem; line-height: 1.6;">
        The requested routing does not match any Verdant Telemetry page or product category.
      </p>
      <a href="#/" class="btn-primary">Return to Homepage</a>
    </div>
  </section>
  `;
}
