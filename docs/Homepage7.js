document.addEventListener('DOMContentLoaded', function() {
  // Use buttons to toggle between views
  document.querySelector('#napoleonbonaparte').addEventListener('click', () => load_view('napoleon'));
  document.querySelector('#juliocesar').addEventListener('click', () => load_view('cesar'));
  document.querySelector('#alanturing').addEventListener('click', () => load_view('turing'));

  // By default, don´t load any view
  load_view('none');
});

 function load_view(character) {
     if (character == "cesar"){
         document.querySelector('#cesar').style.display = 'block';
         document.querySelector('#napoleon').style.display = 'none';
         document.querySelector('#turing').style.display = 'none';
     } else if (character == "napoleon"){
         document.querySelector('#cesar').style.display = 'none';
         document.querySelector('#napoleon').style.display = 'block';
         document.querySelector('#turing').style.display = 'none';
     } else if (character =="turing"){
         document.querySelector('#cesar').style.display = 'none';
         document.querySelector('#napoleon').style.display = 'none';
         document.querySelector('#turing').style.display = 'block';
     } else{
         document.querySelector('#cesar').style.display = 'none';
         document.querySelector('#napoleon').style.display = 'none';
         document.querySelector('#turing').style.display = 'none';
     }

 }