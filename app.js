// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
//submit form
form.addEventListener("submit", addItem);

//clear items
clearBtn.addEventListener("click", clearItem);

// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        const element = document.createElement("article");
        //add class
        element.classList.add("grocery-item");
        // add id
        const attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
        <p class="title">${value}</p>
                    <div class="btn-container">
                        <button type="button" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
        `
        const deleteBtn = document.querySelector(".delete-btn");
        const editBtn = document.querySelector(".edit-btn");
        deleteBtn.addEventListener("click", deleteItem);
        editBtn.addEventListener("click", editItem);
        //append child
        list.appendChild(element);
        //display alert
        displayAlert("item added to list", "success");
        //show container
        container.classList.add("show-container");
        //add to localStorage
        addToLocalStorage(id, value);
        //set to default
        setToDefault();
    } else if (value && editFlag) {

    } else {
        displayAlert("please enter a value", "danger");
    };
};

//display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //remove alert
    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1500);
};

//clear items
function clearItem() {
    const items = document.querySelectorAll(".grocery-item");

    if (items.length > 0) {
        items.forEach((item) => {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setToDefault();
    //localStorage.removeItem("list");
};

// delete function
function deleteItem() {
    console.log("delete item");
};

function editItem() {
    console.log("edit item");
};

// set to default
function setToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
};

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    console.log("Added to local storage");
};

// ****** SETUP ITEMS **********