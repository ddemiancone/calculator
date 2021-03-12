const addClass = (element) => {
  element.classList.add('btn-selected')
}

const removeClass = (element) => {
  element.classList.remove('btn-selected')
}

const setSymbol = (event, operation) => {
  event.preventDefault()
  let symbol = document.getElementById('symbolOp')
  let secondValue = document.getElementById('secondNumber')
  const btAdd = document.getElementById('bt-add')
  const btSubstract = document.getElementById('bt-substract')
  const btMultiply = document.getElementById('bt-multiply')
  const btDivision = document.getElementById('bt-division')
  

  switch (operation) {
    case 'add':
      symbol.value = '+'
      secondValue.focus()
      addClass(btAdd)
      removeClass(btSubstract)
      removeClass(btMultiply)
      removeClass(btDivision)
      break;

    case 'substract':
      symbol.value = '-'
      secondValue.focus()
      addClass(btSubstract)
      removeClass(btAdd)
      removeClass(btMultiply)
      removeClass(btDivision)
      break;
  
    case 'multiply':
      symbol.value = '×'
      secondValue.focus()
      addClass(btMultiply)
      removeClass(btSubstract)
      removeClass(btAdd)
      removeClass(btDivision)
      break;

     case 'division':
      symbol.value = '/'
      secondValue.focus()
      addClass(btDivision)
      removeClass(btSubstract)
      removeClass(btMultiply)
      removeClass(btAdd)
      break;
  }
}

const Calculation = (event) => {
  event.preventDefault()
  let symbol = document.getElementById('symbolOp')
  let firstValue = parseFloat(document.getElementById('firstNumber').value)
  let secondValue = parseFloat(document.getElementById('secondNumber').value)
  let finalResult = document.getElementById('result')

  switch (symbol.value) {
    case '+':
      finalResult.value = firstValue + secondValue
      
      break;
  
    case '-':
      finalResult.value = firstValue - secondValue
      break;

    case '×':
      finalResult.value = firstValue * secondValue
      break; 

    case '/':
      finalResult.value = firstValue / secondValue
      break;
  }

  let firstValueS = document.getElementById('firstNumber').value
  let secondValueS = document.getElementById('secondNumber').value

  if (firstValueS === '' || secondValueS === '' ) {
    alert('debes introducir un número en ambos casilleros para que la calculadora funcione.')
    finalResult.value = ''
  }
}

const clearFields = (event) => {
  event.preventDefault()
  const calculator = document.getElementById('calculator')
  let finalResult = document.getElementById('result')
  calculator.reset()
  finalResult.value = ''
}

window.onkeydown = (e) => {
  if (e.key === 'Enter') {
    const calculate = Calculation(event)
  }

  else if (e.key === 'Delete') {
    const clear = clearFields(event)
  }

}

// window.onkeydown = (e) => {
//   let firstValue = parseFloat(document.getElementById('firstNumber').value)
//   let secondValue = parseFloat(document.getElementById('secondNumber').value)
//   let finalResult = document.getElementById('result')

//   console.log(e.keyCode)

//   switch (e.keyCode) {
//     case 107:
//       symbol.value = '+'
//       secondValue.focus()
//       break;

//     case 189:
//       symbol.value = '-'
//       secondValue.focus()
//       break;

//     case 56:
//       symbol.value = '*'
//       secondValue.focus()
//       break;

//     case 191:
//       symbol.value = '/'
//       secondValue.focus()
//       break;
//   }

//   // let firstValueS = document.getElementById('firstNumber').value
//   // let secondValueS = document.getElementById('secondNumber').value

//   // if (firstValueS === '' || secondValueS === '') {
//   //   alert('debes introducir un número en ambos casilleros para que la calculadora funcione.')
//   //   finalResult.value = ''
//   // }
// }

 
