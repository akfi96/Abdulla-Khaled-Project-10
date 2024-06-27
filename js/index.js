// sign up inputs
var nameSignUp = document.getElementById("nameSignUp");
var emailSignUp = document.getElementById("emailSignUp");
var passSignUp = document.getElementById("passSignUp");
// sign in inputs
var emailSignIn = document.getElementById("emailSignIn");
var passSignIn = document.getElementById("passSignIn");
// welcome name
var welcomeName = document.getElementById("welcomeName");

var userInfoList = [];

function add(){
    // var inputs = { name: nameSignUp.value , email: emailSignUp.value , pass: passSignUp.value }
    // userInfoList.push(inputs)
    var inputs = { name: nameSignUp.value , pass: passSignUp.value }
    localStorage.setItem(emailSignUp.value, JSON.stringify(inputs))
    // console.log(userInfoList);
}
function lookup(){
    var email = emailSignUp.value
    if(localStorage.getItem(email) === null ){
        add();
        window.location.assign("index.html")
    }
    else{
        window.alert("This email already exists")
    }
}
function signinlookup(){
    var email = emailSignIn.value
    var pass = passSignIn.value
    if(localStorage.getItem(email) === null ){
        window.alert("This email doesn't exist")
    }
    else{
        var userinfo = JSON.parse(localStorage.getItem(email))
        var name = userinfo.name
        console.log(userinfo.pass);
        if (userinfo.pass == pass){
            window.location.assign("welcome.html")
            // window.alert("pass is correct")
        }
        else{
            window.alert("pass is wrong")
        }
    }
}
function inputvalidation(){
    var nameRegex = /^[a-zA-Z]*$/;
    var emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9_.-]*@[a-zA-Z]*\.[a-zA-Z]*$/;
    var passRegex = /(?=.*[A-Z])(?=.*[0-9]).{8,}/;

    if(nameRegex.test(nameSignUp.value)){
        if(emailRegex.test(emailSignUp.value)){
            if(passRegex.test(passSignUp.value)){
                lookup()
            }
            else{
                window.alert("Password must have atleast one capital letter & one number & be atleast 8 char long")
            }
        }
        else{
            window.alert("Email format is incorrect for ex: aaa@bbb.com")
        }
    }
    else{
        window.alert("Name must only contain letters")
    }
}
// /^[a-zA-Z]*$/ name signup (only letters)
// /^[a-zA-Z0-9][a-zA-Z0-9_.-]*@[a-zA-Z]*\.[a-zA-Z]*$/ email signup
// /(?=.*[A-Z])(?=.*[0-9]).{8,}/ (password atleast one capital letter & one number atleast 8 char long)