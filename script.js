
// for(var i =0;i<4;i++){
//     var ele = document.createElement("div");
//     ele.innerHTML = "<p>asdasd</p>";
//     ele.className ="main"
//     ele.id = "main1"
//     document.body.append(ele);
// }

// var container = document.createElement("div")
// container.className="container"
// var row = document.createElement("div")
// row.className="row"
// var col=document.createElement("div")
// col.className = "col"
// col.innerHTML="This is column"
// container.append(row)
// row.append(col)
// document.body.append(container)
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
document.body.append(firstnamelabel,firstname,middlenamelabel,middlename,lastnamelable,lastname,emaillabel,email)