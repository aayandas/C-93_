const firebaseConfig = {
      apiKey: "AIzaSyDz7U-YjW4b6me2OcV2O4BsyqHwiGiTpcM",
      authDomain: "kwitter-d6942.firebaseapp.com",
      projectId: "kwitter-d6942",
      storageBucket: "kwitter-d6942.appspot.com",
      messagingSenderId: "837806032183",
      appId: "1:837806032183:web:96f6c25c3a7f4f90d746b2"
    };
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
