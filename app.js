//frases
const frases = [
    {
    id:1,
    author: "Tales de Mileto",
    img:"./img/talesDeMileto.jpg",
    frase : "<<El placer supremo es obtener lo que se anhela.>> <<La cosa más difícil es conocernos a nosotros mismos; la más fácil es hablar mal de los demás.>><<La felicidad del cuerpo se funda en la salud; la del entendimiento, en el saber.>><<Todo es animado y todo está lleno de dioses.>><<La belleza no dimana de un cuerpo hermoso, sino de las bellas acciones.>>"
    },
    
    {
    id:2,
    author : "Sócrates",
    img:"./img/socrates.jpg",
    frase : "<<No puedo enseñar nada a nadie. Solo puedo hacerles pensar.>>\
    <<Un hombre honesto es siempre un niño>><<El conocimiento empieza en el asombro>><<Una vida que no ha sido examinada no merece ser vivida>><<Habla para que yo pueda conocerte>><<El amigo debe ser como el dinero; antes de necesitarlo, es necesario saber su valor>><<El único conocimiento verdadero es saber que no sabes nada>>",
    },

    {
    id:3,
    filosofo : "Jean-Paul Sartre",
    img:"./img/Jean_Paul_Sartre.jpg",
    frase : " No juzgamos a las personas que amamos.",
    texto:"Resulta complicado reflexionar sobre nosotros mismos y conocernos porque siempre cuesta menos buscar los defectos en los demás. Para crecer como personas y para ser felices es necesario el autoconocimiento."
    },
        
    {
    id:4,
    author : "Sócrates",
    img:"",
    frase : "No puedo enseñar nada a nadie. Solo puedo hacerles pensar."
    },

    {
    id:5,
    author : "Sócrates",
    img:"",
    frase: "No puedo enseñar nada a nadie. Solo puedo hacerles pensar."
    },

    {
    id:6,
    author: "Sócrates",
    img:"",        
    frase: "No puedo enseñar nada a nadie. Solo puedo hacerles pensar."
    },
    
];
//seleccionamos items
const img = document.getElementById('author-img');
const author = document.getElementById('author');
const frase = document.getElementById('frase');

//seleccionamos los botones que accionaran algo
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const randomBtn = document.querySelector('.random');

//set starting item
let currentItem = 0;

//carga inicial del item cuando se carga la pagina
window.addEventListener("DOMContentLoaded", function(){
    showAutor();
});

//funcion para mostrar cada autor
function showAutor(){
    const item = frases[currentItem];
    img.src = item.img;
    author.textContent = item.author;
    frase.textContent = item.frase;
}

//mostrar siguiente autor
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > frases.length -1){
       currentItem = 0;
    }
    showAutor();
});
//mostrar autor anterior
prevBtn.addEventListener('click', function(){
    if(currentItem < 0){
        currentItem = frases.length -1;
    }
    currentItem--;
    showAutor();
});

//mostrar autor random
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * frases.length);
    console.log(currentItem);
    showAutor();
});