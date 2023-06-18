// Fire base config
const firebaseConfig = {
    apiKey: "AIzaSyAVlFuQkKNpgk_KLj24obqbYHABxaQO9gQ",
    authDomain: "authentication-d6771.firebaseapp.com",
    projectId: "authentication-d6771",
    storageBucket: "authentication-d6771.appspot.com",
    messagingSenderId: "482235027474",
    appId: "1:482235027474:web:7dc0e72ff2a6e3072c48cb"
  };
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Signup Function
let signupButton = document.getElementById("signup")

signupButton.addEventListener("click",(e) =>{
    e.preventDefault();
    console.log("signup click");

    var email = document.getElementById("inputEmail");
    var Password = document.getElementById("inputPassword");

    auth 
    .createUserWithEmailAndPassword(email.value,Password.value)
    .then((userCredential) => {
        location.reload();
        alert("sign up successfull kindly login")
        // Signed in
        var user = userCredential.user;
        console.log("user,user.mail");
    })
    .catch((error) => {
    
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code",errorCode);
        console.log("error message",errorMessage);
        alert(errorMessage);
    });
});


//Signin Function
let signInButton = document.getElementById("signin")

signInButton.addEventListener("click",(e) =>{
    e.preventDefault();
    console.log("signin click");
    
    var email = document.getElementById("inputEmail");
    var Password = document.getElementById("inputPassword");

    auth 
    .signInWithEmailAndPassword(email.value,Password.value)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("user",user.mail);
        window.location = "home.html";
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
});
//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthStateChanged(function (user){
    if (user) {
        var email = user.mail;
        var user = document.getElementById("user");
        var text = document.createTextNode(email);
        user.appendChild(text);
        console.log(user);
    }
    else {
        alert("user not registered signup or login now");
        window.location = "login.html"
    }
});

// password confirmation js//
function checkPassword(){
    let Password = document.getElementById("inputPassword").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    console.log(Password,cnfrmPassword);
    let message = document.getElementById("message");
    
    if(Password.lenght != 0){
        if(Password == cnfrmPassword){
            message.textContent = "Passwords match";
            message.style.backgroundColor = "#3ae374";
            message.style.width = "50%";
            message.style.borderRadius = "5px";
            message.style.padding = "3px";
            message.style.marginTop = "5px";
        }
        else{
            message.textContent = "Passwords don't match";
            message.style.backgroundColor = "#ff4d4d";
            message.style.width = "70%";
            message.style.borderRadius = "5px";
            message.style.padding = "3px";
            message.style.marginTop = "5px";
        }
    }
    else{
        alert("password can't be empty")
        message.textContent = "";
    }
}
