const sidebar = document.querySelector(".btn-toggle");
const contenedor = document.getElementById("sidebar");


sidebar.addEventListener('click', ()=>{
    contenedor.classList.toggle('active')
}) 