$(window).scroll(function()
    {
        if ($(this).scrollTop() > 1)
        {
            $('.big_header').addClass("sticky_header");
        }
        else
        {
            $('.big_header').removeClass("sticky_header");
        }
    });

function change_image() 
{
    var x = document.getElementById('changingimage')
    var str = document.getElementById('changingimage').src;
    if (str.includes("1.jpeg")) {
        x.src = "../img/2.jpeg"; width = "30%";
    }
    else if (str.includes("2.jpeg")) {
        x.src = "../img/3.jpeg"; width = "30%";
    }
    else if (str.includes("3.jpeg")) {
        x.src = "../img/4.jpeg"; width = "30%";
    }
    else if (str.includes("4.jpeg")) {
        x.src = "../img/5.jpeg"; width = "30%";
    }
    else if (str.includes("5.jpeg")) {
        x.src = "../img/1.jpeg"; width = "30%";
    }
    else
    {
        src="";
    }
}

var dict = {};
if (typeof(Storage) !== "undefined") {
    for (var key in localStorage) {
        try {
            var data = JSON.parse(localStorage.getItem(key));
            if (data.check === "ThisIsFormData") {
                document.getElementById('InsertHere').innerHTML += '<tr><td>' + data.skill + '</td><td>' + data.level +
                    '</td><td>' + data.email + '</td><td>' + key + '</td></tr>';
            }
        } catch (err) {;
        }
    }
}

function validateForm() {
    var x = document.forms["skillForm"]["Email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }
    x = document.forms["skillForm"]["Name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    x = document.forms["skillForm"]["skillName"].value;
    if (x == "") {
        alert("Skill must be filled out");
        return false;
    }
    addData();
    reset();
    alert("Your feedback has been recorded");
    return false;
}

function addData() {
    var name = document.forms["skillForm"]["Name"].value;
    var skill = document.forms["skillForm"]["skillName"].value;
    var email = document.forms["skillForm"]["Email"].value;
    var l = document.getElementById("level_list");
    var level = l.options[l.selectedIndex].text;
    var check = "ThisIsFormData";
    dict[name] = { email, skill, level, check };
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(name, JSON.stringify(dict[name]));
    }
    document.getElementById('InsertHere').innerHTML += '<tr><td>' + skill + '</td><td>' + level +
        '</td><td>' + email + '</td><td>' + name + '</td></tr>';
}

function reset() {
    document.getElementById("Name").value = "";
    document.getElementById("skillName").value = "";
    document.getElementById("email").value = "";
}