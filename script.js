const dado = {
  lados: 6,//parseInt(prompt("Quantos lados tem o dado?")),
  roll() {
     return Math.ceil(Math.random()*this.lados);
  }
}

let resultado = dado.roll();
console.log(resultado);

document.getElementById("dado").innerHTML = resultado;


//Atividade com DOM

//achar todos os elementos com a classe fruit
const food = document.querySelector('#food');

//Atribuir aos elementos uma const no JS
const apple = food.children[0];
const banana = food.children[1];
const carrot = food.children[2];

//Criar elementos 
const melon = document.createElement('li');
melon.innerHTML = `<span>🍉</span>Melon`;
food.appendChild(melon);

//forma chata para não usar o innerHTML
const brocoli = document.createElement('li');
const text = document.createTextNode("Brocoli");
const span = document.createElement('span');
const emoji = document.createTextNode("🥦");

span.appendChild(emoji);
brocoli.appendChild(span);
brocoli.appendChild(text);

food.insertBefore(brocoli, apple);

//tirar elemento
carrot.remove()

//Substituição de elementos
const lemon = document.createElement('li');
lemon.innerHTML = `<span>🍋</span>Lemon`;
food.replaceChild(lemon, banana);

/*All HTML elements have a large number of possible attributes, such as class, id, src, and href. The DOM has a number of methods that can be used to get or set these attributes.*/

