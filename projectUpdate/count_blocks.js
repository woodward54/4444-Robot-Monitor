// Counts the blocks as the robot picks them up

var counter = 0;
var counter_div = document.getElementById('counter');
counter_div.innerText = counter;

function increase()
{
    counter_div.innerText = ++counter;
    return false;
}
