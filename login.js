
function login() {
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    // Lista de usuários permitidos
    var usuariosPermitidos = [
        { username: "usuario1", password: "senha1", nome: "João Paulo" },
        { username: "usuario2", password: "senha2", nome: "Maria Eduarda" },
        { username: "usuario3", password: "senha3", nome: "Pedro Alves" },
        { username: "admin", password: "admin", nome: "ADM Stockware" }
        
    ];
    if (
username === '' ||
password === ''

) {
alert('Por favor, preencha todos os campos.')
return
}

    var isUserAllowed = false;
    var isAdmin = false;

    for (var i = 0; i < usuariosPermitidos.length; i++) {
        if (usuariosPermitidos[i].username === username && usuariosPermitidos[i].password === password) {
            localStorage.setItem('username', usuariosPermitidos[i].nome);
            isUserAllowed = true;
            break;
        }
    }

    if (isUserAllowed) {
        if (username === "admin") {
            isAdmin = true;
        }

        if (isAdmin) {
            alert("Login bem-sucedido como admin!");
            // Redireciona para a tela de admin
            window.location.href = "pages/home-admin.html?username=" + encodeURIComponent(username);
        } else {
            alert("Login bem-sucedido como usuário!");
    
            // Redireciona para a tela de usuário
            window.location.href = "pages/home.html?username=" + encodeURIComponent(username);
        }
    } else {
        alert("Usuário ou senha inválidos. Tente novamente.");
    }
}


/////////////////////////////////////////////////////////////////


