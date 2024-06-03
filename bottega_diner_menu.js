// Descripción del menú
// Desayuno - breakfast
const BFastMenu = {
    first: "café",
    second: "té",
    third: "batido"
}
const BFastMenuPrice = {
    café: 3,
    té: 2,
    batido: 4
}

const BFastTwoMenu = {
    first: "queso",
    second: "chorizo",
    third: "patata"
}
const BFastTwoMenuPrice = {
    queso: 4,
    chorizo: 3,
    patata: 2
}

// Comida - Lunch
const LunchMenu = {
    first: "arroz",
    second: "pasta",
    third: "sopa"
}
const LunchMenuPrice = {
    arroz: 7,
    pasta: 6,
    sopa: 5
}

// Cena - dinner
const DinnerMenu = {
    first: "arroz",
    second: "pasta",
    third: "sopa"
}
const DinnerMenuPrice = {
    arroz: 7+1,
    pasta: 6+1,
    sopa: 5+1
}

// Acompañamientos - side
const sideMenu = {
    first: "tomate",
    second: "pimiento",
    third: "patata"
}
const sideMenuPrice = {
    tomate: 3,
    pimiento: 2,
    patata: 1
}

// Postre - dessert
const dessertMenu = {
    first: "fruta",
    second: "flan",
    third: "helado"
}
const dessertMenuPrice = {
    fruta: 1,
    flan: 2,
    helado: 3
}

// Bebida - drink
const drinkChosen = {
    first: "vino",
    second: "cerveza",
    third: "agua"
}
const drinkChosenPrice = {
    vino: 3,
    cerveza: 2,
    agua: 1
}

// Camarero - waither
const commentList = [
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
    "Te gustará, seguro."]

function comment(){
    return commentList[Math.floor(Math.random() * commentList.length)]
}

// Primera atención según horario
let currentTime = prompt("Hola, soy Juan, tu camarero en BOTTEGA DINER.\nPor favor, indica la hora actual para saber qué es lo que podemos ofrecerte en este momento.", "introducir aquí un número entero entre 1 y 24 horas")
let NumcurrentTime = parseInt(currentTime)

//Servicio de desayuno
function BreakfastMenuDisplay() {
    if (NumcurrentTime >= 6 && NumcurrentTime <= 11) {
        let menuItemsWithPrices = [];
        for (let item in BFastMenu) {
            let dish = BFastMenu[item];
            let price = BFastMenuPrice[dish];
            menuItemsWithPrices.push(`${dish}: ${price}€`);
        }
        alert(`¿Quieres desayunar?\n\nTe ofrecemos:\n${menuItemsWithPrices.join(',\n')}`);
        BreakfastLogic();
    }
}

function BreakfastLogic() {
    let BFastChoice = prompt(`Por favor, elige una de las opciones:\n\ncafé\nté\nbatido`);
    let menuItems = [];
    for (let item in BFastMenu) {
        menuItems.push(BFastMenu[item]);
    }
    if (BFastChoice == BFastMenu.first || BFastChoice == BFastMenu.second || BFastChoice == BFastMenu.third) {
        alert(`De acuerdo.\nHas elegido ${BFastChoice}.\n${comment()}`);
        let secondChoice = prompt("¿Quieres algo más?\n\nTe ofrecemos un rico revuelto de tortilla. (si/no)").toLowerCase();
        if (secondChoice === "si") {
            let BFastTwoMenuItemsWithPrices = [];
        for (let item in BFastTwoMenu) {
                let dish = BFastTwoMenu[item];
                let price = BFastTwoMenuPrice[dish];
                BFastTwoMenuItemsWithPrices.push(`${dish}: ${price}€`);
        }

    let BFastTwoDish = prompt(`Elige el ingrediente para tu revuelto de tortilla:\n\n${BFastTwoMenuItemsWithPrices.join(',\n')}`).toLowerCase();
        if (BFastTwoDish == BFastTwoMenu.first || BFastTwoDish == BFastTwoMenu.second || BFastTwoDish == BFastTwoMenu.third) {
            alert(`Has elegido ${BFastTwoDish}.\n${comment()}`);
            let total = calculateTotal(BFastChoice, BFastTwoDish, BFastMenuPrice, BFastTwoMenuPrice);
            alert(`Ticket:\n${total}`);
            } else {
            alert(`Por favor, elige una opción de las propuestas.\n${menuItems.join(',\n')}`);
            BreakfastMenuDisplay();
            }
        } else {
            let total = calculateTotal(BFastChoice, null, BFastMenuPrice, null);
            alert(`El total es: ${total}`);
        }
    } else {
        alert(`Por favor, elige una opción de las propuestas:\n${menuItems.join(',\n')}`);
        BreakfastMenuDisplay();
    }
}

