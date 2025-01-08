// first we make a form variable 
const form =document.querySelector('form')

// if we pass a value here then it gives empty value
// const height = parseInt(document.querySelector('#height').value)




// Add submit event listener
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Fetch values from the input fields
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results'); // Fix: No .value here

    // Validate height
    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please enter a valid height.`;
        return; // Stop execution if invalid
    }

    // Validate weight
    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please enter a valid weight.`;
        return; // Stop execution if invalid
    }

    // Calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Display the result
    results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
});
