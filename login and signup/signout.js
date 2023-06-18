// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIo38i2rf4wmHdNgC76rHJ2arsGz5fAAI",
    authDomain: "full-auth-dda3d.firebaseapp.com",
    projectId: "full-auth-dda3d",
    storageBucket: "full-auth-dda3d.appspot.com",
    messagingSenderId: "703642501169",
    appId: "1:703642501169:web:1adbf09b6459a2dba0d510"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);       

  const auth = firebase.auth();



  auth.onAuthStateChanged(function(user){
    if(user){
        var email = user.email
        var user = document.getElementById("user");
        var text = document.createTextNode(email);
        user.appendChild(text);
        console.log(user);
    }
    else{
    }
  });
  //logout
  let signOutButton = document.getElementById("signout");
  signOutButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("logout clicked");
    auth.signOut();
    alert("signed out");
    window.location = "index.html";
  });