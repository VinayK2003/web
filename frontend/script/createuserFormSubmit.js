// createuserFormSubmit.js
function submitForm() {
  const useridInput = document.getElementById("userid");
  const passwordInput = document.getElementById("password");

  const userid = useridInput.value;
  const password = passwordInput.value;

  // AJAX request using Fetch API
  fetch("http://localhost:3000/submitForm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userid, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Handle the response from the server

      // Clear form fields after successful submission
      useridInput.value = "";
      passwordInput.value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
// createuserFormSubmit.js

// Function to fetch latest 2 users from the server
async function fetchLatestUsers() {
    try {
      const response = await fetch("http://localhost:3000/latestUsers");
      const latestUsers = await response.json();
  
      // Update the HTML with the fetched user data
      const userListContainer = document.getElementById("userList");
      userListContainer.innerHTML = "";
  
      latestUsers.forEach((user) => {
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `<p>${user.user_id}</p>`; // Use template literals
        userListContainer.appendChild(userDiv);
      });
    } catch (error) {
      console.error("Error fetching latest users:", error);
    }
  }
  
  // Call the fetchLatestUsers function when the page loads
  document.addEventListener("DOMContentLoaded", fetchLatestUsers);
  