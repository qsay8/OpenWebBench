(() => {
  const form = document.querySelector('#demo-form');
  const status = document.querySelector('#form-status');
  const countOutput = document.querySelector('#count');
  let count = 0;

  function setError(id, message) {
    document.querySelector(`#${id}-error`).textContent = message;
    document.querySelector(`#${id}`).setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const nameError = name.length < 2 ? 'Please enter at least two characters.' : '';
    const emailError = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Enter a valid email address.';
    setError('name', nameError);
    setError('email', emailError);
    if (nameError || emailError) {
      status.textContent = 'Please correct the highlighted fields.';
      (nameError ? document.querySelector('#name') : document.querySelector('#email')).focus();
      return;
    }
    status.textContent = `Thanks, ${name}. The ${document.querySelector('#topic').selectedOptions[0].text.toLowerCase()} demo was validated.`;
  });

  function renderCount() { countOutput.value = String(count); countOutput.textContent = String(count); }
  document.querySelector('#increment').addEventListener('click', () => { count += 1; renderCount(); });
  document.querySelector('#decrement').addEventListener('click', () => { count -= 1; renderCount(); });
  document.querySelector('#reset').addEventListener('click', () => { count = 0; renderCount(); });
})();
