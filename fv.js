// All Error Span In Variable
var ne = document.getElementById("name-erore");
var pe = document.getElementById("phone-erore");
var ee = document.getElementById("email-erore");
var me = document.getElementById("messege-erore");
var se = document.getElementById("submit-erore");
// Name Validation
function nameValidate() {
    var name = document.getElementById("fullname").value;
    if (name.lenght == 0) {
        ne.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        ne.innerHTML = "Full Name is required.";
        return false;
    }
    ne.innerHTML = "<i class='fa-sharp fa-solid fa-circle-check'></i>";
    return true;
}
// Phone No Validation
function phoneValidate() {
    var phone = document.getElementById("phone-no").value;
    if (phone.lenght == 0) {
        pe.innerHTML = "Phone No is required";
        return false;
    }
    // if (phone.lenght !== 11) {
    //     pe.innerHTML = "Write Your No Accuratly.";
    //     return false;
    // }
    if (!phone.match(/^[0-9]{11}$/)) {
        pe.innerHTML = "Only Eleven Digits";
        return false;
    }
    pe.innerHTML = "<i class='fa-sharp fa-solid fa-circle-check'></i>";
    return true;
}
// Email Validation
function emailValidate() {
    var email = document.getElementById("email-no").value;
    if (email.length == 0) {
        ee.innerHTML = "Email is Required.";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        ee.innerHTML = "Email Invalid";
        return false;
    }
    ee.innerHTML = "<i class='fa-sharp fa-solid fa-circle-check'></i>";
    return true;
}
// Messeage Validation
function messeageValidate() {
    var messge = document.getElementById("messeage").value;

    var required = 30;
    var left = required - messge.length;
    if (left < 0) {
        me.innerHTML = "Charactor Above the Limit.";
        return false;
    }
    me.innerHTML = "<i class='fa-sharp fa-solid fa-circle-check'></i>";
    return true;
}
// Form Submit Validation
function formValidate() {
    if (!nameValidate() || !phoneValidate() || !messeageValidate() || !emailValidate) {
        se.innerHTML = "Plz fix the erorr."
        se.style.display = "block";
        setTimeout(function () { se.style.display = "none"; }, 3000);
        return false;
    }
}