
//used to sign a use in with firebase Oauth and exhisting google account
//auth.signInWithEmailAndPassword(email, pass);
//used to create new access
//auth.createUserWithEmailAndPassword(email, password);
//checks to see if the oauth state has changed after login
//auth.onAuthStateChanged(firebaseUser => { });
var config = require('../../config/auth');
// var config = {
//     apiKey: "AIzaSyCnmHqTk9X8HD_T852mvO29QN370QKmeA0",
//     authDomain: "pursuit-19db7.firebaseapp.com",
//     databaseURL: "https://pursuit-19db7.firebaseio.com",
//     projectId: "pursuit-19db7",
//     storageBucket: "pursuit-19db7.appspot.com",
//     messagingSenderId: "61950672392"
//   };
  firebase.initializeApp(config);
  const auth = firebase.auth();
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

//Login listener
btnLogin.addEventListener('click', e => {
console.log("Button Pressed")
const email =txtEmail.value + "@yelp.com";
const pass = txtPassword.value;
const auth = firebase.auth();
document.getElementById("txtEmail").value = "";
document.getElementById("txtPassword").value = "";
//signin
const promise = auth.signInWithEmailAndPassword(email, pass);
promise.catch(e => console.log(e.message));
setTimeout(() => {
    alert(
        `User not found!
        Pleae log in...`
                );
}, 1000);
});

//Auth listener
auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
        //btnSignUp.classList.remove('hide');
        console.log("Redirecting...");
        console.log(window.location);
        window.location.href = "/home";
    }else{
        console.log('not logged in');
        btnSignUp.classList.add('hide');
    }
});

//Google Auth
