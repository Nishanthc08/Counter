var count = 0;

function increment() {
    count++;
    document.getElementById("clickme").innerHTML = "Click me: " + count;
}

function reset() {
    count = 0;
    document.getElementById("clickme").innerHTML = "Click me: " + count;
}