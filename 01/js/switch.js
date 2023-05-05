
function cambiar() {
    console.log('La función ha empezado');
    var signup = document.getElementById("action1");
    var login = document.getElementById("action2");
    var sign_move = document.getElementById("sign-up");
    var login_move = document.getElementById("login");
    
    if(signup.style.display === ""){
        signup.style.display = "none";
        login.style.display = "flex";
    }
    if (signup.style.display === "none") {
        login_move.classList.toggle('active');
        login_move.addEventListener('transitionend', function(event){
            login.style.display = "none";
            login_move.classList.remove('active');
            signup.style.display = "flex";
        });
       return;
    }else {   
        sign_move.classList.toggle("active");
        sign_move.addEventListener("transitionend", function(event)
        {
            signup.style.display = "none";
            sign_move.classList.remove("active");
            login.style.display = "flex"; 
        });      
        return;
    }
  }
  