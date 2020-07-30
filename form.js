// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var firstname = document.contactForm.firstname.value;
    var lastname = document.contactForm.lastname.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var standard = document.contactForm.standard.value;
    var yop = document.contactForm.yop.value;
    var percentage = document.contactForm.percentage.value;
   
	// Defining error variables with a default value
    var firstnameErr = lastnameErr = emailErr = mobileErr = countryErr = standardErr = yopErr = percentageErr = true;
    
    // Validate name
    if(firstname == "") {
        printError("firstnameErr", "Please enter your Firstname");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstname) === false) {
            printError("firstnameErr", "Please enter a valid Firstname");
        } else {
            printError("firstnameErr", "");
            firstnameErr = false;
        }
    }
    if(lastname == "") {
        printError("lastnameErr", "Please enter your Lastname");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lastname) === false) {
            printError("lastnameErr", "Please enter a valid Lastname");
        } else {
            printError("lastnameErr", "");
            lastnameErr = false;
        }
    }
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    // Validate country
    if(country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }

// validate class
     if(standard == "") {
        printError("standardErr", "Please enter your Class");
    } else {
        var regex = /^[0-9a-zA-Z]+$/;                
        if(regex.test(standard) === false) {
            printError("standardErr", "Please enter a valid Class");
        } else {
            printError("standardErr", "");
            standardErr = false;
        }
    }
    // validate year of passing
     if(yop == "") {
        printError("yopErr", "Please enter your Year of Passing");
    } else {
        var regex = /^(200\d|2011|2012|2013|2014|2015|2016|2017)$/;
        if(regex.test(yop) === false) {
            printError("yopErr", "Please enter a valid Year of Passing");
        } else{
            printError("yopErr", "");
            yopErr = false;
        }
    }

    // validate percentage
     if(percentage == "") {
        printError("percentageErr", "Please enter your percentage");
    } else {
        var regex = /^(\d\d?(\.\d\d?)?|100(\.00?)?)$/;
        if(regex.test(percentage) === false) {
            printError("percentageErr", "Please enter a valid percentage");
        } else{
            printError("percentageErr", "");
            percentageErr = false;
        }
    }
    // Prevent the form from being submitted if there are any errors
    if((firstnameErr || lastnameErr || emailErr || mobileErr || countryErr || standardErr ||  yopErr || percentageErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "First Name: " + firstname + "\n" +
                          "Last Name: " + lastname + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Country: " + country + "\n" +
                          "Class: " + standard + "\n" +
                          "Year of passing: " + yop + "\n" +
                          "Percentage: " + percentage + "\n" ;
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
        alert("Form submitted successfully")
    
    }
};