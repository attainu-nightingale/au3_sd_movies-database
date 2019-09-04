$(function(){
    $("#error_name").hide();
    $("error_email").hide();
$("error_password").hide();
$("error_confirmpassword").hide();



var  error_name = false;
var  error_email = false;
var  error_password = false;
var  error_confirmpassword = false;


$("#name").focusout(function(){
checkUsername();
    });

    $("#Email").focusout(function(){
        checkemail();
            });

    $("#name").focusout(function(){
                checkpassword();
                    });

    $("#name").focusout(function(){
                checkconfirmpassword();
                            });



function checkUsername(){
    var name=$("#name").val().length;
    if(name < 5 || name > 20){
        $("#error_name").html("shoul be between 5 and 20 characters");
        $("#error_name").show();
        error_name=true;
    }
    else
        {
            $("#error_name").hide();
    }

}


function checkpassword(){
    var passwordLength=$("#password").val().length;
if(passwordLength < 10){
    $("#error_password").append("password must be more than 8 characters");
    $("error_password").show();
    error_password=true;
}
else{
    $("error_password").hide();
}
}


function checkemail(){
var pattern= new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2-4}$/i);
if (pattern.test($("#email").val()))
{
    $("#error_email").hide();
}
    else{
        $("#error_email").append("Invalid email address");
        $("#error_email").show();
        $("#error_email")=true;
    }
}
});

function checkconfirmpassword(){
var passsword=$("password").val();
var confirmpassword=$("#confirmpassword").val();

if(password!=confirmpassword){
    $("error_confirmpassword").append("passwords do not match");
    $("error_confirmpassword").show();
    error_confirmpassword=true;
}
else{
    $("error_confirmpassword").hide();

}


});