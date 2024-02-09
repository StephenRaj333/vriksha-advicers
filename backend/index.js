const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Dummy data array to store form submissions
let formDataArray = [];

app.use(cors({  
  origin: 'http://127.0.0.1:5500'   
}));    

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint to handle POST requests and push form data into the array
app.post('/endpoint', (req, res) => {
    const formData = req.body;

    // Push the received form data into the array
    formDataArray.push(formData);

    // Do whatever processing you want with the form data
    console.log('Received form data:', formData);

    res.status(200).send('Form data received successfully');
});

// Endpoint to handle GET requests and return the form data array
app.get('/formData', (req, res) => {
    res.json(formDataArray);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);        
});
