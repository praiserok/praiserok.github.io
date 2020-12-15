// Активний клас+переміщення
let heightHeaderTop = document.querySelector('.header-top').clientHeight;
let navigation = document.querySelectorAll('.header-nav a')

navigation.forEach((el) => {
  el.addEventListener('click', function (event) {
    var target = document.querySelector(this.getAttribute("href"));
    var why = target.offsetTop - heightHeaderTop + 1

    if (target != null) {
      event.preventDefault();
      window.scrollTo(0, why);
    }
  })
});

window.addEventListener('scroll', () => {
  let scrollBlock = document.querySelectorAll('.scroll')
  scrollBlock.forEach((el, i) => {
    if (el.offsetTop - heightHeaderTop <= window.scrollY) {
      navigation.forEach((el) => {
        if (el.classList.contains('active')) {
          el.classList.remove('active');
        }
      });
      // document.querySelectorAll('.header-nav a')[i].classList.add('active');
      navigation[i].classList.add('active');
    }
  });
});

// Таймер
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "January 01 2021 00:00:00 GMT+0300"; //for Ukraine
// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);
// Таймер