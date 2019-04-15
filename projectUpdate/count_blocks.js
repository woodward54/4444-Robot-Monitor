// Counts the blocks as the robot picks them up

var counter = 0;

function increase()
{
  var counter_div = document.getElementById('counter');
  counter_div.innerHTML = counter;

  if (counter == 6)
  {
     alert("All Blocks Have Been Retrieved");
  }
  else
  {
    counter_div.innerHTML = ++counter;
    return false;
  }
}

function reset()
{
  counter_div = document.getElementById('counter');
  counter = 0;
  counter_div.innerHTML = 0;

  return false;
}
