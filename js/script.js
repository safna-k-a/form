/*author:SAFNA K A*/
function validate() {
    let n = document.getElementById("text1").value;
    let e = document.getElementById("text2").value;
    let s = document.getElementById("select").value;
    let d = document.getElementById("dates").value;
    let person = document.getElementById("persn").value;
    // let dreg =
    //     /^(0[1-9]|[12][0-9]|3[01])[- /.] (0[1-9]|1[012])[- /.] (19|20)\d\d$/;
    let nregx = /^[a-z,A-Z]{2,15}$/;
    let eregx =
        /^[a-z,A-Z,0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}$/;
    if (n == "") {
        alert("name field is empty");
        return false;
    } else if (!nregx.test(n)) {
        alert("enter valid name");
        return false;
    } else if (!eregx.test(e)) {
        alert("enter a valid email");
        return false;
    } else if (e == "") {
        alert("email field is empty");
        return false;
    } else if (s == "select") {
        alert("enter an option");
        return false;
    } else if (d == "") {
        alert("date is empty");
        return false;
    } else if (person == "") {
        alert("enter the number of person");
        return false;
    } else if (
        document.getElementById("one").checked == false &&
        document.getElementById("two").checked == false &&
        document.getElementById("three").checked == false
    ) {
        alert("select anything avail");
        return false;
    } else if (
        document.getElementById("first").checked == false &&
        document.getElementById("scnd").checked == false
    ) {
        alert("Do you agree terms or not?");
        return false;
    } else {
        return true;
    }
}
