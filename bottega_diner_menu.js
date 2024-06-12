// Descripción del menú
// Desayuno - breakfast
const BFastMenu = {
    first: "cafe",
    second: "te",
    third: "batido"
}
const BFastMenuPrice = {
    cafe: 3,
    te: 2,
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
const dessertChosen = {
    first: "fruta",
    second: "flan",
    third: "helado"
}
const dessertChosenPrice = {
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
    BreakfastLogic();
  }
}

function BreakfastLogic() {
  let menuItemsWithPrices = [];
  for (let item in BFastMenu) {
    let dish = BFastMenu[item];
    let price = BFastMenuPrice[dish];
    menuItemsWithPrices.push(`${dish}: ${price}€`);
  }
  let BFastChoice = prompt(`¿Quieres desayunar?\nPor favor, elige una de las opciones:\n${menuItemsWithPrices.join(',\n')}`).toLowerCase();
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

        
        let total = calculateTotal(BFastChoice, BFastTwoDish, ``, ``, BFastMenuPrice, BFastTwoMenuPrice, null, null);
        alert(`Ticket:\n${total}`);
        
      } else {
        alert(`Por favor, elige una opción de las propuestas:\n${BFastTwoMenuItemsWithPrices.join(',\n')}`);
        BreakfastLogic();
      }
      } else {
      let total = calculateTotal(BFastChoice, BFastTwoDish, null, null, BFastMenuPrice, BFastTwoMenuPrice, null, null);
      alert(`El total es: ${total}`);
        BreakfastLogic();
    }
  } else {
    alert(`Por favor, elige una opción de las propuestas:\n${menuItemsWithPrices.join(',\n')}`);
    BreakfastLogic();
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
        LunchLogic();
    }
}

function LunchLogic() {
       let menuItemsWithPrices = [];
        for (let item in LunchMenu) {
            let dish = LunchMenu[item];
            let price = LunchMenuPrice[dish];
            menuItemsWithPrices.push(`${dish}: ${price}€`);
        }
       let LunchChoice = prompt(`Este es nuestro menú para la comida.\nPor favor, elige uno de nuestros platos principales:\n${menuItemsWithPrices.join(',\n')}`).toLowerCase();
        let menuItems = [];
        for (let item in LunchMenu) {
        menuItems.push(LunchMenu[item]);
        }
        if (LunchChoice == LunchMenu.first || LunchChoice == LunchMenu.second || LunchChoice == LunchMenu.third) {
        alert(`De acuerdo.\nHas elegido ${LunchChoice}.\n${comment()}`);
      
        } else {
          alert(`Por favor, elige una opción de las propuestas.\nTe ofrecemos lo siguiente:\n${menuItemsWithPrices.join(',\n')}`);
          LunchLogic();
        }
      
        let secondChoice = prompt("¿Quieres un acompañamiento para este plato? (si/no)").toLowerCase();
        if (secondChoice === "si") {
           let sideMenuItemsWithPrices = [];
        for (let item in sideMenu) {
            let dish = sideMenu[item];
            let price = sideMenuPrice[dish];
             sideMenuItemsWithPrices.push(`${dish}: ${price}€`);
         }

        let sideChoice = prompt(`Elige uno de nuestros acompañamientos propuestos para tu plato:\n${sideMenuItemsWithPrices.join(',\n')}`).toLowerCase();
        if (sideChoice == sideMenu.first || sideChoice == sideMenu.second || sideChoice == sideMenu.third) {
        alert(`Has elegido ${sideChoice} como acompañamiento.\n${comment()}`);
                  
        } else {
          alert(`Por favor, elige una opción de las propuestas.\nTe ofrecemos lo siguiente:\n${sideMenuItemsWithPrices.join(',\n')}`);
          LunchLogic();
        }          
          
        let thirdChoice = prompt("¿Quieres algo de beber? (si/no)").toLowerCase();
        if (thirdChoice === "si") {
            let drinkChosenItemsWithPrices = [];
        for (let item in drinkChosen) {
            let dish = drinkChosen[item];
            let price = drinkChosenPrice[dish];
            drinkChosenItemsWithPrices.push(`${dish}: ${price}€`);
         }
 
        let drinkChoice = prompt(`Elige tu bebida:\n${drinkChosenItemsWithPrices.join(',\n')}`).toLowerCase();
        if (drinkChoice == drinkChosen.first || drinkChoice == drinkChosen.second || drinkChoice == drinkChosen.third) {
        alert(`Has elegido ${drinkChoice}.\n${comment()}`);  
          
        } else {
          alert(`Por favor, elige una opción de las propuestas.\nTe ofrecemos lo siguiente:\n${drinkChosenItemsWithPrices.join(',\n')}`);
          LunchLogic();
        }          
          
        let fourthChoice = prompt("¿Quieres postre? (si/no)").toLowerCase();
        if (fourthChoice === "si") {
            let dessertChosenItemsWithPrices = [];
        for (let item in dessertChosen) {
            let dish = dessertChosen[item];
            let price = dessertChosenPrice[dish];
            dessertChosenItemsWithPrices.push(`${dish}: ${price}€`);
        }
          
        let dessertChoice = prompt(`Elige tu bebida:\n${dessertChosenItemsWithPrices.join(',\n')}`).toLowerCase();
        if (dessertChoice == dessertChosen.first || dessertChoice == dessertChosen.second || dessertChoice == dessertChosen.third) {
        alert(`Has elegido ${dessertChoice}.\n${comment()}`);
                    
        } else {
          alert(`Por favor, elige una opción de las propuestas.\nTe ofrecemos lo siguiente:\n${dessertChosenItemsWithPrices.join(',\n')}`);
          LunchLogic();
        }   
            
        let total = calculateTotal(LunchChoice, sideChoice, drinkChoice, dessertChoice, LunchMenuPrice, sideMenuPrice, drinkChosenPrice, dessertChosenPrice);
          alert(`Ticket:\n${total}`);
        } else {
          alert(`Por favor, elige una opción de las propuestas.\nTe ofrecemos lo siguiente:\n${drinkChosenItemsWithPrices.join(',\n')}`);
          LunchLogic();
        }
     
        let total = calculateTotal(LunchChoice, sideChoice, drinkChoice, dessertChoice, LunchMenuPrice, sideMenuPrice, drinkChosenPrice, dessertChosenPrice);
          alert(`Ticket:\n${total}`);
        } else {
          alert(`Por favor, elige una opción de las propuestas.\nTe ofrecemos lo siguiente:\n${sideMenuItemsWithPrices.join(',\n')}`);
          LunchLogic();
        }
         
        let total = calculateTotal(LunchChoice, sideChoice, drinkChoice, dessertChoice, LunchMenuPrice, sideMenuPrice, drinkChosenPrice, dessertChosenPrice);
          alert(`Ticket:\n${total}`);
        } else {
          alert(`Por favor, elige una opción de las propuestas.\nTe ofrecemos lo siguiente:\n${menuItemsWithPrices.join(',\n')}`);
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
        DinnerLogic();
        }
}