// Servicio de comida
function LunchMenuDisplay() {
    if (NumcurrentTime >= 12 && NumcurrentTime <= 16) {
        let menuItemsWithPrices = [];
        for (let item in LunchMenu) {
            let dish = LunchMenu[item];
            let price = LunchMenuPrice[dish];
            menuItemsWithPrices.push(`${dish}: ${price}€`);
        }
        alert(`Nuestro menú para la comida es:\n\n${menuItemsWithPrices.join(',\n')}`);
        LunchLogic();
    }
}

function LunchLogic() {
    let LunchChoice = prompt("Por favor, elige un plato:\n\narroz\npasta\nsopa");
    let menuItems = [];
    for (let item in LunchMenu) {
        menuItems.push(LunchMenu[item]);
    }
    if (LunchChoice == LunchMenu.first || LunchChoice == LunchMenu.second || LunchChoice == LunchMenu.third) {
        alert(`De acuerdo.\nHas elegido ${LunchChoice}.\n${comment()}`);
        let secondChoice = prompt("¿Quieres un acompañamiento para este plato? (si/no)").toLowerCase();
        if (secondChoice === "si") {
            let sideMenuItemsWithPrices = [];
        for (let item in sideMenu) {
                let dish = sideMenu[item];
                let price = sideMenuPrice[dish];
                sideMenuItemsWithPrices.push(`${dish}: ${price}€`);
        }

    let sideDish = prompt(`Elige uno de nuestros acompañamientos propuestos para tu plato:\n\n${sideMenuItemsWithPrices.join(',\n')}`).toLowerCase();
        if (sideDish == sideMenu.first || sideDish == sideMenu.second || sideDish == sideMenu.third) {
            alert(`Has elegido ${sideDish} como acompañamiento.\n${comment()}`);
            let total = calculateTotal(LunchChoice, sideDish, LunchMenuPrice, sideMenuPrice);
            alert(`Ticket:\n${total}`);
            } else {
            alert(`Por favor, elige una opción de las propuestas.\nTe ofrecemos como acompañamiento lo siguiente:\n${sideMenuItemsWithPrices.join(',\n')}`);
            LunchLogic();
            }
        } else {
            let total = calculateTotal(LunchChoice, null, LunchMenuPrice, null);
            alert(`El total es: ${total}`);
        }
    } else {
        alert(`Por favor, elige una opción de las propuestas.\nNuestro menú para la comida es\n${menuItems.join(',\n')}`);
        LunchLogic();
    }
}

// Servicio de cena
function DinnerMenuDisplay() {
    if (NumcurrentTime >= 18 && NumcurrentTime <= 22) {
        let menuItemsWithPrices = [];
        for (let item in DinnerMenu) {
            let dish = DinnerMenu[item];
            let price = DinnerMenuPrice[dish];
            menuItemsWithPrices.push(`${dish}: ${price}€`);
        }
        alert(`Nuestro menú para la cena es el siguiente:\n\n${menuItemsWithPrices.join(',\n')}\n\n(El precio base del plato principal de las cenas tiene 1€ de recargo respecto al de las comidas.)\n`);
        DinnerLogic();
    }
}

