
var input = document.getElementById("text");
var ul = document.getElementById("item");

function add() {
    if (input.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var list = document.createElement("li");
    list.textContent = input.value;


    list.onclick = function () {
        list.classList.toggle("completed");
    };


    var delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = function (event) {
        event.stopPropagation();
        ul.removeChild(list);
    };

    list.appendChild(delBtn);
    ul.appendChild(list);

    input.value = "";
}
