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

//function on firebase event. when there are children, rows are added to the html; when a new child is added, a new row in the html appears
//also handles moments.js time manipulation
database.ref().on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	//store the child data as variables
	var name = childSnapshot.val().busName;
	var destination = childSnapshot.val().busDestination;
	var firstBusTime = childSnapshot.val().firstTime;
	var frequency = childSnapshot.val().busFrequency;

	console.log(name);
	console.log(destination);
	console.log(firstBusTime);
	console.log(frequency);

	//moment.js stuff will go here

	//Adding bus data as a new row in the table
	$("#bus-table > tbody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + firstBusTime + "</td><td>" + frequency + "</td></tr>");

});





















