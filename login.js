// Make sure to use the MOCK CREDENTIALS MENTIONED IN THE CODE TO ACCESS RESTRICTED CONTENT


const form     = document.getElementById('login-form');
const err      = document.getElementById('error-msg');
const toggle   = document.getElementById('toggle-pw');
const pwdInput = document.getElementById('password');

// mock credentials
const MOCK_USER  = 'user@example.com';
const MOCK_PASS  = 'Password1';

// show / hide password
toggle.addEventListener('click', () => {
  pwdInput.type = pwdInput.type === 'password' ? 'text' : 'password';
  toggle.classList.toggle('uil-eye');
  toggle.classList.toggle('uil-eye-slash');
});

form.addEventListener('submit', e => {
  e.preventDefault();
  err.textContent = '';

  const email = form.username.value.trim();
  const pass  = pwdInput.value;

  // 1) required
  if (!email || !pass) {
    err.textContent = 'Both fields are required.';
    return;
  }
  // 2) email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    err.textContent = 'Invalid email address.';
    return;
  }
  // 3) password strength
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(pass)) {
    err.textContent = 'Password must be ≥6 chars and include upper, lower & number.';
    return;
  }
  // 4) credentials check
  if (email !== MOCK_USER || pass !== MOCK_PASS) {
    err.textContent = 'Incorrect email or password.';
    return;
  }

  // all good → go to restricted page
  window.location.href = 'restricted.html';
});
