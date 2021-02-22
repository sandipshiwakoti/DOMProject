const btnAdd = document.querySelector(".btn-add");
const btnClear = document.querySelector(".btn-clear");
const inputItem = document.querySelector(".input-item");
const shoppingItems = document.querySelector(".shopping-items");
const formMessage = document.querySelector(".form-message");
const form = document.querySelector(".shopping-form");
const btnsCancel = document.querySelectorAll(".btn-cancel");
const box = document.querySelector(".confirmation-box");
const overlay = document.querySelector(".overlay");

// initialization
let editFlag = false;
let editId = "";
let editItemTitle;

// functions
const reset = () => {
    inputItem.value = "";
    btnAdd.innerText = "add";
    editFlag = false;
    editId = "";

    const itemTexts = document.querySelectorAll(".confirmation-box span");
    itemTexts.forEach(text => {
        text.textContent = "item";
    });
}

const editItem = (e) => {
    const item = e.currentTarget.parentElement.parentElement;
    editId = item.dataset.id;
    editItemTitle = e.currentTarget.parentElement.previousElementSibling;
    inputItem.value = editItemTitle.innerText;
    inputItem.focus();
    btnAdd.innerText = "edit";
    editFlag = true;
}

const removeItem = (e) => {
    box.classList.add("show-confirmation-box");
    overlay.classList.add("show-overlay");
    const item = e.currentTarget.parentElement.parentElement;
    let btnDelete = document.querySelector(".btn-delete");
    btnDelete.value = "deleteOneItem";
    btnDelete.addEventListener("click", () => {
        if(btnDelete.value === "deleteOneItem"){
            shoppingItems.removeChild(item);
            displayMsg("Item removed from shopping list", "danger");
            const id = item.dataset.id;
            removeFromLocalStorage(id);
            box.classList.remove("show-confirmation-box");
            overlay.classList.remove("show-overlay");
             if(shoppingItems.childElementCount == 0){
                btnClear.style.display = "none";
            }
        }
    });

    reset();
}

const addItem = () => {
    const id = new Date().getTime().toString();
    const value = inputItem.value;
    loadItem(id, value);
    displayMsg("New item added into shopping list", "success");
    reset();

    addToLocalStorage(id, value);
}


const displayMsg = (message, action) => {
    formMessage.innerText = message;
    formMessage.classList.add("show-form-message");
    if(action === "danger"){
        formMessage.style.color = "red";
    }
    else {
        formMessage.style.color = "green";
    }

    setTimeout(() => {
        formMessage.classList.remove("show-form-message");
        formMessage.innerText = "";
    }, 2000);
}

const clearItems = () => {
    const itemTexts = document.querySelectorAll(".confirmation-box span");
    itemTexts.forEach(text => {
        text.textContent = "all items";
    })
    box.classList.add("show-confirmation-box");
    overlay.classList.add("show-overlay");
    let btnDelete = document.querySelector(".btn-delete");
    btnDelete.value = "deleteAllItem";
    btnDelete.addEventListener("click", () => {
        if(btnDelete.value === "deleteAllItem"){
            const items = document.querySelectorAll(".shopping-item");

            items.forEach(item => {
                shoppingItems.removeChild(item);
            });

            btnClear.style.display = "none";
            displayMsg("All items has been cleared", "success");
            localStorage.removeItem("list");
            box.classList.remove("show-confirmation-box");
            overlay.classList.remove("show-overlay");
        }
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = inputItem.value;
    if(inputValue && !editFlag){
        addItem();
    }
    else if(inputValue && editFlag){
        editItemTitle.innerText = inputValue;
        displayMsg("Item edited in the shopping list", "success");
        editLocalStorage(editId, inputValue);
        reset();
    }
    else {
        displayMsg("Please enter an item", "danger");
    }
});

// Form load from Local Storage
const getLocalStorage = () => {
    let list;
    if(localStorage.getItem("list")){
        list = JSON.parse(localStorage.getItem("list"));
    }
    else {
        list = [];
    }
    return list;
}

const addToLocalStorage = (id, value) => {
    const shopping = {id, value};
    const list = getLocalStorage();
    list.push(shopping);
    localStorage.setItem("list", JSON.stringify(list));
}

const editLocalStorage = (id, value) => {
    const list = getLocalStorage();
    list.map(item => {
        if(item.id == id){
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(list));
}

const removeFromLocalStorage = (id) => {
    let list = getLocalStorage();
    list = list.filter(item => item.id != id);
    localStorage.setItem("list", JSON.stringify(list));
}

const loadItem = (id, value) => {
    const shoppingItem = document.createElement("div");
    shoppingItem.classList.add("shopping-item");
    shoppingItem.innerHTML =
            `<h5 class="item-title">${value}</h5>
            <div class="btn-container">
                    <button class="btn-edit"><i class="fas fa-edit"></i></button>
                    <button class="btn-remove"><i class="fas fa-trash"></i></button>
            </div>`;
    shoppingItem.setAttribute("data-id", id);
    shoppingItems.appendChild(shoppingItem);
    
    btnClear.style.display = "block";

    const btnsEdit = document.querySelectorAll(".btn-edit");
    const btnsRemove = document.querySelectorAll(".btn-remove");
    btnsEdit.forEach(btnEdit => {
        btnEdit.addEventListener("click", editItem);
    });

    btnsRemove.forEach(btnRemove => {
        btnRemove.addEventListener("click", removeItem);
    });

    btnClear.addEventListener("click", clearItems);

    btnsCancel.forEach(btnCancel => {
    btnCancel.addEventListener("click", (e) => {
        e.preventDefault();
        box.classList.remove("show-confirmation-box");
        overlay.classList.remove("show-overlay");
        reset();
    })
});
}

window.addEventListener("DOMContentLoaded", (e) => {
    let list = getLocalStorage();
    list.forEach(item => {
        loadItem(item.id, item.value);
    });
});

// confirmation box


