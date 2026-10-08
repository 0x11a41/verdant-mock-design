/**
 * Modals & Notification Utilities
 * Verdant Telemetry & Antenna Systems
 */

export function showToast(msg) {
  let toast = document.getElementById('verdant-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'verdant-toast';
    toast.style.cssText = 'position:fixed;bottom:2rem;right:2rem;background:#05090D;border:1px solid #03BC9F;color:#EAF2F0;padding:0.75rem 1.25rem;border-radius:8px;font-size:0.875rem;font-family:var(--font-mono);box-shadow:0 8px 30px rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;gap:0.6rem;transition:all 0.25s ease;transform:translateY(100px);opacity:0;pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="color:#03BC9F;font-size:0.9rem;">●</span> ${msg}`;
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
  }, 3200);
}

export function openEnquiryModal(productRef = '') {
  const modal = document.getElementById('general-enquiry-modal');
  const title = document.getElementById('enquiry-modal-title');
  const inputRef = document.getElementById('modal-product-ref');
  if (modal) {
    if (title) title.innerText = productRef ? `Enquiry: ${productRef}` : 'Make an Enquiry';
    if (inputRef) inputRef.value = productRef;
    modal.style.display = 'flex';
  }
}

export function closeEnquiryModal() {
  const modal = document.getElementById('general-enquiry-modal');
  if (modal) modal.style.display = 'none';
}
