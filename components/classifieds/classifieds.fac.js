(function() {

	"use strict";
	angular
		.module('ngClassifieds')
		.factory('classifiedsFactory', function($http, $firebaseArray){
			
			  // Initialize Firebase
			  var config = {
			    apiKey: "AIzaSyA8Nb-DP8BgMXdDIddM9yfVrP9nHCv4Uvg",
			    authDomain: "ngclassifieds-29430.firebaseapp.com",
			    databaseURL: "https://ngclassifieds-29430.firebaseio.com",
			    storageBucket: "ngclassifieds-29430.appspot.com",
			    messagingSenderId: "649787252330"
			  };
			  firebase.initializeApp(config);
			  
			  var ref = firebase.database().ref(); //database reference

			return {
				ref: $firebaseArray(ref) 
			}
		});
})();