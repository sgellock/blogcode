"use strict";

const _ = require("lodash");

// ES5 module pattern

const person = (function(who){
	let me = who || 'Anonymous';

	const identify = function() {
		return me;
	};


	const publicAPI = {
		speak: function() {
    		console.log('Hello, ' + identify() + ' here.');
		},
	};
	return publicAPI;
})('Kanye');


// call our function
person.speak();


// prove our private stuff is indeed private
// console.log(foo.who);


const rapper = (function(parentModule){
	const lyric = 'Like we always do at this time\nI go for mine, I got to shine';

	const publicAPI = _.extend(parentModule, {
		rap: function() {
			console.log(lyric);
		}

	});

	return publicAPI;
})(person);


rapper.rap();
