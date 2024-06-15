// Enunciación de las variables de ámbito local que queremos utilizar en la aplicación
let check = "";
let total = 0;

// Construcción de los menús utilizando constantes con formato biblioteca para optimizar la gestión de contenido
const desayuno = {
    "Opción 1:": [{ "name": "cafe", "price": 2 },
    { "name": "te", "price": 2 },
    { "name": "batido natural", "price": 3 }],
    "Opción 2:": [{ "name": "revuelto de queso", "price": 3 },
    { "name": "revuelto de chorizo", "price": 3 },
    { "name": "revuelto de patata", "price": 2 }],
    "Opción 3:": [{ "name": "pan", "price": 1 },
    { "name": "tarta", "price": 3 },
    { "name": "galleta", "price": 1 }]
}

const comida = {
    "plato principal:": [{ "name": "arroz", "price": 6 },
    { "name": "pasta", "price": 5 },
    { "name": "sopa", "price": 4 }],
    "acompañamiento:": [{ "name": "tomate", "price": 4 },
    { "name": "pimiento", "price": 3 },
    { "name": "patata", "price": 2 }],
    "bebida::": [{ "name": "vino", "price": 3 },
    { "name": "cerveza", "price": 2 },
    { "name": "agua", "price": 1 }],
    "postre:": [{ "name": "fruta", "price": 1 },
    { "name": "flan", "price": 2 },
    { "name": "helado", "price": 1 }]
}

const cena = {
    "plato principal:": [{ "name": "arroz", "price": 7 },
        { "name": "pasta", "price": 6 },
        { "name": "sopa", "price": 5 }],
        "acompañamiento:": [{ "name": "tomate", "price": 4 },
        { "name": "pimiento", "price": 3 },
        { "name": "patata", "price": 2 }],
        "bebida::": [{ "name": "vino", "price": 3 },
        { "name": "cerveza", "price": 2 },
        { "name": "agua", "price": 1 }],
        "postre:": [{ "name": "fruta", "price": 1 },
        { "name": "flan", "price": 2 },
        { "name": "helado", "price": 1 }]
}

// Construcción de las constantes con los comentarios del camarero
const comments = [
    "Esperamos que sea de tu agrado.",
    "Estará exquisito.",
    "Disfrurás de tu sabor.",
    "Muy recomendable.",
    "Ya nos dirás cómo lo encuentras.",
    "Buena elección.",
    "Verás como es de tu agrado.",
    "El chef y yo esperamos que te guste.",
    "Encantados de atenderte.",
    "Te lo serviremos enseguida.",
    "Te gustará, seguro."];


// Función para la elección aleatoria de contenidos
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Función para la presentación de los menús
function showMenu(menu) {
    let text = "Encantados de poder atenderte.\n\nTe presentamos el menú disponible a estas horas:\n";
    for (const [key, value] of Object.entries(menu)) {
        text += `${key}\n`;
        for (let i = 0; i < value.length; i++) {
            text += `${value[i].name.toLowerCase()} -${value[i].price}€-\n`;
        }
    }
    return text;
}

// Función de construcción de un bucle para la gestión de los contenidos que queramos utilizar (comentarios)
function checkElement(elem, array) {
    if (elem) {
        for (let i = 0; i < array.length; i++) {
            if (elem.toLowerCase() == array[i].name.toLowerCase()) {
                return array[i].price;
            }
        }
    }
    return 0;
}

// Construcción de los condicionales de propuestas y respuestas según la elección del cliente (gestión errores incluido)
function selectMenu(menu) {
    for (const [key, value] of Object.entries(menu)) {
        let allOk = false;
        do {
            let text = `${key.toLowerCase()}\n`;

            for (let i = 0; i < value.length; i++) {
                text += `${value[i].name.toLowerCase()} -${value[i].price}€-\n`;
            }
            text += "Por favor, elige una opción.";

            q = prompt(text).toLowerCase();
            let price = (checkElement(q, value));

            if (price >= 0) {
                check += `${key.toLowerCase()} ${q} -${price}€-\n`;
                total += price;
                allOk = true;
                alert(comments[getRandomInt(comments.length)]);
            } else {
                alert("Ha habido algún error.\n Inténtalo de nuevo, por favor.");
            }

        } while (allOk == false);
    }
}

// Elaboración del ticket resumen para mostrar al cliente
function showCheck(check, total) {
    let text = check;
    let totalWithIVA = total * 1.10;
    text += `\n total parcial: ${total}€\n total con 10% de IVA: ${totalWithIVA.toFixed(2)}€\n\nSalud y feliz sobremesa!`;
    return text;
}

// Oferta del servicio y selección del menú según horario
let timeMenu = 0;
do {
    let time = prompt("Hola, soy Juan, tu camarero en BOTTEGA DINER.\n\nPor favor, indica la hora actual para saber qué es lo que podemos ofrecerte en este momento.", "introducir aquí un número entero entre 1 y 24 horas");
    time = Number(time);
    if (time >= 6 && time <= 10) {
        timeMenu = desayuno;
    } else if (time >= 12 && time <= 16) {
        timeMenu = comida;
    } else if (time >= 18 && time <= 22) {
        timeMenu = cena;
    } else {
        alert("Ahora BOTTEGA DINER está cerrado.\n\nTe atenderemos gustosamente según el siguiente horario:\n\n    Desayunos, de 6-10 horas.\n    Comidas, de 12 a 16 horas.\n    Cenas, de 18 a 20 horas. ");
        continue;
    }
    alert(showMenu(timeMenu));
    selectMenu(timeMenu);
    alert(showCheck(check, total));
} while (timeMenu == 0)