function DinnerLogic() {
       let menuItemsWithPrices = [];
        for (let item in DinnerMenu) {
            let dish = DinnerMenu[item];
            let price = DinnerMenuPrice[dish];
            menuItemsWithPrices.push(`${dish}: ${price}€`);
        }
       let DinnerChoice = prompt(`Este es nuestro menú para la cena.\nEl menú de la cena tiene un recargo de 1€ antes de impuestos, ya incluido.\nPor favor, elige uno de nuestros platos principales:\n${menuItemsWithPrices.join(',\n')}`);
       let menuItems = [];
       for (let item in DinnerMenu) {
           menuItems.push(DinnerMenu[item]);
       }
       if (DinnerChoice == DinnerMenu.first || DinnerChoice == DinnerMenu.second || DinnerChoice == DinnerMenu.third) {
           alert(`De acuerdo.\nHas elegido ${DinnerChoice}.\n${comment()}`);
      
        } else {
          alert(`Por favor, elige una opción de las propuestas.\nTe ofrecemos lo siguiente:\n${menuItemsWithPrices.join(',\n')}`);
          DinnerLogic();
        }
      
        let secondChoice = prompt("¿Quieres un acompañamiento para este plato? (si/no)").toLowerCase();
        if (secondChoice === "si") {
           let sideMenuItemsWithPrices = [];
        for (let item in sideMenu) {
            let dish = sideMenu[item];
            let price = sideMenuPrice[dish];
             sideMenuItemsWithPrices.push(`${dish}: ${price}€`);
         }

        let sideChoice = prompt(`Elige uno de nuestros acompañamientos propuestos para tu plato:\n${sideMenuItemsWithPrices.join(',\n')}`).toLowerCase();
        if (sideChoice == sideMenu.first || sideChoice == sideMenu.second || sideChoice == sideMenu.third) {
        alert(`Has elegido ${sideChoice} como acompañamiento.\n${comment()}`);
                  
        } else {
          alert(`Por favor, elige una opción de las propuestas.\nTe ofrecemos lo siguiente:\n${sideMenuItemsWithPrices.join(',\n')}`);
          DinnerLogic();
        }          
          
        let thirdChoice = prompt("¿Quieres algo de beber? (si/no)").toLowerCase();
        if (thirdChoice === "si") {
            let drinkChosenItemsWithPrices = [];
        for (let item in drinkChosen) {
            let dish = drinkChosen[item];
            let price = drinkChosenPrice[dish];
            drinkChosenItemsWithPrices.push(`${dish}: ${price}€`);
         }
 
        let drinkChoice = prompt(`Elige tu bebida:\n${drinkChosenItemsWithPrices.join(',\n')}`).toLowerCase();
        if (drinkChoice == drinkChosen.first || drinkChoice == drinkChosen.second || drinkChoice == drinkChosen.third) {
        alert(`Has elegido ${drinkChoice}.\n${comment()}`);  
          
        } else {
          alert(`Por favor, elige una opción de las propuestas.\nTe ofrecemos lo siguiente:\n${drinkChosenItemsWithPrices.join(',\n')}`);
          DinnerLogic();
        }          
          
        let fourthChoice = prompt("¿Quieres postre? (si/no)").toLowerCase();
        if (fourthChoice === "si") {
            let dessertChosenItemsWithPrices = [];
        for (let item in dessertChosen) {
            let dish = dessertChosen[item];
            let price = dessertChosenPrice[dish];
            dessertChosenItemsWithPrices.push(`${dish}: ${price}€`);
        }
          
        let dessertChoice = prompt(`Elige tu bebida:\n${dessertChosenItemsWithPrices.join(',\n')}`).toLowerCase();
        if (dessertChoice == dessertChosen.first || dessertChoice == dessertChosen.second || dessertChoice == dessertChosen.third) {
        alert(`Has elegido ${dessertChoice}.\n${comment()}`);
                    
        } else {
          alert(`Por favor, elige una opción de las propuestas.\nTe ofrecemos lo siguiente:\n${dessertChosenItemsWithPrices.join(',\n')}`);
          DinnerLogic();
        }   
            
        let total = calculateTotal(DinnerChoice, sideChoice, drinkChoice, dessertChoice, DinnerMenuPrice, sideMenuPrice, drinkChosenPrice, dessertChosenPrice);
          alert(`Ticket:\n${total}`);
        } else {
          alert(`Por favor, elige una opción de las propuestas.\nTe ofrecemos lo siguiente:\n${drinkChosenItemsWithPrices.join(',\n')}`);
          DinnerLogic();
        }
   
        let total = calculateTotal(DinnerChoice, sideChoice, drinkChoice, dessertChoice, DinnerMenuPrice, sideMenuPrice, drinkChosenPrice, dessertChosenPrice);
          alert(`Ticket:\n${total}`);
        } else {
          alert(`Por favor, elige una opción de las propuestas.\nTe ofrecemos lo siguiente:\n${sideMenuItemsWithPrices.join(',\n')}`);
          DinnerLogic();
        }
          
        let total = calculateTotal(DinnerChoice, sideChoice, drinkChoice, dessertChoice, DinnerMenuPrice, sideMenuPrice, drinkChosenPrice, dessertChosenPrice);
          alert(`Ticket:\n${total}`);
        } else {
          alert(`Por favor, elige una opción de las propuestas.\nTe ofrecemos lo siguiente:\n${menuItemsWithPrices.join(',\n')}`);
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
function calculateTotal(mainChoice, sideChoice, drinkChosen, dessertChoice, mainMenuPrice, sideMenuPrice, drinkChosenPrice, dessertChosenPrice) {
    let mainPrice = mainChoice ? mainMenuPrice[mainChoice] : 0;
    let sidePrice = sideChoice ? sideMenuPrice[sideChoice] : 0;
    let drinkPrices = drinkChosen ? drinkChosenPrice[drinkChosen] : 0;
    let dessertPrice = dessertChoice ? dessertChosenPrice[dessertChoice] : 0;
    let total = mainPrice + sidePrice + drinkPrices + dessertPrice;
    let totalWithIVA = total * 1.10;

// Mensaje del total de manera condicional
    let totalMessage =`${mainChoice}: ${mainPrice}€\n`;
    if (sidePrice > 0) {
        totalMessage +=`${sideChoice}: ${sidePrice}€\n`;
        totalMessage +=`${drinkChosen}: ${drinkPrices}€\n`;
        totalMessage +=`${dessertChoice}: ${dessertPrice}€\n`;
    }
    totalMessage += `\n total parcial: ${total}€\n total con 10% de IVA: ${totalWithIVA.toFixed(2)}€\n\nSalud y feliz sobremesa!`;

    return totalMessage;
}
