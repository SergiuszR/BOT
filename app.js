window.addEventListener("load", () => {
    // make sure all input fields are empty as soon as page is refreshed
    document.getElementsByTagName("input").value = ""; 
    ageInputField = document.querySelector("#age-input");
    yesInput = document.querySelector("#yes-input");

    // create two divs to 'store' name value and age value
    let divOne = document.createElement("p");
    divOne.id = "given-name";
    document.body.appendChild(divOne);
    let divTwo = document.createElement("p");
    divTwo.id = "given-age";
    document.body.appendChild(divTwo);
    // hide those two divs
    divOne.style.display = "none";
    divTwo.style.display = "none";
    ageInputField.style.display = "none";
    yesInput.style.display = "none";  
})



function divCreate() {
    divThree = document.createElement("button");
        divThree.classList.add("cta3");
        document.body.appendChild(divThree);
        btnCta3 = document.querySelector(".cta3");
}

// Add eventlistener to .cta3
function ctaAction () {
    btnCta3.addEventListener("click", () => {
        if (btnCta3.innerHTML === "Great!") {
            alert(`Thank you. If You can read this message, it means everything runs as it should. Have a nice day!`);
            // console.log(yes);
        } else if (btnCta3.innerHTML === "Oops...") {
            alert(`Thank you. I'm guessing you didn't answer 'yes', well... Maybe another time, huh?`);
        } else {
            // do nothing
        }
    })
}

// declaring variables

let inputField = document.querySelector("#name-input");
let btnCta = document.querySelector(".cta");
let btnCta2 = document.querySelector(".cta2");

inputField.addEventListener('click', () => {
    if (inputField.focus == true) {
        console.log(`Active`);
    } else {
        console.log(`Unactive`);
    }
})

function yesVal() {
    
     if (yesInput.value === "yes" ) {
        divCreate();
        btnCta3.innerHTML = "Great!";
        btnCta2.style.display = "none";
        btnCta3.style.display = "inline";
        ctaAction();
        

    } else if (yesInput.value === "no") {
        divCreate();
        btnCta3.innerHTML = "Oops...";
        btnCta2.style.display = "none";
        btnCta3.style.display = "inline";
        ctaAction();
       

    } else if (yesInput.value == "") {

          document.body.querySelectorAll(".cta3").forEach(n => n.remove()); // delete every .cta3 element on site
          btnCta2.style.display = "inline";

    } else {
        // do nothing
    }
}

function nameVal() {


let inputVal = document.querySelector("#name-input").value;
// declare list of names
const names = (`https://raw.githubusercontent.com/dominictarr/random-name/master/first-names.json`);
// fetch list of names
fetch(names) 
    .then(response => {
        return response.json()
    }) // check if user input matches list of names
    .then(data => {
       if  (data.indexOf(inputVal) !== -1 && inputVal.length > 0)  {
        document.querySelector("#name-input").style.borderBottom = "3px solid green";
       } else if (inputVal === "") {
        document.querySelector("#name-input").style.borderBottom = "1px solid black";
       } else {
        document.querySelector("#name-input").style.borderBottom = "3px solid red";
       }
    })
    
document.querySelector("#name").innerHTML = `My name is ${inputVal}.`;

if (inputVal === "") {
    document.querySelector(".start").style.display = "inline";
    document.querySelector("#name").style.display = "none";
    document.querySelector(".cta").style.display = "none";
}   else {
    document.querySelector(".start").style.display = "none";
    document.querySelector("#name").style.display = "inline";
    document.querySelector(".cta").style.display = "inline";
}

btnCta.addEventListener("click", () => {
    document.querySelector("#name").textContent = `Nice to meet you, ${inputVal}.`;  
    inputField.style.display = "none";  
    ageInputField.style.display = "inline";
    document.querySelector("#given-name").innerHTML = `${inputVal}`;
    btnCta.style.display = "none";
    btnCta2.style.display = "inline";
});

btnCta2.addEventListener("click", () => {  
    document.querySelector("#name").innerHTML = `So, your name is ${inputVal} and you're ${ageInputVal}. <br> Correct?`;
    ageInputField.style.display = "none";
    yesInput.style.display = "inline";

})

}

function ageVal() {

    ageInputVal = document.querySelector("#age-input").value;
// console.log(ageInputVal);
document.querySelector("#name").textContent = `I'm ${ageInputVal}.`; 
document.querySelector("#given-age").innerHTML = `${ageInputVal}`;

}

inputField.addEventListener("click", () => {
    document.querySelector(".start").style.display = "none";
})