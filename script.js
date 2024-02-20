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
middlenamelabel.setAttribute("for","middlename")
middlenamelabel.innerHTML="MiddleName"

var lastname = document.createElement("input")
lastname.id = "lastname"
var lastnamelable = document.createElement("label")
lastnamelable.setAttribute("for","lastname")
lastnamelable.innerHTML = "LastName"

var email = document.createElement("input")
email.id = "email"
var emaillabel = document.createElement("label")
emaillabel.setAttribute("for","email")
emaillabel.innerHTML = "Email"

var br1 = document.createElement("br")
var br2 = document.createElement("br")
var br3 = document.createElement("br")
var br4 = document.createElement("br")
var br5 = document.createElement("br")

document.body.append(firstnamelabel,firstname,br1,middlenamelabel,middlename,br2,lastnamelable,lastname,br3,emaillabel,email,br4)
