import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";



const firebaseConfig = {
    apiKey: "AIzaSyCKs3hks63jsziwhXjsV__SBUM9mNIXhP8",
    authDomain: "flix-got.firebaseapp.com",
    projectId: "flix-got",
    storageBucket: "flix-got.appspot.com",
    messagingSenderId: "930519679112",
    appId: "1:930519679112:web:93888fb8165c6b1b529f3d",
    measurementId: "G-V8Z4LYG0SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();



const analytics = getAnalytics(app);

const googleLogin = document.getElementById("google-login-btn");

googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href = "../logged.html";

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;


        });
})

function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;

    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").src = userProfilePicture;

}

updateUserProfile()