function DinnerLogic() {
    let DinnerChoice = prompt("Por favor, elige un plato:\n\narroz\npasta\nsopa".toLowerCase());
    let menuItems = [];
    for (let item in DinnerMenu) {
        menuItems.push(DinnerMenu[item]);
    }
    if (DinnerChoice == DinnerMenu.first || DinnerChoice == DinnerMenu.second || DinnerChoice == DinnerMenu.third) {
        alert(`De acuerdo.\nHas elegido ${DinnerChoice}.\n${comment()}`);
        let secondChoice = prompt("¿Quieres un acompañamiento para este plato? (si/no)").toLowerCase();
        if (secondChoice === "si") {
            let sideMenuItemsWithPrices = [];
            for (let item in sideMenu) {
                let dish = sideMenu[item];
                let price = sideMenuPrice[dish];
                sideMenuItemsWithPrices.push(`${dish}: ${price}€`);
            }
            let sideDish = prompt(`Elige uno de nuestros acompañamientos propuestos para tu plato:\n\n${sideMenuItemsWithPrices.join(',\n')}`).toLowerCase();
            if (sideDish == sideMenu.first || sideDish == sideMenu.second || sideDish == sideMenu.third) {
                alert(`Has elegido como acompañamiento ${sideDish}.\n${comment()}`);
                let total = calculateTotal(DinnerChoice, sideDish, DinnerMenuPrice, sideMenuPrice);
                alert(`Ticket:\n${total}`);
            } else {
                alert(`Por favor, elige un plato:\n${sideMenuItemsWithPrices.join(',\n')}`);
                DinnerLogic();
            }
        } else {
            let total = calculateTotal(DinnerChoice, null, DinnerMenuPrice, null);
            alert(`Total: ${total}`);
        }
    } else {
        alert(`Por favor, elige un plato de los incluidos en nuestro menú:\n${menuItems.join(',\n ')}€`);
        DinnerLogic();
    }
}

// Gestión de error
while (NumcurrentTime < 0 || NumcurrentTime > 24) {
    alert("Ha habido algún error.\n Inténtalo de nuevo, por favor.")
    currentTime = prompt("¡atención!, introducir aquí un número entero entre 1 y 24 horas")
    NumcurrentTime = parseInt(currentTime)
}

if (NumcurrentTime >= 6 && NumcurrentTime <= 10) {
    BreakfastMenuDisplay();
} else if (NumcurrentTime >= 12 && NumcurrentTime <= 16) {
    LunchMenuDisplay();
} else if (NumcurrentTime >= 18 && NumcurrentTime <= 22) {
    DinnerMenuDisplay();
} else {
    alert("Ahora BOTTEGA DINER está cerrado.\n\nTe atenderemos gustosamente según el siguiente horario:\n\n    Desayunos, de 7-11 horas.\n    Comidas, de 12 a 14 horas.\n    Cenas, de 18 a 22 horas. ");
}

// Cálculo de precio total
function calculateTotal(mainChoice, sideChoice, mainMenuPrice, sideMenuPrice) {
    let mainPrice = mainChoice ? mainMenuPrice[mainChoice] : 0;
    let sidePrice = sideChoice ? sideMenuPrice[sideChoice] : 0;
    let total = mainPrice + sidePrice;
    let totalWithIVA = total * 1.10;

// Mensaje del total de manera condicional
    let totalMessage =`${mainChoice}: ${mainPrice}€\n`;
    if (sidePrice > 0) {
        totalMessage +=`${sideChoice}: ${sidePrice}€\n`;
    }
    totalMessage += `\n total parcial: ${total}€\n total con 10% de IVA: ${totalWithIVA.toFixed(2)}€\n\nSalud y feliz sobremesa!`;

    return totalMessage;
}
