/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  var snack = new Object();
  snack["type"] = "Goldfish";
  snack.brand = "Pepperidge Farm";
  snack.flavor = "Cheddar";
  snack.count = 2000;

  return snack; //Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:

* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.

* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.

* totalSent() - returns an integer indicating the total number of messages sent

* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here

function constructor(user)
{

	//store user name
	this.username = user;
	this.sentMsg = new Array(10);
	this.recMsg = new Array(10);
	this.totalReceived = 0;
	this.totalSent = 0;

	//log the message in array, mark as sent or received
	this.logfunction =  function(messageText,direction)
		{
			if(direction === 1)	// Received Message

				{
					this.totalReceived ++;							//increase count total
					recMsg.push(messageText);						//add message to the end of the array
					if(recMsg.length > 5)
					{recMsg.shift();}								// if we have more than max, delete oldest (1st in array)
				}

				else			//Sent Message
			
			{
				this.totalSent ++ ;									//increase count total
				sentMsg.push(messageText) ;							//add message to the end of the array
				if(sentMsg.length>5)
				{sentMsg.shift();}									// if we have more than max, delete oldest (1st in array)
			}
			
		};

			getSentMessage = function(n)
				{
					return this.sentMsg[n];
				};

			totalSent = function()
				{
					return this.totalSent;
				};

			totalReceived = function()
				{
					return this.totalReceived;
				};

}



//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here

MessageLog.prototype.lastReceivedMessage = function(){return this.recMsg[4];};

//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var BlackHatGuy = new MessageLog();
BlackHatGuy.constructor("BlackHatGuy");

BlackHatGuy.logfunction("foo",1);
BlackHatGuy.logfunction("bar",1);
BlackHatGuy.logfunction("baz",1);

//end your code
