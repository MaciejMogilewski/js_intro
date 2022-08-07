// setTimeout(() => {
//     console.log('tak');
// },3000);
//
// const interval = setInterval(() => {
//     console.log('interval')
// },1000);
//
// setTimeout(() => {
//     clearInterval(interval);
// },5000);
//
// const btnRef = document.getElementById('btn');
//
// btnRef.addEventListener('click', () => {
//     console.log('zhakowałem Cię ziom');
// })


const  boxRef = document.querySelector('.box');

// setTimeout(function(){
//     boxRef.style.left = "200px";
//     setTimeout(function(){
//         boxRef.style.top = "200px";
//         setTimeout(function(){
//             boxRef.style.left = "0";
//             setTimeout(function(){
//             boxRef.style.top = "0";
//             }, 400);
//         }, 400);
//     }, 400);
// }, 400);


// const receipt = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve("Twój kebab maj friend 🌯");
//    }, 2001);
//
//     setTimeout(() => {
//         reject('Masz jakiś problem? Nie mam Twojego kebaba!');
//     }, 2000);
// });

// receipt
//     .then((message) => console.log(message))
//     .catch((message) => console.log(message));

const  url = 'https://api.nbp.pl/api/exchangerates/rates/a/USD/?format=json';
// const  response = fetch(url);
//
// response
//     .then((data) => data.json())
//     .then((data) => console.log(data))
//     .catch(console.error);


function myFetch(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onreadystatechange = function (aEvt) {
            if (request.readyState === 4) {
                if (request.status === 200)
                    resolve(request.responseText);
                else
                    reject("Błąd podczas ładowania strony\n");
            }
        };
        request.send(null);
    });
}

// const response = myFetch(url);

// response
//     .then((data) => console.log(data))
//     .catch(console.error);


//

// function* gen(){
//     console.log(1);
//     yield 1
//     console.log(2);
//     yield 2
//     console.log(3);
// }
//
// const  g = gen()
//
//
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


// function* infiniteLoop(){
//     let id = 1;
//
//     while (true){
//         yield id;
//         id++;
//         if (id > 5){
//             return;
//         }
//     }
// }
//
// const g = infiniteLoop();
//
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())


// function* magic(){
//     let a = 10;
//     let b = yield a + 5;
//     yield b;
// }
//
// const g = magic()
//
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// const  url2 = 'https://api.nbp.pl/api/exchangerates/rates/a/USD/?format=json';
//
// function* getData(url){
//     const data = yield fetch(url);
//     console.log(data);
// }
//
// const gen = getData(url2)
// console.log(gen.next().value.then((response) => {gen.next(response)}))
//
//
// async function getData2(url){
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// }
//
// getData2(url2);



















