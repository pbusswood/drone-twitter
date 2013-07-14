var arDrone = require('ar-drone');
var client  = arDrone.createClient();

var tweets = new Array();
tweets.push('Make the drone go up! #ottdrones');
tweets.push('Make the drone go down! #ottdrones');
tweets.push('Make the drone go clockwise! #ottdrones');

client.takeoff();
client.up(0.2);
client.after(5000, function() {
	this.stop();
});

for (var i = 0; i < tweets.length; i++) {
	var currTweet = tweets[i];
	console.log(currTweet);

	if (currTweet.indexOf("up") !== -1) {
		client.up(0.2);
	} else if (currTweet.indexOf("down") !== -1) {
		client.down(0.2);
	} else if (currTweet.indexOf("left") !== -1) {
		client.left(0.2);
	} else if (currTweet.indexOf("right") !== -1) {
		client.right(0.2);
	} else if (currTweet.indexOf("counter clockwise") !== -1) {
		client.counterClockwise(0.2);
	} else if (currTweet.indexOf("clockwise") !== -1) {
		client.clockwise(0.2);
	} else if (currTweet.indexOf("forward") !== -1) {
		client.front(0.2);
	} else if (currTweet.indexOf("back") !== -1) {
		client.back(0.2);
	} else if (currTweet.indexOf("flip") !== -1) {
		client.animate('flipBehind', 2000);
	} else if (currTweet.indexOf("barrel roll") !== -1) {
		client.animate('flipBehind', 2000);
	}
	client.after(2000, function() {
		this.stop();
	})
}

client.land();

/*client.takeoff();

client
  .after(5000, function() {
    this.clockwise(0.5);
  })
  .after(3000, function() {
    this.left(0.2);
  })
  .after(3000, function() {
    this.stop();
    this.right(0.2);
  })
  .after(3000, function() {
    this.stop();
    this.up(0.2);
  })
  .after(3000, function() {
    this.stop();
    this.down(0.2);
  })
  .after(3000, function() {
    this.stop();
    this.land();
  });*/