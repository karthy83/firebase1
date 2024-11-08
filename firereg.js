const registerUser = (email, password) => {
    console.log("Attempting to register user with email:", email); // Log the email being used
    auth.createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log("User registered:", userCredential.user);
            storeUserData(userCredential.user);
        })
        .catch(error => {
            console.error("Error during registration:", error.code, error.message);
            alert("Registration error: " + error.message); // Show error message
        });
};
