//USUARIOS QUE VÃO ACESSAR
const usuarios = [
    { user: "Gustavo", senha: "X#v9ZpLq!2Tb@d7" },
    { user: "Marcelo", senha: "rTg@1Np&xY5zW$8" },
    { user: "João", senha: "M3q!7cZx@T6vRp#" },
    { user: "Maria", senha: "#mQ9&vW8" },
  ];
  
  function verificarLogin(user, senha) {
    return usuarios.find(usuario => usuario.user === user && usuario.senha === senha);
  }
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const user = document.getElementById("user").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (user === "" || senha === "") {
        window.alert("Preencha os campos antes por favor!");
        return;
    }
        const usuario = verificarLogin(user, senha);
        
    if (usuario) {
        alert(`Login bem-sucedido! Bem-vindo, ${usuario.user}`);
        window.location.href = "interface-principal.html"; // Redireciona apenas se a senha estiver correta
    } else {
        window.alert("Usuário ou senha incorretos.");
    }
});

  
