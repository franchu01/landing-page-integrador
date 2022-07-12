const contOptions = document.getElementById("container__options");
const botonOptions = document.getElementById("container__options__button");
console.log(contOptions);
console.log(botonOptions);

botonOptions.addEventListener('click',()=>{
    contOptions.classList.toggle("container_show");
})

