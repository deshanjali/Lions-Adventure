var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 2 seconds
}



function validation(){
	
	if(validateForm()==false)
		return false;
	if(validateTelephone()==false)
		return false;
	if(validateEmail()==false)
		return false;
	if(dateValidation()==false)
		return false;
	confirmation();
	
}


function validateForm(){
    var fname = document.forms["myForm"]["firstname"].value;
    var tele = document.forms["myForm"]["telephone"].value;
    var email = document.forms["myForm"]["email"].value;
    var date = document.forms["myForm"]["date"].value;
    var country = document.forms["myForm"]["country"].value;
    

    if (fname == ""){
        alert("First Name must be filled out");
        return false;
    }
    
    if (tele == ""){
        alert("Telephone Number must be filled out");
        return false;
    }
    if (email == ""){
        alert("Email must be filled out");
        return false;
	}
	
    
	if (date == ""){
        alert("Date  must be filled out");
        return false;
    }

    if (country == 0){
        alert("Country must be filled out");
        return false;
    }

}

function validateTelephone(){
	var num = document.forms["myForm"]["telephone"].value;
	if (isNaN(num)){  
	alert("Invalid Telephone Number")
	}
		else{
			if(num.length!=10){
				alert("Number should be TEN numbers");
			}
		}
}
	
function validateEmail(){
    var x = document.forms["myForm"]["email"].value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length) {
        alert("Invalid Email format");
        return false;
    }
}

function dateValidation(){
    
	var dateA = document.forms["myForm"]["date"].value;
	var dateB = new Date(dateA);
    var d = new Date();
	
	if(d.getDate()>dateB.getDate()){
        alert("Enter a Valid Date");
        return false;
    }
}

function confirmation(){
	confirm("Do you want to submit?");
}

