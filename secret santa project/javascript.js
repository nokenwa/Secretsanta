// var secretSantaList = [];



// function secretSantaGroup(hostUserame){
// 	this.secretSantaPin = pinGenerate();
// 	this.secretSantaMembers = ["hostUserame"];
// 	this.deadline = new Date();
// 	this.spendingLimit = 0;
// }

// this.create(){
// 	var check;
// 	check = secretSantaGroup.indexOf(this.secretSantaPin);
	
// }

// 	this.setoptions(deadline, spendingLimit){
// 		this.deadline = deadline;
// 		this.spendingLimit = spendingLimit;
// 	}

// this.addMember = function(username){
// 	var check;
// 	check = secretSantaMembers.indexOf(username);
// 	if (check == -1){
// 	this.secretSantaMembers.push(username);
// 	username.groupid.push(this.secretSantaPin);
// }
// else if{
// 	(check == !-1 )
// 	console.log('already in a group')
// 	} 
// }	

// this.firstname = firstname||this.firstname{
// 	var secretSantaMembers['1','2',''];
// 	var check;
// 	if(check == -1){

// 	}
// 	else if(check == !-1){
// 		return false;
// 	}

// }

// this.lastname = lastname||this.lastname{
// 	return false;
// }

// this.username = username||this.username{
// 	return false;
// }




// function person (){
// 	this.username = "Username";
// 	this.firstname = "First name";
// 	this.lastname = "Last name";
// 	this.interests = ["none"];
// 	this.groupid = ["none"];


// 	this.create = function (username, firstname, lasname, interests){

// 		this.username = username;
// 		this.firstname = firstname;
// 		this.lastname = lastname;
// 		this.interests = interests;
// 	};

// 	this.edit = function (firstname, lastname, intrests){
// 		this.firstname = firstname||this.firstname;
// 		this.lastname = lastname||this.lastname;
// 		this.interests = interests||this.interests;
// 	};

// }

// function pinGenerate(){
// 	var chars = ('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
// 	var length = 10;
// 	var result = '';
// 	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random()* chars.length)];
		
// 	var check;
// 	check = secretSantaGroup.indexOf(this.secretSantaPin);
// 	if(){
// 		return result;
// 	}
// 	elseif pinGenerate(){
// 	}

// 	return result;

// }



// // function matchSecretSantaMembers(){
	
		
// // 	var check;
// // 	check = secretSantaGroup.indexOf(this.person);
// // 	if(){
// // 		return result;
// // 	}
// // 	elseif person(){
// // 	}

// // 	return result;

// // }
var secretSantaGroup= ["jack","jill","karl","neyo","anni","nathaniel","blackdiamond"]; // declares the array which will store names in the form of a string
var gifters; // defines gifters as a  variable
var giftees; // defines giftees as a variable
var result;
assignsecretsanta(); // 

function assignsecretsanta() {

giftees = secretSantaGroup.slice(0); //we use slice so that it randomises the array for giftees sepreate from the gifters
gifters = secretSantaGroup.slice(0); //we use slice so that it randomises the array for gifters sepreate from the giftees
shuffle(giftees); // shuffle this variable
shuffle(gifters); //shuffle this variable

if (checkifsame()){assignsecretsanta}; // chech to see if the function assignsecretsanta is doing what it is meant to
for (var i=0; i<secretSantaGroup.length; i++){ // start the index of as equal to 0, while i is less then the length of the secretsantagroup array ,increment the index by one
	console.log(giftees[i]); // show on the console the current index of gifters 
	console.log(gifters[i]); //show on the console the current index of giftees
	$("result").after(gifters, giftees);
}

}
function showonconsole(currentvalue,index){
	console.log(currentvalue);
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
} //stack overflow 


function checkifsame(){
for (var i = 0; i <secretSantaGroup.length; i++) // start the index of as equal to 0, while i is less then the length of the secretsantagroup array ,increment the index by one
	{if (gifters[i] == giftees[i]){ // if the index of gifters is equal to the index of giftees
		return true}; // return it to the array and pair it up with an index that is not the same
	}
	return false; // carry on
} // thank you nathanial