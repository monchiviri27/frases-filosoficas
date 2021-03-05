//frases
const frases = [
    {
    id:1,
    author: "Tales de Mileto",
    img:"./img/talesDeMileto.jpg",
    frase1: "_El placer supremo es obtener lo que se anhela.",
    frase2:"_La cosa más difícil es conocernos a nosotros mismos; la más fácil es hablar mal de los demás.",
    frase3:"_La felicidad del cuerpo se funda en la salud; la del entendimiento, en el saber.",
    frase4:"_Todo es animado y todo está lleno de dioses.",
    frase5:"_La belleza no dimana de un cuerpo hermoso, sino de las bellas acciones."
    },
    
    {
    id:2,
    author : "Sócrates",
    img:"./img/socrates.jpg",
    frase1: "_No puedo enseñar nada a nadie. Solo puedo hacerles pensar.",
    frase2: "_Un hombre honesto es siempre un niño.",
    frase3: "_El conocimiento empieza en el asombro.",
    frase4: "_Una vida que no ha sido examinada no merece ser vivida.",
    frase5: "_Habla para que yo pueda conocerte."
    },

    {
    id:3,
    author : "Jean-Paul Sartre",
    img:"./img/Jean_Paul_Sartre.jpg",
    frase1: "_No juzgamos a las personas que amamos.",
    frase2: "_No hay necesidad de fuego, el infierno son los otros.",
    frase3: "_El mundo podría existir muy bien sin la literatura, e incluso mejor sin el hombre.",
    frase4: "_Felicidad no es hacer lo que uno quiere sino querer lo que uno hace.",
    frase5: "_Basta con que un hombre odie a otro para que el odio vaya corriendo hasta la humanidad entera."
    
    },
        
    {
    id:4,
    author : "Francis Bacon",
    img:"./img/Francis_Bacon.jpg",
    frase1: "_El conocimiento es poder.",
    frase2: "_La muerte es el menor de todos los males.",
    frase3: "_El requisito del éxito es la prontitud en las decisiones.",
    frase4: "_Una persona que quiere venganza guarda sus heridas abiertas.",
    frase5: "_La duda: la escuela de la verdad."
    },

    {
    id:5,
    author : "Karl Marx",
    img:"./img/Marx.jpg",
    frase1: "_La peor lucha es la que no se hace.",
    frase2: "_La manera como se presentan las cosas no es la manera como son; y si las cosas fueran como se presentan la ciencia entera sobraría.",
    frase3: "_El motor de la historia es la lucha de clases.",
    frase4: "_La religión es el opio del pueblo.",
    frase5: "_La desvalorización del mundo humano crece en razón directa de la valorización del mundo de las cosas."
    },

    {
    id:6,
    author: "Platón",
    img:"./img/platon.jpg",        
    frase1: "_Pensar es el diálogo del alma consigo misma.",
    frase2: "_Donde reina el amor sobran las leyes.",
    frase3: "_De noche, especialmente, es hermoso creer en la luz.",
    frase4: "_La mejor riqueza es contentarse viviendo con poco.",
    frase5: "_La música es para el alma lo que la gimnasia para el cuerpo."
    },
    
    {
    id:7,
    author: "Buda",
    img:"./img/buda.jpg",                
    frase1: "_Cuida el exterior tanto como el interior, porque todo es uno.",
    frase2: "_La reflexión es el camino hacia la inmortalidad; la falta de reflexión, el camino hacia la muerte.",
    frase3: "_No lastimes a los demás con lo que te causa dolor a ti mismo.",
    frase4: "_El dolor es inevitable, pero el sufrimiento es opcional.",
    frase5: "_No es más rico quien más tiene, sino quien menos necesita."
    },

    {
        id:8,
        author: "Confucio",
        img:"./img/confucio.jpg",        
        frase1: "Exígete mucho a ti mismo y espera poco de los demás. Así te ahorrarás disgustos",
        frase2:"_La vida es muy simple, pero insistimos en hacerla complicada.",
        frase3: "_Aprender sin reflexionar es malgastar la energía.",
        frase4: "_Tenemos que estar en paz con nosotros mismos, si no no podemos guiar a otros en la búsqueda de la paz.",
        frase5: "_Sólo los sabios más excelentes, y los necios más acabados, son incomprensibles.",
    
    },

    {
        id:9,
        author: "Aristóteles",
        img:"./img/aristoteles.jpg",        
        frase1: "_Nuestras convicciones más arraigadas, más indubitables, son las más sospechosas. Ellas constituyen nuestro límite, nuestros confines, nuestra prisión.",
        frase2:"_Las raíces de la educación son amargas, pero sus frutos son dulces.",
        frase3: "_La amistad es un alma que habita en dos cuerpos; un corazón que habita en dos almas.",
        frase4: "_Lo que con mucho trabajo se adquiere, más se ama.",
        frase5:"_El hombre solitario es una bestia o un dios."

    },

    {
        id:10,
        author: "Schopenhauer",
        img:"./img/schopenhauer.jpg",        
        frase1: "Pocas veces pensamos en lo que tenemos; pero siempre en lo que nos falta",
        frase2:"En general, las nueve décimas partes de nuestra felicidad se fundamentan en la salud",
        frase3:"_Es difícil encontrar la felicidad dentro de uno mismo, pero es imposible encontrarla en otro lugar.",
        frase4:"_Los dos enemigos de la felicidad humana son el dolor y el aburrimiento.",
        frase5:"_El joven debe, tempranamente, estar capacitado para soportar estar solo; ya que es una fuente de felicidad y de paz mental."
    },

    {
        id:11,
        author: "Bertrand Russell",
        img:"./img/bertrandRussell.jpg",        
        frase1: "Nunca moriría por mis creencias porque podría estar equivocado",
        frase2: "_¿Para qué repetir los errores antiguos habiendo tantos errores nuevos que cometer?",
        frase3: "_El sabio uso del ocio es un producto de la civilización y de la educación.",
        frase4: "_Entre todas las formas de cautela, la cautela en el amor es, posiblemente, la más letal para la auténtica felicidad.",
        frase5: "Una buena vida es aquella inspirada por el amor y guiada por la inteligencia."
    },
    {
        id:12,
        author: "Maquiavelo",
        img:"./img/maquiavelo.jpg",        
        frase1: "_Todo el mundo ve lo que aparentas ser, pocos experimentan lo que realmente eres.",
        frase2: "_El que no detecta los males cuando nacen, no es verdaderamente prudente.",
        frase3: "_Los hombres olvidan con mayor rapidez la muerte de su padre que la pérdida de su patrimonio.", 
        frase4: "_Puede combinarse perfectamente el ser temido y el no ser odiado.",
        frase5: "_Cada uno ve lo que parece, pero pocos palpan lo que eres."   
    },
    {
        id:13,
        author: "Epíteto",
        img:"./img/epiteto.jpg",        
        frase1: "No es lo que te ocurre, sino cómo reaccionas lo que importa",
        frase2: "_No son las cosas que nos pasan las que nos hacen sufrir, sino lo que nosotros nos decimos sobre esas cosas.",
        frase3: "_En cuanto a todas las cosas que existen en el mundo, unas dependen de nosotros, otras no.",
        frase4: "_Si hablan mal de ti, y es verdad, corrígete a ti mismo; si es una mentira, ríete de ella.",
        frase5: "_Es más necesario que el alma se cure que el cuerpo; porque es mejor morir que vivir mal."
    },
    {
        id:14,
        author: "Rousseau",
        img:"./img/rousseau.jpg",        
        frase1: "_La paciencia es amarga, pero su fruto es dulce",
        frase2: "_El hombre es un milagro sin interés.",
        frase3: "_Hay un libro abierto siempre para todos los ojos: la naturaleza.",
        frase4: "_Prefiero ser un hombre de paradojas que un hombre de prejuicios.",
        frase5: "_Prefiero ser un hombre de paradojas que un hombre de prejuicios."
    },
    {
        id:15,
        author: "San Agustín",
        img:"./img/sanAgustin.jpg",        
        frase1: "La medida del amor es amar sin medida",
        frase2: "_Conócete, acéptate, supérate.",
        frase3: "_No hubo tiempo alguno en que no hubiese tiempo.",
        frase4: "_Obedeced más a los que enseñan que a los que mandan.",
        frase5: "_Así como toda carencia es desgracia, toda desgracia es carencia."
    },
    {
        id:16,
        author: "René Descartes",
        img:"./img/descartes.jpg",        
        frase1: "_Vivir sin filosofar es, propiamente, tener los ojos cerrados, sin tratar de abrirlos jamás.",
        frase2: "_Cogito, ergo sum.",
        frase3: "_Todo lo complejo puede dividirse en partes simples.",
        frase4: "_Para investigar la verdad es preciso dudar, en cuanto sea posible, de todas las cosas.",
        frase5: "_Sería absurdo que nosotros, cosas finitas, tratáramos de determinar las cosas infinitas."
    },
    {
        id:17,
        author: "Kant",
        img:"./img/kant.jpg",        
        frase1: "_Vemos las cosas, no como son, sino como somos nosotros.",
        frase2:"_Tan sólo por la educación puede el hombre llegar a ser hombre. El hombre no es más que lo que la educación hace de él.",
        frase3: "_Conceptos sin intuiciones son vacíos, intuiciones sin conceptos son ciegas.",
        frase4: "_La felicidad no es un ideal de la razón, sino de la imaginación.",
        frase5: "_Tuve que eliminar conocimiento para hacerle espacio a la creencia."
    },
    {
        id:18,
        author: "Diógenes El Cínico",
        img:"./img/diogenes.jpg",        
        frase1: "_Cuanto más conozco a la gente, más quiero a mi perro",
        frase2: "_La base de cada estado es la educación de su juventud.",
        frase3: "_El sol también penetra en los retretes, pero no está contaminado por ellos.",
        frase4: "_El insulto deshonra a quien lo infiere, no a quien lo recibe",
        frase5: "_Es preferible la compañía de los cuervos a la de los aduladores, pues aquellos devoran a los muertos y estos a los vivos."
    },
    {
        id:19,
        author: "Voltaire",
        img:"./img/voltaire.jpg",        
        frase1: "_Quienes creen que el dinero lo hace todo terminan haciendo todo por dinero.",
        frase2: "_Piensa por ti mismo y deja que otros gocen del privilegio de hacerlo también.",
        frase3: "_Al ser incapaz de hacer que la gente sea más razonable, he preferido ser feliz lejos de ellos.",
        frase4: "_El mundo me da vergüenza, y no puedo soñar que existe este reloj y no tiene ningún relojero.",
        frase5: "_La perfección se alcanza poco a poco, lentamente; requiere la mano del tiempo."

    },
    {
        id:20,
        author: "John Locke",
        img:"./img/locke.jpg",        
        frase1: "_ Frecuentemente hay más que aprender de las preguntas inesperadas de un niño que de los discursos de un hombre.",
        frase2: "_La fortaleza es la protección de las demás virtudes.",
        frase3: "_Las leyes se hicieron para los hombres y no los hombres para las leyes.",
        frase4: "_Donde no hay propiedad no hay justicia.",
        frase5: "_Las acciones humanas son las intérpretes de nuestros pensamientos."
    },

];
//seleccionamos items
const img = document.getElementById('author-img');
const author = document.getElementById('author');
const frase1 = document.getElementById('frase1');
const frase2 = document.getElementById('frase2');
const frase3 = document.getElementById('frase3');
const frase4 = document.getElementById('frase4');
const frase5= document.getElementById('frase5');

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
    frase1.textContent = item.frase1;
    frase2.textContent = item.frase2;
    frase3.textContent = item.frase3;
    frase4.textContent = item.frase4;
    frase5.textContent = item.frase5;
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