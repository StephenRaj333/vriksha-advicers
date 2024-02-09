
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission
      
      // Get form values
      const formData = new FormData(form);
      const values = {};
      formData.forEach((value, key) => {
        values[key] = value;
      });
      
      axios.post('http://localhost:3000/endpoint', values)  
      .then(function (response) {
        console.log(response);
        // Handle success, if needed
      })
      .catch(function (error) {
        console.error(error);
        // Handle error, if needed
      });

      // Display entered values (optional)
      alert(`Name: ${values.fname}\nEmail: ${values.email}\nPhone: ${values.phone}\nMessage: ${values.textarea}`);
    });
  });
  