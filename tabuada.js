//Loops com "FOR" 
//for (expressaoInicial; condicional; incremento++) {}

//TABUADA

function calctab() {
  let i = prompt('< Qual tabuada deseja ver? ');
  for (let n = 1; n <= 10; n++) {
    console.log(`${i} X ${n} = ${i * n}`);
  }
}

calctab();
