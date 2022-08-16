// Your web app's Firebase configuration

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBb53WpkNpmVCwSwaJ3EPwRtv_XwV_0Ms4",
      authDomain: "kwitter-a30b6.firebaseapp.com",
      databaseURL: "https://kwitter-a30b6-default-rtdb.firebaseio.com",
      projectId: "kwitter-a30b6",
      storageBucket: "kwitter-a30b6.appspot.com",
      messagingSenderId: "16410524274",
      appId: "1:16410524274:web:ec38fa1810a3a38c1b60eb"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onlick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;    
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
