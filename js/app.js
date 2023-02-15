// function getPin(){
//     const pin = generatePin();
//     const pinString = pin + '';
//     if(pinString.length === 4){
//         return pin;
//     }
//     else{
//         return getPin();
//     }
// }

// function generatePin(){
//     const random = Math.round(Math.random()*10000);
//     return random;
// };

// document.getElementById('pin-btn').addEventListener('click', function(){
//     const pin = getPin();
    
//     const showPin = document.getElementById('show-pin');
//     showPin.value = pin;
// });

// document.getElementById('calculator').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     if(isNaN(number)){
//         console.log(number);
//     }
//     else{
//         const typeField = document.getElementById('type-field');
//         const typeNumber = typeField.value;
//         const currentNumber = typeNumber + number;
//         typeField.value = currentNumber;
//     }
// });

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
};

document.getElementById('pin-btn').addEventListener('click', function(){
    const pin = getPin();
    

    const showPin = document.getElementById('show-pin');
    showPin.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
    const typeNumber = event.target.innerText;
    const typeFiled = document.getElementById('type-field');
    const typeValue = typeFiled.value;

    if(isNaN(typeNumber)){
        if(typeNumber === 'C'){
            typeFiled.value = '';
        }
        else if(typeNumber === '<'){
           const digits = typeValue.split('');
           digits.pop();
           const currentDigits = digits.join('');
           typeFiled.value = currentDigits;
        }
    }
    else{
        
        const number = typeValue + typeNumber;
        typeFiled.value = number;
    }
});

document.getElementById('submit-button').addEventListener('click', function(){
    const showPin = document.getElementById('show-pin');
    const typeRandomNumber = showPin.value;

    const typeFiled = document.getElementById('type-field');
    const tyFieldValue = typeFiled.value;

    const rightMessage = document.getElementById('correct');
    const incorrectMessage = document.getElementById('incorrect');

    if(tyFieldValue == typeRandomNumber){
        rightMessage.style.display = 'block';
        incorrectMessage.style.display = 'none';
    }
    else{
        incorrectMessage.style.display = 'block';
        rightMessage.style.display = 'none';
    }


})

