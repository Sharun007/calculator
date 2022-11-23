function display(num){
    result.value+=num
}

function allclear(){
    result.value=""
}

function evaluateexp(){
    // currentexp=result.value
    // result.value=eval(currentexp)

    result.value=eval(result.value)
}


function backspace(){
    // data=result.value
    // s=data.slice(0,-1)
    // result.value=s

    result.value=result.value.slice(0,-1)
}