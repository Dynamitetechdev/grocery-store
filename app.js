
let grocery_input = document.querySelector("#grocery_input");
let add_item_button = document.querySelector(".grocery_add_button");
let grocery_list = document.querySelector(".grocery_list_items")
let groceery_item = document.querySelector(".grocery_items");
let remove_buttons = document.getElementsByClassName("remove_item_button");
// event listener
add_item_button.addEventListener("click", grocery_add_items);

function grocery_add_items(){
    let input = grocery_input.value;
    let list_item_div = document.createElement("div");
    list_item_div.classList.add("grocery_items");

    if(input == "" || input == " "){
        document.querySelector(".alert").style.display = "block";
        document.querySelector(".alert").textContent = "Please Insert Something";
        setTimeout(time_out,2000);

    } else{
        list_item_div.innerHTML = 
        `
        <div class="count">~</div>
        <div class="item_name">${input}</div>
        <div class="remove_item_button">Remove</div>
        `;
        grocery_list.appendChild(list_item_div)

        document.querySelector(".alert").style.display = "block";
        document.querySelector(".alert").textContent = "New Item Added";
        setTimeout(time_out,2000)
    }
    for(let i = 0; i < remove_buttons.length; i++){
        let remove_button = remove_buttons[i]
        remove_button.addEventListener('click', remove_grocery_item)
    };
    set_back_to_default();
};

function remove_grocery_item(event){
    let element = event.target;
    element.parentElement.remove();
    document.querySelector(".alert").style.display = "block";
    document.querySelector(".alert").textContent = "item removed";
    setTimeout(time_out,2000)
}
function set_back_to_default(){
    grocery_input.value = "";
}
function time_out(){
    document.querySelector(".alert").style.display = "";
}
let clear_all = document.querySelector(".clearAll")
clear_all.addEventListener("click", clear_item)


function clear_item(){
    let all_items = document.querySelectorAll(".grocery_items");
    if(all_items.length > 0){
        all_items.forEach(function(item){
            grocery_list.removeChild(item);
        })
        document.querySelector(".alert").style.display = "block";
        document.querySelector(".alert").textContent = "List Cleared";
        setTimeout(time_out,2000);
    }
    else if( all_items.length == 0){
        document.querySelector(".alert").style.display = "block";
        document.querySelector(".alert").textContent = "Nothing to clear";
        setTimeout(time_out,2000);
    }

}


































// function grocery_add_items(e){
//     e.preventDefault();
//     let input_value = grocery_input.value;
//     if(grocery_input.value == "" || grocery_input.value == " " ){
//         return alert("input something now.")
//     } else{
//         let new_items = document.createElement("div");
//         new_items.classList.add("grocery_items");
//         grocery_list.appendChild(new_items);
    
//         new_items.innerHTML = `
//         <div class="count">${count++}.</div>
//         <div class="item_name">${input_value}</div>
//         <div class="remove_item_button">Remove</div>
//         `
//         for(let i = 0; i < remove_buttons.length; i++){
//             let remove_button = remove_buttons[i];
//             remove_button.addEventListener("click", remove_grocery_items)
//         }
//         // will alert when item is been added

//         document.querySelector(".alert").textContent = "item added";
//         setTimeout(function(){
//             document.querySelector(".alert").textContent = "";
//         }, 3000);
//     }
//     document.getElementsByClassName("remove_item_button")[0].addEventListener("click", remove_grocery_items);

// };


// function remove_grocery_items(e){
//     let element =  e.target;
//     element.parentElement.remove();
// }