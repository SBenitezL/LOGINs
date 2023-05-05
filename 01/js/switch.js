
function cambiar() {
    var signup = document.getElementById("action1");
    var login = document.getElementById("action2");

    var sign_move = document.getElementById("sign-up");
    var login_move = document.getElementById("login");
    
  
    if (signup.style.display === "none") {
        login_move.classList.toggle('activo');
        login.style.display = "none";
        signup.style.display = "flex";
    } else {
        signup.style.display = "none";
        login.style.display = "flex";
    }
  }
  