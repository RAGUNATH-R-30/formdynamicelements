function info(){
     var firstname = document.getElementById("firstname").value
    var middlename = document.getElementById("middlename").value
    var lastname = document.getElementById("lastname").value
    var email = document.getElementById("email").value

    var firstnameele = document.createElement("p")
    firstnameele.innerHTML = `FirstName:${firstname}`
    
    var middlenameele = document.createElement("p")
    middlenameele.innerHTML = `MiddleName:${middlename}`

    var lastnameele = document.createElement("p")
    lastnameele.innerHTML = `LastName:${lastname}`

    var emailele = document.createElement("p")
    emailele.innerHTML = `email:${email}`

    document.body.append(firstnameele,middlenameele,lastnameele,emailele)
}
function labelcreate(tagname,attrname,attrvalue,content){
var ele = document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}

function input_create(tagname,att1name,attr1value,attr2name,attr2value){
    var element = document.createElement(tagname);
    element.setAttribute(att1name,attr1value)
    element.setAttribute(attr2name,attr2value);
    return element
}

function break_create(){
    var break_ele = document.createElement("br");
    return break_ele;
}

var firstname_label = labelcreate("label","for","firstname","Firstname");
var firstname_break = break_create();
var firstname_input = input_create("input","type","text","id","firstname")


var middlename_label = labelcreate("label","for","middlename","Middlename");
var middlename_break = break_create();
var middlename_input = input_create("input","type","text","id","middlename")

var lastname_label = labelcreate("label","for","lastname","Lastname");
var lastname_break = break_create();
var lastname_input = input_create("input","type","text","id","lastname")

var email_label = labelcreate("label","for","email","Email");
var email_break = break_create();
var email_input = input_create("input","type","email","id","email")

var password_label = labelcreate("label","for","password","Password");
var password_break = break_create();
var password_input = input_create("input","type","password","id","password")

var br1 = break_create();
var br2 = break_create();
var br3 = break_create();
var br4 = break_create();
var br5 = break_create();

var button = document.createElement("button")
button.setAttribute("type","button")
button.setAttribute("onclick","info()")
button.innerHTML = "Click"

document.body.append(firstname_label,firstname_break,firstname_input,br1,middlename_label,middlename_break,middlename_input,br2,lastname_label,lastname_break,lastname_input,br3,email_label,email_break,email_input,br4,password_label,password_break,password_input,br5,button);
