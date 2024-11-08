const storeUserData = (user) => {
    const userData = {
        email: user.email,
        uid: user.uid,
        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    };
    console.log("Storing user data:", userData); // Log the user data being stored
    db.collection("users").doc(user.uid).set(userData)
        .then(() => {
            console.log("User data stored in Firestore");
            alert("User data stored successfully!");
        })
        .catch(error => {
            console.error("Error storing user data:", error.code, error.message);
            alert("Error storing user data: " + error.message); // Show error message
        });
};
