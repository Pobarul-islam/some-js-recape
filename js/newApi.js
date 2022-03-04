const loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

// loadCountries();
const displayCountries = countries => {
    for (const country of countries) {
        console.log(country.name.common);
    }
    
    const h3 = document.createElement('h3');
    h3.innerText = country.name.common;
    
    // const countriesDiv = countries => {
        
    // }
    // countries.forEach(country => {
    //     const h3 = document.createElement('h3');
    //     h3.innerText = country.name;
    //     countriesDiv.appendChild()
    // });
    
}
