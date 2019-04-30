index = 0;

function addClass(index, this_class)
{
  if (index.classList)
  {
    index.classList.add(this_class)
  }
}

function removeClass(index, this_class)
{
  if (index.classList)
  {
    index.classList.remove(this_class)
  }
}

function highLight(letter)
{
  document.getElementById(letter).className = "highlight";
}
