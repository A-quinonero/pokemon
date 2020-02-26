'use strict';

const faqHeadingsNodes = document.querySelectorAll('.question'); //seleccionamos todos los elementos con la class 'question'
const faqHeadings = [...faqHeadingsNodes]; //Aquí estamos copiando el array

//Creamos una función que se encarga de seleccionar el padre de donde ocurre el evento (en este caso el <article>)
const toggleFaqs = () => {
  const article = event.currentTarget.parentElement;
  article.classList.toggle('toggle-faq-on'); 
};

//Para cada <header> con la clase .question añadimos un evento click y se ejecuta la función de mas arriba
faqHeadings.forEach ( heading => {
  heading.addEventListener('click', toggleFaqs);
});

