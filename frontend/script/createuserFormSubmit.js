// createuserFormSubmit.js
function submitForm() {
    const useridInput = document.getElementById('userid');
    const passwordInput = document.getElementById('password');
  
    const userid = useridInput.value;
    const password = passwordInput.value;
  
    // AJAX request using Fetch API
    fetch('http://localhost:3000/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userid, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response from the server
        
        // Clear form fields after successful submission
        useridInput.value = '';
        passwordInput.value = '';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
