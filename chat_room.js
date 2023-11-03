
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyBBIlg5UP3YapxdjRaqKhSlCJuh30gjfOo",
  authDomain: "kwitter-66f6a.firebaseapp.com",
  databaseURL: "https://kwitter-66f6a-default-rtdb.firebaseio.com",
  projectId: "kwitter-66f6a",
  storageBucket: "kwitter-66f6a.appspot.com",
  messagingSenderId: "637783276523",
  appId: "1:637783276523:web:7beafd33de4dd52242b7ae"
};
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}
getData()


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
  
  localStorage.setItem("room_name" , room_name);

  window.location = "kwitter_page.html";
}
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name", name)
        window.location = "chat_page.html";
  }
  function logout()
  {
        localStorage.removeItem("user_name")
        localStorage.removeItem("room_name")
        window.location = "index.html"
  }