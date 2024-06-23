import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup,  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCepZFxUVNG-6qEssKgQ1RkLqxYpG89_rQ",
    authDomain: "login-with-filebase-database.firebaseapp.com",
    projectId: "login-with-filebase-database",
    storageBucket: "login-with-filebase-database.appspot.com",
    messagingSenderId: "843874390983",
    appId: "1:843874390983:web:6e88dab8ebb55a1acdffe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const signInButton = document.getElementById("google-login-btn");
const userName = document.getElementById("userName");

const userSignIn = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = '/HTML/index.html';
    } catch (error) {
        console.error("Error during sign-in:", error);
    }
};


onAuthStateChanged(auth, (user) => {
    if (user) {
        userName.innerHTML = user.displayName;
    }
});

signInButton.addEventListener('click', (event) => {
    event.preventDefault();
    userSignIn();
});

document.getElementById('logoutLink').addEventListener('click', function(event) {
    event.preventDefault(); 
    
    var confirmLogout = confirm('Bạn có chắc chắn muốn đăng xuất?');
    
    if (confirmLogout) {
        window.location.href = '/Login/login.html';
    } else {

    }
});


