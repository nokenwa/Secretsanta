var secretsantagroups = [];
var people = [];


$("#reply").hide();
$(document).ready(function() {
    $("#generate").click(function () {
        var index;
        index = secretsantagroups.length;
        secretsantagroups.push(new Secretsantagroup());
        formread(secretsantagroups[index]);
         $("#id").text("Your secret santa pin is: " + secretsantagroups[index].secretsantapin);
        $("#members").after("There are no members in your groupe at the moment. Send people your secret santa pin to invite more people.");
    
        $("#myform").hide();
        $("#reply").show();
    });
});

function formread(ssgroup){
    var formdata = $('form').serialize();
    console.log(formdata);
    var x = formdata.search("groupname=");
    var y = formdata.search("&deadline");
    console.log(ssgroup.secretsantagroupname);
    ssgroup.secretsantagroupname = "";
    for (var z = x+10; z <= y-1; z++){
        ssgroup.secretsantagroupname = ssgroup.secretsantagroupname.concat(formdata.charAt(z));
    }
    console.log(ssgroup.secretsantagroupname);
    
    x = formdata.search("deadline=");
    y = formdata.search("&spendlimit");
    ssgroup.deadline = "";
    for (var z = x+9; z <= y-1; z++){
        ssgroup.deadline = ssgroup.deadline.concat(formdata.charAt(z));
    }
    console.log(ssgroup.deadline);
    
    x = formdata.search("spendlimit=");
    y = formdata.length
    ssgroup.spendinglimit = "";
    for (var z = x+11; z <= y; z++){
        ssgroup.spendinglimit = ssgroup.spendinglimit.concat(formdata.charAt(z));
    }
    console.log(ssgroup.spendinglimit);
}


function Secretsantagroup(hostusername) {
    this.secretsantapin = pingenerate();
    this.secretsantagroupname = "groupname";
    this.secretsantamembers = [hostusername];
    this.deadline = new Date();
    this.spendinglimit = 0;
    this.deadline.toUTCString();
    
    this.setoptions = function (deadline, spendinglimit) {
        this.deadline = deadline;
        this.spendinglimit = spendinglimit;
    };
    
    this.addmember = function (username) {
        var check;
        check = secretsantamembers.indexOf(username);
        if (check == -1) {
            this.secretsantamembers.push(username);
            username.groupids.push(this.secretsantapin);
        } else if (check != -1) {
            console.log('This person is already in this secret santa group');
        }
    }
    
    
}


function person() {
    this.username = "UserName";
    this.firstname = "First Name";
    this.lastname = "Last Name";
    this.interests = ["none"];
    this.groupids = ["none"];

    this.create = function (username, firstname, lastname, interests) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.interests = interests;
        people.push(this);
    };
    
    this.edit = function (firstname, lastname, interests) {
        this.firstname = firstname || this.firstname;
        this.lastname = lastname || this.lastname;
        this.interests = interests || this.interests;
    };
    
}
function pingenerate() {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var length = 10;
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    
    var check;
    check = secretsantagroups.indexOf(result);
    if (check == -1){
        return result;
    }
    else return pingenerate();
      
}
