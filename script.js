function login() {
  window.location.href = 'pages/home.html'
}


function logout() {
  window.location.href = '../index.html'
}

function navigateToListPage() { 
  window.location.href = 'list.html'
}
function navigateToDevolutionPage() { 
  window.location.href = 'devolution.html'
}

function navigateToFavsPage() { 
  window.location.href = 'favs.html'
}

const menu = document.querySelector('.main');
const menuBtn = document.querySelector('.btn-sidebar');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});
