function login() {
  window.location.href = 'pages/home.html'
}


function logout() {
  window.location.href = '../index.html'
}

function navigateToAdminPage() { 
  window.location.href = 'home-admin.html'
}

function navigateToHome() {  
   console.log("star")
  window.location.href = 'home.html'

}

function navigateToProductRegistration() { 
  window.location.href = 'product-registration.html'
}

function navigateToListPage() { 
  window.location.href = 'list.html'
}

function navigateToDevolutionPage() { 
  window.location.href = 'devolution.html'
}

const menuIcon = document.querySelector('.img-menu');
const menu = document.querySelector('.list');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('open');
});
