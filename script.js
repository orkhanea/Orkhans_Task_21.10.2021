// let arr = [1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9, 10];
// let changer = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         changer = arr[i];
//         arr[i] = arr[j];
//         arr[j] = changer;

//     }

// };
// console.log(arr);

let idP = 1;
class PersonInfo {

    constructor(Fname, Sname, Email, Address, City, State) {
        this.fname = Fname,
            this.sname = Sname,
            this.email = Email,
            this.address = Address,
            this.city = City,
            this.statecity = State,
            this.id = idP++
    }

};

let button2 = document.querySelector(".btn-secondary");
let button = document.querySelector(".btn-primary");
let fname = document.getElementById("inputName");
let sname = document.getElementById("inputSname");
let email = document.getElementById("inputEmail4");
let address = document.getElementById("inputAddress");
let city = document.getElementById("inputCity");
let state = document.getElementById("inputState");

let people = [];

button.addEventListener("click", function(e) {
    e.preventDefault();

    if (fname.value != '' && sname.value != '' && email.value != '' && address.value != '' && city.value != '' && state.value != 'Choose...') {
        people.push(window['person' + idP] = new PersonInfo(fname.value, sname.value, email.value, address.value, city.value, state.value));

    } else {
        alert("Please fill the required fields");
    }



    let tbody = document.getElementById("peopleList");

    if (people.length > 0) {
        for (let i = 0; i < people.length; i++) {


            tbody.appendChild(document.createElement("tr"));
            let tr = tbody.lastChild;
            tr.classList.add("classTR")
            tr.appendChild(document.createElement("th"));
            let th = tr.lastChild;
            th.setAttribute("scope", "row");
            th.innerText = people[i].id;
            tr.appendChild(document.createElement("td"));
            tr.lastChild.innerText = people[i].fname
            tr.appendChild(document.createElement("td"));
            tr.lastChild.innerText = people[i].sname
            tr.appendChild(document.createElement("td"));
            tr.lastChild.innerText = people[i].email
            tr.appendChild(document.createElement("td"));
            tr.lastChild.innerText = people[i].address
            tr.appendChild(document.createElement("td"));
            tr.lastChild.innerText = people[i].city
            tr.appendChild(document.createElement("td"));
            tr.lastChild.innerText = people[i].statecity


        };


    };
    people.pop();
    document.getElementById("inputName").value = "";
    document.getElementById("inputSname").value = "";
    document.getElementById("inputEmail4").value = "";
    document.getElementById("inputAddress").value = "";
    document.getElementById("inputCity").value = "";
    document.getElementById("inputState").value = "Choose...";

});