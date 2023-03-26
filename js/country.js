const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries =>{
    const coutriesHtml = countries.map(country => getCountryHtml(country))
    const container = document.getElementById('country-details')
    container.innerHTML = coutriesHtml.join(' ')
}
const getCountryHtml = country =>{
    const{ name, flags} = country
    return`
       <div class='country'  >
       <h2> ${name.common} </h2>
        <img src="${flags.png}" alt="">

   </div>`
}

loadCountries()