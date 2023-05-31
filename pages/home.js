const sidebar = document.querySelector(".main-content");
const btnSideBar = document.querySelector(".btn-sidebar");

btnSideBar.addEventListener('click', ()=> {
    sidebar.classList.toggle('active');
})

