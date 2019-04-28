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
  var tds = document.getElementsById(letter)

  for (let i = 0; i < tds.length; i++)
  {
  //	removeClass(tds[i], "highlight");
  }

  addClass(tds[index % 6], "highlight");
  index++;
}
