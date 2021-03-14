// Clears output when user clicks button C
function clearOutput() {
    document.getElementById("output").innerHTML = "0";
}

// Removes 0 when user starts typing numbers
function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
        value = " "
        document.getElementById("output").innerHTML = value;
    }
}


// Calculates all functions i.e. +, -, * and /
function fordisplay(value) {
    removeZero()
    document.getElementById("output").innerHTML += value;
}

// Shows results of calculations in output
function solve() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}
