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
     	alert("should be less than 12 characters");
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
	var inputfield = document.getElementsByName("username")[0].value;

    if (inputfield == "")
{
	alert ("Error: Input Name is empty!");
	document.getElementsByName("username")[0].focus();
	return false;
}

    if (!/^[a-zA-Z ]*$/g.test(inputfield)) {
        alert("User’s name should have alphabet characters only!");
        document.getElementsByName("username")[0].focus();
        return false;
    }
    
    else if (inputfield.length >= 50)
    {
    	alert("characters allowed exceeded, should be less than 50");
    	document.getElementsByName("username")[0].focus();
        return false;
    }
    else (inputfield.length <= 50)
    {
    	document.getElementsByName("email")[0].focus();
    }
}
   function ValidateEmail() 
{  
    var input_email= document.getElementsByName("email")[0].value;
     if (input_email == "")
{
	alert ("Error: Input email is empty!");
	document.getElementsByName("email")[0].focus();
	return false;
}

      else if (input_email.length >= 50)
    {
     alert("Shoul be less than 50 characters");
     return (false);
    }

       else if (/^[a-zA-Z-0-9]+@+[a-zA-Z-0-9]+.+[a-zA-Z-0-9]/.test(input_email)) {  
  	alert ("valid email address");
    return (true);  
  }  
    else {
    	alert("You have entered an invalid email format!"); 
    	return (false) ; 
    }
   
} 


    	
    




