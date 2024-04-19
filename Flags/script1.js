
const API_URL = "https://restcountries.com/v3.1/all";
console.log(API_URL);

function reqListener()
{
    const countriesData = JSON.parse(this.responseText);
    console.log(countriesData);
    for(let ind=0;ind<countriesData.length;ind++)
    {
        console.log(countriesData[ind].flag.png)
        
    }

   // console.log(typeof this.responseText)
}
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", API_URL);
req.send();

/*function reqListener()
{
    const countriesData = JSON.parse(this.responseText);
    console.log(countriesData);
    for(let ind=0;ind<countriesData.length;ind++)
    {
        console.log(countriesData[ind].flag.png)
    }
}
*/