let input = document.getElementById("inp");
// console.log(input);
input.addEventListener("keyup", fliternames)

function fliternames() {
    // console.log(1);
    let filtervalue = document.getElementById("inp").value.toUpperCase();
    // input.value.toUpperCase();
    // console.log(filtervalue);
    let name = document.getElementById("names");
    let li = document.querySelectorAll("li.collection-items");
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toUpperCase().indexOf(filtervalue) > -1) {
            li[i].style.display = 'block';
        } else {
            li[i].style.display = 'none';

        }
    }
}

let addbut = document.createElement("button");
let ul = document.getElementById("names");
addbut.innerHTML = "click me";
ul.appendChild(addbut);
addbut.setAttribute('class', center - align);

addbut.addEventListener("click", function(e) {
    console.log(e);
})