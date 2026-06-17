import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
getAuth,
GoogleAuthProvider,
signInWithPopup,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyBa_Ur6MleAv6XFzBnTFRlcX_H_VwSWV3U",
authDomain: "navera-store.firebaseapp.com",
projectId: "navera-store",
storageBucket: "navera-store.firebasestorage.app",
messagingSenderId: "606350193071",
appId: "1:606350193071:web:d11d9b9163de3716363f5a",
measurementId: "G-3JV2HQEYHB"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

window.loginGoogle = async () => {

try {

const provider = new GoogleAuthProvider();

await signInWithPopup(
auth,
provider
);

} catch(err){

alert(err.message);

}

};

window.logoutGoogle = async () => {

await signOut(auth);

};

onAuthStateChanged(auth,(user)=>{

if(user){

document.getElementById("userName").innerText =
user.displayName;

document.getElementById("userEmail").innerText =
user.email;

document.getElementById("userPhoto").src =
user.photoURL;

}else{

document.getElementById("userName").innerText =
"Belum Login";

document.getElementById("userEmail").innerText =
"-";

}

});}catch(err){

alert(err.message);

}

};

window.logoutGoogle = async () => {

await signOut(auth);

};

onAuthStateChanged(
auth,
(user)=>{

if(user){

document.getElementById(
"userName"
).innerText =
user.displayName;

document.getElementById(
"emailText"
).innerText =
user.email;

document.getElementById(
"userPhoto"
).src =
user.photoURL;

}else{

document.getElementById(
"userName"
).innerText =
"Belum Login";

document.getElementById(
"emailText"
).innerText =
"-";

}

}
);
