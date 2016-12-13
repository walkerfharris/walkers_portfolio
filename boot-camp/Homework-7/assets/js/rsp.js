$(document).ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCB4kPwJ0seOeJ78KxYcsCVFHAFK8Z3hBM",
        authDomain: "online-rps-rdb.firebaseapp.com",
        databaseURL: "https://online-rps-rdb.firebaseio.com",
        storageBucket: "online-rps-rdb.appspot.com",
        messagingSenderId: "1056663355459"
    };
    firebase.initializeApp(config);

    // Get a database reference
    var database = firebase.database().ref().child('Players');
    var fireSnap;

    // at first page load, ge a snapshot of the database

    database.on('value', function(snapshot) {
        console.log(snapshot.val());
    });

    // global vars
    var playerOneReady = false;         // on load player one not ready
    var playerTwoReady = false;         // on load player two not ready
    var gameReady = false;              // Game will be ready when both players are in

    // assign name to player1 and player2

    // function assignName() {

    // }

}) // document ready on ln.1 ends here