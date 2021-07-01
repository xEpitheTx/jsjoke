// const h1 = document.querySelector('#joke');

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(response => {
//     console.log("Waiting", response)
//     return response.json()
// })
// .then(data => {
//     console.log("Data parsed", data)
//     console.log(data.ticker.price);
//     h1.textContent = data.ticker.price;
// })
// .catch(error => {
//     console.log("error", error)
// })


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const getDadJokes = async() => {
    const config = {headers: {Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    console.log(res.data.joke);
    const newLi = document.createElement('LI');
    newLi.append(res.data.joke);
    jokes.append(newLi);
}

button.addEventListener('click', getDadJokes);