const cityInput = document.getElementById("cityInput");
const autocompleList = document.getElementById("list1");

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

cityInput.addEventListener("keyup", () => {
    clearList();
    cities.forEach((city) => {
        
        if (city.toLowerCase().startsWith(cityInput.value.toLowerCase()) && cityInput.value != "") {
            autocompleList.style.display = "block";
            
            let autocompleItem = document.createElement("li");
            autocompleItem.classList.add("autocomplete-item");
            autocompleItem.innerHTML = city;
            document.querySelector(".list").appendChild(autocompleItem);

            autocompleItem.setAttribute("onclick", "fillCityInput('" + city + "')");
        }
    })
});


function fillCityInput(value) {
    cityInput.value = value;
    clearList();
}

function clearList() {
    let items = document.querySelectorAll(".autocomplete-item");
    items.forEach((item) => {
        item.remove();
    
    })
    autocompleList.style.display = "none";
}