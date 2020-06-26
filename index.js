// import axios from './node_modules/axios'

const getSeries = async () => {
  const series = await fetch('https://content.viaplay.se/pc-se/serier/samtliga')
  return series
}

document.addEventListener("DOMContentLoaded", () => {
  series = getSeries();
  debugger;
})