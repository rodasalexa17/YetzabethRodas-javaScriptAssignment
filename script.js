function firstfocus() {
	document.getElementsByName("userid")[0].focus();
}

function userid_validation(min , max) {
	var id= document.getElementsByName("userid")[0].value
	
	if(id.length===0)
		{
			alert("User ID should not be empty!");

		}
	else if (id.length<5)
	{
		alert("should be more than 5 characters");

	}
     else if  (id.length>12){
     	alert("should be less than el12 characters");
     }
     else
     {
     	document.getElementsByName("passid")[0].focus();
     }
}

function passid_validation(min , max) {
	var id= document.getElementsByName("passid")[0].value
	
	if(id.length===0)
		{
			alert("User password should not be empty!");

		}
	else if (id.length<7)
	{
		alert("should be more than 7 characters");

	}
     else if  (id.length>12)
     {
     	alert("should be less than 12 characters");
     }
     else
     {
     	document.getElementsByName("username")[0].focus();
     }
 }


function allLetter()

{

	var uname = document.getElementsByName("username")[0];
    var letters = /^[A-Za-z]+$/;
    console.log(uname);
    if(uname.value.match(letters))

    {

        return true;

    }

    else

    {

        alert('Username must have alphabet characters only');

        return false;

    }
}


