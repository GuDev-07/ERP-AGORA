const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event){
    event.preventDefault(); //Mensagem impedindo o envio
    window.location.href = 'interface-principal.html' //ate a pagina principal do sistema
});


// Simulando um banco de dados não relacional com um array de usuários
const usuarios = [
    { id: 1, nome: "Gustavo", senha: "1234" },
    { id: 2, nome: "Marcelo", senha: "1357" },
    { id: 3, nome: "João", senha: "2468" },
  ];
  
  function verificarLogin(nome, senha) {
    return usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
  }
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    const usuario = verificarLogin(email, senha);
  
    if (usuario) {
      alert(`Login bem-sucedido! Bem-vindo, ${usuario.nome}`);

      
      window.location.href = "pagina_principal.html"; 
    } else {
     
      alert("Usuário ou senha incorretos.");
    }
  });
  
