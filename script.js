document.querySelector('form').addEventListener('submit', function(event) {
    const email = document.querySelector('input[type="email"]').value;
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      event.preventDefault();
    }
  });
  
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }
  