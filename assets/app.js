// Initialize Firebase
var config = {
  apiKey: "AIzaSyA9FkGVKS4QH7RzWOFl47tfozzLLXm4XcA",
  authDomain: "bus-scheduler.firebaseapp.com",
  databaseURL: "https://bus-scheduler.firebaseio.com",
  projectId: "bus-scheduler",
  storageBucket: "bus-scheduler.appspot.com",
  messagingSenderId: "107320067942"
};
firebase.initializeApp(config);

//set variable to refer to database
var database = firebase.database();

//function that, on click of button, will push information from text-boxes to firebase
$("#add-bus-btn").click(function(event){
	event.preventDefault();
	//saves user input to variables
	var name = $("#bus-name-input").val().trim();
	var destination = $("#destination-input").val().trim();
	var firstBusTime = $("#first-bus-input").val().trim();
	var frequency = $("#frequency-input").val().trim();

	//object for holding bus data
	var newBus = {
		busName: name,
		busDestination: destination,
		firstTime: firstBusTime,
		busFrequency: frequency
	};

	//push data to firebase
	database.ref().push(newBus);

	console.log(newBus.busName);
	console.log(newBus.busDestination);
	console.log(newBus.firstTime);
	console.log(newBus.busFrequency);

	//clears out text-boxes
	$("#bus-name-input").val("");
	$("#destination-input").val("");
	$("#first-bus-input").val("");
	$("#frequency-input").val("");

});