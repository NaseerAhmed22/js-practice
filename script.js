const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const button = document.querySelector(".btn");
const card = document.querySelector(".card");
const grid = document.querySelector(".grid")



button.addEventListener("click", fun1);


function fun1() {

    if (input1.value === '' && input2.value === '') {
        alert("please write something")
    } else {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card">
        <div class="card-img">
            <img src="https://picsum.photos/200" alt="">
        </div>
        <div class="title">
            <h2>${input1.value}</h2>
            <p>${input2.value}</p>
        </div>
        </div>
    `
    grid.appendChild(div);
    }

   
    input1.value = '';
    input2.value = '';

   
}