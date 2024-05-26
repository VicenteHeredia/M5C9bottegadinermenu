// Descripción del menú
// Desayuno - breakfast
const BFastMenu = {
    first: "a",
    second: "b",
    third: "c"
}
const BFastMenuPrice = {
    a: 5,
    b: 4,
    c: 3
}

// Comida - Lunch
const LunchMenu = {
    first: "d",
    second: "f",
    third: "g"
}
const LunchMenuPrice = {
    d: 15,
    f: 12,
    g: 10
}

// Cena - dinner
const DinnerMenu = {
    first: "d",
    second: "f",
    third: "g"
}
const DinnerMenuPrice = {
    d: 15+1,
    f: 12+1,
    g: 10+1
}

// Acompañamientos - side
const sideMenu = {
    first: "x",
    second: "y",
    third: "z"
}
const sideMenuPrice = {
    x: 3,
    y: 2,
    z: 1
}

// Camarero - waither
const commentList = ["Esperamos que sea de tu agrado.", "El chef y yo esperamos que te guste.", "Encantados de atenderte.", "Te lo serviremos enseguida.", "Te gustará, seguro."]
function comment(){
    return commentList[Math.floor(Math.random() * commentList.length)]
}

// Selección horaria, menús y comentarios
let currentTime = prompt("Hola, soy Juan, tu camarero en BOTTEGA DINER. Por favor, indica la hora actual para saber qué es lo que podemos ofrecerte en este momento.", "introducir aquí un número entero entre 1 y 24 horas")
let NumcurrentTime = parseInt(currentTime)

function BreakfastMenuDisplay() {
    if (NumcurrentTime >= 6 && NumcurrentTime <= 10) {
        let menuItemsWithPrices = [];
        for (let item in BFastMenu) {
            let dish = BFastMenu[item];
            let price = BFastMenuPrice[dish];
            menuItemsWithPrices.push(`${dish}: ${price}€`);
        }
        alert(`Nuestro menú para el desayuno es: ${menuItemsWithPrices.join(', ')}`);
        BreakfastLogic();
    }
}

function BreakfastLogic() {
    let BFastChoice = prompt("Por favor, elige tu desayuno:".toLowerCase());
    let menuItems = [];
      for (let item in BFastMenu) {
        menuItems.push(BFastMenu[item]);
    }
    if (BFastChoice == BFastMenu.first || BFastChoice == BFastMenu.second || BFastChoice == BFastMenu.third) {
      alert(`Has elegido la opción ${BFastChoice}.`);
        let total = calculateTotal(BFastChoice, null, BFastMenuPrice, null);
      alert(`Resumen: ${total}`);
    } else {
      alert(`Por favor, elige una opción de las propuestas. Nuestra oferta para el desayuno es la siguiente: ${menuItems.join(', ')}`)
        BreakfastLogic();
    }
}

function LunchMenuDisplay() {
    if (NumcurrentTime >= 12 && NumcurrentTime <= 16) {
        let menuItemsWithPrices = [];
        for (let item in LunchMenu) {
            let dish = LunchMenu[item];
            let price = LunchMenuPrice[dish];
            menuItemsWithPrices.push(`${dish}: ${price}€`);
        }
        alert(`Nuestro menú para la comida es: ${menuItemsWithPrices.join(', ')}`);
        LunchLogic();
    }
}

function LunchLogic() {
    let LunchChoice = prompt("Por favor, elige un plato:".toLowerCase());
    let menuItems = [];
    for (let item in LunchMenu) {
        menuItems.push(LunchMenu[item]);
    }
    if (LunchChoice == LunchMenu.first || LunchChoice == LunchMenu.second || LunchChoice == LunchMenu.third) {
        alert(`De acuerdo. Has elegido ${LunchChoice}. ${comment()}`);
        let secondChoice = prompt("¿Quieres un acompañamiento para este plato? (si/no)").toLowerCase();
        if (secondChoice === "si") {
            let sideMenuItemsWithPrices = [];
            for (let item in sideMenu) {
                let dish = sideMenu[item];
                let price = sideMenuPrice[dish];
                sideMenuItemsWithPrices.push(`${dish}: ${price}€`);
            }
            let sideDish = prompt(`Elige uno de nuestros acompañamientos propuestos para tu plato: ${sideMenuItemsWithPrices.join(', ')}`).toLowerCase();
            if (sideDish == sideMenu.first || sideDish == sideMenu.second || sideDish == sideMenu.third) {
                alert(`Has elegido ${sideDish} como acompañamiento. ${comment()}`);
                let total = calculateTotal(LunchChoice, sideDish, LunchMenuPrice, sideMenuPrice);
                alert(`Resumen: ${total}`);
            } else {
                alert(`Por favor, elige una opción de las propuestas. Te ofrecemos como acompañamiento lo siguiente: ${sideMenuItemsWithPrices.join(', ')}`);
                LunchLogic();
            }
        } else {
            let total = calculateTotal(LunchChoice, null, LunchMenuPrice, null);
            alert(`El total es: ${total}`);
        }
    } else {
        alert(`Por favor, elige una opción de las propuestas. Nuestro menú para la comida es ${menuItems.join(', ')}`);
        LunchLogic();
    }
}

