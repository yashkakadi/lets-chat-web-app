// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyA-qPDpbFAckM1zvUICQSv0hD24J6x8RV8",
    authDomain: "chat1-3c159.firebaseapp.com",
    databaseURL: "https://chat1-3c159-default-rtdb.firebaseio.com",
    projectId: "chat1-3c159",
    storageBucket: "chat1-3c159.appspot.com",
    messagingSenderId: "811484911201",
    appId: "1:811484911201:web:bc7acd7caaedb41d61fc20",
    measurementId: "G-XJQJDRP2HN"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
  
}



