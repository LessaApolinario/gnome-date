const today = new Date()

const day = today.getDate()
const month = today.getMonth() + 1
const year = today.getFullYear()

const dayOfTheWeekLikeGNOME = today.toDateString().substring(0, 3)

// verificando se o mês existe
const expandDayOfTheWeekLikeGNOME = (day) => {
  const daysOfTheWeek = {
    Sun: 'Sunday',
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
  }

  return daysOfTheWeek[day]
    ? daysOfTheWeek[day]
    : 'Não existe um dia da semana correspondente!'
}

const expandMonthOfTheYearLikeGNOME = (month) => {
  const monthsOfTheYearLikeGNOME = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  }

  return monthsOfTheYearLikeGNOME[month]
    ? monthsOfTheYearLikeGNOME[month]
    : 'Não existe um mês do ano correspondente'
}

// Data e hora formato GNOME

// Curta
const dateLikeGNOME = `${today
  .toDateString()
  .substring(0, 10)} ${today.getHours()}:${today.getMinutes()}`

// longa
const extendedMonthOfTheYear = expandMonthOfTheYearLikeGNOME(month)
const extendedDayOfTheWeek = expandDayOfTheWeekLikeGNOME(dayOfTheWeekLikeGNOME)
const extendDateLikeGNOME = `${extendedMonthOfTheYear} ${day} ${year}`

// Manipulando a DOM e inserindo as datas
const shortDate = document.querySelector('.short-date')

const displayTime = () => {
  let date = new Date()
  let time = date.toLocaleTimeString('en-GB').substring(0, 5)
  shortDate.textContent = dateLikeGNOME.substring(0, 10) + ' ' + time
}

const createClock = setInterval(displayTime, 1000)

const dayOfTheWeek = document.querySelector('.day-of-the-week')
dayOfTheWeek.textContent = extendedDayOfTheWeek

const fullDate = document.querySelector('.full-date')
fullDate.textContent = extendDateLikeGNOME

// Abrindo a caixa com a data longa
const longDate = document.querySelector('.long-date')

shortDate.addEventListener('click', () => {
  shortDate.classList.add('open')
  shortDate.classList.remove('short-date')
  longDate.classList.remove('hidden')
})

// Fechando a caixa com a data longa
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const hasShortDateClass = shortDate.classList.contains('short-date')

  if (!hasShortDateClass) {
    shortDate.classList.remove('open')
    shortDate.classList.add('short-date')
    longDate.classList.add('hidden')
  }
})
