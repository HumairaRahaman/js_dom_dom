const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()
// let futureDate = new Date(2022, 2, 8, 23, 55, 0)

const futureDate = new Date(tempYear, tempMonth, tempDay +10, 23,55,0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minuts = futureDate.getMinutes()
let month = futureDate.getMonth()
month = months[month]
const date = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()]

giveaway.textContent = `Giveaway Ends On ${weekday} ${date} ${month} ${year} ${hours}:${minuts}pm`

//future time in ms

const futureTime = futureDate.getTime()

function getReminingTime(){
  const today = new Date().getTime()
  const t = futureTime - today
  
//value in ms
  const oneDay = 24*60*60*1000
  const oneHour = 60*60*1000
  const oneMinut = 60*1000

  //calculate all value
  let days = t/oneDay
  days = Math.floor(days)
  let hour = Math.floor((t % oneDay) /oneHour)
  let minuts = Math.floor((t % oneHour) /oneMinut)
  let seconds = Math.floor((t % oneMinut) /  1000)
  
  //set all value in array
  const values = [days,hour,minuts,seconds]

  //format function
  function format(item){
    if(item<10){
      return (item = `0${item}`)
    }
    return item
  }

  items.forEach(function(item,index){
    item.innerHTML = format(values[index])
  })
  if(t<0){
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class='expired'>Sorry this giveway has expired</h4>`
  }
 
}
//count down
let countdown = setInterval(getReminingTime, 1000)
getReminingTime()