function DinnerMenuDisplay() {
    if (NumcurrentTime >= 18 && NumcurrentTime <= 22) {
        let menuItemsWithPrices = [];
        for (let item in DinnerMenu) {
            let dish = DinnerMenu[item];
            let price = DinnerMenuPrice[dish];
            menuItemsWithPrices.push(`${dish}: ${price}€`);
        }
        alert(`Nuestro menú para la cena es: ${menuItemsWithPrices.join(', ')}`);
        DinnerLogic();
    }
}

function DinnerLogic() {
    let DinnerChoice = prompt("Por favor, elige un plato:".toLowerCase());
    let menuItems = [];
    for (let item in DinnerMenu) {
        menuItems.push(DinnerMenu[item]);
    }
    if (DinnerChoice == DinnerMenu.first || DinnerChoice == DinnerMenu.second || DinnerChoice == DinnerMenu.third) {
        alert(`De acuerdo. Has elegido ${DinnerChoice}. ${comment()}`);
        let secondChoice = prompt("¿Quieres un acompañamiento para este plato? (si/no)").toLowerCase();
        if (secondChoice === "si") {
            let sideMenuItemsWithPrices = [];
            for (let item in sideMenu) {
                let dish = sideMenu[item];
                let price = sideMenuPrice[dish];
                sideMenuItemsWithPrices.push(`${dish}: ${price}€`);
            }
            let sideDish = prompt(`Elige uno de nuestros acompañamientos propuestos para tu plato: ${sideMenuItemsWithPrices.join(', ')}`).toLowerCase();
            if (sideDish == sideMenu.first || sideDish == sideMenu.second || sideDish == sideMenu.third) {
                alert(`Has elegido como acompañamiento ${sideDish}. ${comment()}`);
                let total = calculateTotal(DinnerChoice, sideDish, DinnerMenuPrice, sideMenuPrice);
                alert(`Resumen: ${total}€`);
            } else {
                alert(`Por favor, elige un plato: ${sideMenuItemsWithPrices.join(', ')}`);
                DinnerLogic();
            }
        } else {
            let total = calculateTotal(DinnerChoice, null, DinnerMenuPrice, null);
            alert(`El total es: ${total}€`);
        }
    } else {
        alert(`Por favor, elige un plato de los incluidos en nuestro menú: ${menuItems.join(', ')}`);
        DinnerLogic();
    }
}


while (NumcurrentTime < 1 || NumcurrentTime > 24) {
    alert("Ha habido algún error. Inténtalo de nuevo, por favor.")
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
    alert("Ahora BOTTEGA DINER está cerrado. Te atenderemos gustosamente según el horario siguiente: Desayunos de 7-11 horas, Comidas de 12 a 14 horas y Cenas de 18 a 22 horas. ");
}

// Cálculo de precio total
function calculateTotal(mainChoice, sideChoice, mainMenuPrice, sideMenuPrice) {
    let mainPrice = mainChoice ? mainMenuPrice[mainChoice] : 0;
    let sidePrice = sideChoice ? sideMenuPrice[sideChoice] : 0;
    let total = mainPrice + sidePrice;
    let totalWithIVA = total * 1.10;

// Construye el mensaje de total de manera condicional
    let totalMessage = `El precio del plato elegido es
 ${mainPrice}€`;
    if (sidePrice > 0) {
        totalMessage += `, el precio del acompañamiento es ${sidePrice}€`;
    }
    totalMessage += `, por tanto, el total es ${total}€, y el total con el 10% de I.V.A. es ${totalWithIVA.toFixed(2)}€. Salud!`;

    return totalMessage;
}
