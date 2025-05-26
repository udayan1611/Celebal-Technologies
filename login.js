const form = document.getElementById('login-form');
const err  = document.getElementById('error-msg');
const btn  = document.getElementById('submit-btn');

form.addEventListener('submit', e => {
  e.preventDefault();
  err.textContent = '';

  const email = form.username.value.trim();
  const pass  = form.password.value;

  if (!email || !pass) {
    err.textContent = 'Both fields are required.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    err.textContent = 'Invalid email address.';
    return;
  }
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(pass)) {
    err.textContent = 'Password must be ≥6 chars and include upper, lower & number.';
    return;
  }

  window.location.href = 'restricted.html';
});