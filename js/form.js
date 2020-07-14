
window.addEventListener('load', start);

function start(){
   var name_user = document.querySelector('#name_user');      
   name_user.addEventListener('keyup', countName);

   var form = document.querySelector('form');
   form.addEventListener('submit', preventSubmit);
}

function countName(event){
    
    var count = event.target.value;
    var span      = document.querySelector('#nameLength');
    span.textContent = count.length;
}

function preventSubmit(event){
    event.preventDefault();
    var name_user = document.querySelector('#name_user');
    alert(name_user.value + 'Cadastro com Sucesso!');
}
