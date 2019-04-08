function count_down(duration, display)
{
  var timer = duration, minutes, seconds;
  setInterval(function ()
  {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0)
    {
      timer = duration;
    }
  }, 1000);
}

window.onload = function ()
{
  var sixMinutes = 60 * 6,
  display = document.querySelector('#time');
  count_down(sixMinutes, display);
};
