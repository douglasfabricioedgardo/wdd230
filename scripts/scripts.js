let date = new Date()
let year = date.getFullYear()
document.getElementById("currentYear").innerHTML = year

let getTimestamp = Date.now()
let timestamp = new Date(getTimestamp)
document.getElementById("timestamp").innerHTML = "Last Updated: " + timestamp