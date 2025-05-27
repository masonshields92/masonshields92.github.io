// function getInTouch(){
//     // Variables to store what the user input into the text boxes
//     var firstName = document.getElementById("first").value;
//     var lastName = document.getElementById("last").value;
//     var email1 = document.getElementById("email").value;
//     var phone1 = document.getElementById("phone").value;
//     var message1 = document.getElementById("message").value;

//     // Comparing user input to a set of regular expressions to make sure all information is correct
//     var letters = /^[A-Za-z]+$/;
//     var numbers = /^[0-9]+$/;
//     var phoneNumber = /^[0-9]+$/;
//     var lettersNum = /^[0-9a-zA-Z" "@.]+$/;

//     // Checking to see if user included all information
//     if (firstName.match(letters)){
//         if (lastName.match(letters)){
//             if (email1.match(lettersNum)){
//                 if(phone1.match(phoneNumber)){
//                     if(message1.match(lettersNum)){
//                         flag = true;
//                     }else {
//                         alert("Please include a message.")
//                     }
//                 }else{
//                     alert("You did not enter a phone number.")
//                 }
//             }else{
//                 alert("You did not enter an email address.")
//             }
//         }else{
//             alert("You did not enter your last name")
//         }
//     }else {
//         alert("You did not enter your first name.")
//     }
    
//     // Checking to see what contact method was chosen then displaying that information
//     if (document.getElementById("contact1").checked && flag == true){
//         document.write("Thank you for reaching out " + firstName + " " + lastName + ". I will contact you at " + email1 + ". <br> Your message will be displayed here:<br>" + message1);
//     } else if (document.getElementById("contact2").checked && flag == true){
//         document.write("Thank you for reaching out " + firstName + " " + lastName + ". I will contact you at " + phone1 + ". <br> Your message will be displayed here:<br>" + message1);
//     } else {
//         alert("Please select a contact method.");
//     }
// }

function getInTouch(){

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

const serviceID = "service_myhqf7f";
const templateID = "template_gw5yz1o";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your email has been sent. Thank you!");

    })
    .catch(err=>console.log(err));
}