const cityInput1 = document.getElementById("cityInput1");
const cityInput2 = document.getElementById("cityInput2");
const cityInput3 = document.getElementById("cityInput3");
const workerInput1 = document.getElementById("workerInput1");
const workerInput2 = document.getElementById("workerInput2");
const workerInput3 = document.getElementById("workerInput3");
const workerInput4 = document.getElementById("workerInput4");

const dateInput = document.getElementById("dateInput");
const today = new Date();
const plusTwoWeeks = new Date(Date.now() + 12096e5);

const autocompleteList1 = document.getElementById("autocompleteList1");
const autocompleteList2 = document.getElementById("autocompleteList2");
const autocompleteList3 = document.getElementById("autocompleteList3");
const autocompleteList4 = document.getElementById("autocompleteList4");
const autocompleteList5 = document.getElementById("autocompleteList5");
const autocompleteList6 = document.getElementById("autocompleteList6");
const autocompleteList7 = document.getElementById("autocompleteList7");

const cities = [
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

const workers = [
    "Ania",
    "Artur",
    "Dagmara",
    "Dawid",
    "Emilia",
    "Igor",
    "Jan",
    "Hanna",
    "Karolina",
    "Piotr",
    "Natalia",
    "Sandra",
    "Tomasz",
    "Weronika",
    "Wiktor",
    "Zygmunt",
]

const autocomplete = (input, autocompleteList, list) => {
    clearList();
    list.forEach((item) => {
        
        if (item.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "") {
            autocompleteList.style.display = "block";
            
            let autocompleteItem = document.createElement("li");
            autocompleteItem.classList.add("autocomplete-item");
            autocompleteItem.innerHTML = item;
            autocompleteList.appendChild(autocompleteItem);
            autocompleteItem.addEventListener("click", () => {
                fillInput(item, input);
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
    autocomplete(cityInput1, autocompleteList1, cities);
});

cityInput2.addEventListener("keyup", () => {
    autocomplete(cityInput2, autocompleteList2, cities);
});

cityInput3.addEventListener("keyup", () => {
    autocomplete(cityInput3, autocompleteList3, cities);
});

workerInput1.addEventListener("keyup", () => {
    autocomplete(workerInput1, autocompleteList4, workers);
});

workerInput2.addEventListener("keyup", () => {
    autocomplete(workerInput2, autocompleteList5, workers);
});

workerInput3.addEventListener("keyup", () => {
    autocomplete(workerInput3, autocompleteList6, workers);
});

workerInput4.addEventListener("keyup", () => {
    autocomplete(workerInput4, autocompleteList7, workers);
});


const formatDate = (date) => {
    let year = date.getFullYear().toString();
    let month = date.getMonth()+1;
    if (month < 10) {
        month = "0" + month.toString();
    }
    let day = date.getDate();
    if (day < 10) {
        day = "0" + day.toString();
    }
    return year + "-" + month + "-" + day;
}

const min = formatDate(today);
const max = formatDate(plusTwoWeeks);

dateInput.setAttribute("min", `${min}`);
dateInput.setAttribute("max", `${max}`);