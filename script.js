const cityInput1 = document.getElementById("cityInput");
const cityInput2 = document.getElementById("cityInput2");
const cityInput3 = document.getElementById("cityInput3");

const autocompleteList1 = document.getElementById("autocompleteList1");
const autocompleteList2 = document.getElementById("autocompleteList2");
const autocompleteList3 = document.getElementById("autocompleteList3");

let cities = [
    "Katowice",
    "Chorzów",
    "Siemianowice Śląskie",
    "Ruda Śląska",
    "Świętochłowice",
    "Zabrze",
    "Gliwice",
    "Bytom",
    "Tarnowskie Góry",
    "Mikołów",
    "Tychy",
    "Mysłowice",
];

const autocomplete = (input, autocompleteList) => {
    clearList();
    cities.forEach((city) => {
        
        if (city.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "") {
            autocompleteList.style.display = "block";
            
            let autocompleteItem = document.createElement("li");
            autocompleteItem.classList.add("autocomplete-item");
            autocompleteItem.innerHTML = city;
            autocompleteList.appendChild(autocompleteItem);
            

            // autocompleItem.setAttribute("onclick", `fillInput(${city, input})`);
            autocompleteItem.addEventListener("click", () => {
                fillInput(city, input);
            })
        }
    })
}

function fillInput(value, input) {
    input.value = value;
    clearList();
}

function clearList() {
    let items = document.querySelectorAll(".autocomplete-item");
    items.forEach((item) => {
        item.remove();
    });

    let lists = document.querySelectorAll(".autocomplete-list");
    lists.forEach((list) => {
        list.style.display = "none"
    });
}



cityInput1.addEventListener("keyup", () => {
    autocomplete(cityInput1, autocompleteList1);
});

cityInput2.addEventListener("keyup", () => {
    autocomplete(cityInput2, autocompleteList2);
});

cityInput3.addEventListener("keyup", () => {
    autocomplete(cityInput3, autocompleteList3);
});

