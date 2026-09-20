window.addEventListener('load', () => {
  // Fade in on page load
  document.body.classList.add('loaded');
});

// Intercept link clicks for fade-out transition
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  // Ensure it's a valid link navigating within the same site
  if (
    link &&
    link.href &&
    link.target !== '_blank' &&
    !link.getAttribute('href').startsWith('#') &&
    link.origin === window.location.origin
  ) {
    e.preventDefault(); // Stop instant navigation
    const targetUrl = link.href;

    // Trigger fade-out state
    document.body.classList.remove('loaded');

    // Wait for CSS transition duration (e.g., 500ms) before navigating
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 500);
  }
});

// Reset body state if user navigates back using browser Back/Forward buttons
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    document.body.classList.add('loaded');
  }
});