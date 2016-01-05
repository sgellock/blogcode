"use strict";

// ES5 module pattern

let Person = (function(){
	let me = 'Anonymous';

	const publicAPI = function(who) {
		this.me = who;
	};

	publicAPI.prototype.identify = function() {
	    return this.me;
	};

	publicAPI.prototype.speak = function() {
    	console.log('Hello, ' + this.identify() + ' here.');
	};

	return publicAPI;
})();


// prove our private stuff is indeed private
// const person = new Person('Biggie Smalls');
// console.log(person.who);


const Rapper = (function(parentModule){
	const __super__ = parentModule.prototype;
	const lyric     = 'Like we always do at this time\nI go for mine, I got to shine';

	const publicAPI = function(who) {
		parentModule.apply(this, arguments);
	};

	publicAPI.prototype = Object.create(__super__);

	// publicAPI.prototype.identify = function() {
	// 	const temp = __super__.identify.call(this);
	// 	return temp + " (aka Mr. West)";
	// };

	publicAPI.prototype.rap = function() {
		__super__.identify.call(this);
		console.log(lyric);
	};

	return publicAPI;

})(Person);

let r = new Rapper('Kanye');

r.speak();
r.rap();
