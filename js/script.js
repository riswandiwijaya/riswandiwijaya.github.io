const inputField = document.getElementById("tinggi-input");

inputField.addEventListener('input', function() {
    const inputValue = inputField.value
    console.log(inputValue)
    if (inputValidation(inputValue)) {
        console.log("success")
    }else {
        console.log("fail")
    }
})

function inputValidation(input) {
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(input)
}