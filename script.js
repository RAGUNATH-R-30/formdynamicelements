function info(){
    var firstname = document.getElementById("firstname").value
    var middlename = document.getElementById("middlename").value
    var lastname = document.getElementById("lastname").value
    var email = document.getElementById("email").value

    console.log(`FirstName:${firstname},MiddleName:${middlename},LastName:${lastname},Email:${email}`)
}
var firstname = document.createElement("input")
firstname.id = "firstname"
var firstnamelabel = document.createElement("label")
firstnamelabel.setAttribute("for","firstname")
firstnamelabel.innerHTML = "Firstname"

var middlename = document.createElement("input")
middlename.id = "middlename"
var middlenamelabel =document.createElement("label")
middlenamelabel.innerHTML="MiddleName"

var lastname = document.createElement("input")
lastname.id = "lastname"
var lastnamelable = document.createElement("label")
lastnamelable.innerHTML = "LastName"

var email = document.createElement("input")
email.id = "email"
var emaillabel = document.createElement("label")
emaillabel.innerHTML = "Email"

var br = document.createElement("br")
document.body.append(firstnamelabel,firstname,br,middlenamelabel,middlename,br,lastnamelable,lastname,emaillabel,email)
