// const workers = [
//     {
//         name: "mariusz",
//         position: "team leader",
//         age: 37,
//         sex: "male",
//         foreign_language: ["English", "French", "Chinese"],
//         driving_license: "yes"
//     },
//     {
//         name: "jan",
//         position: "consultant",
//         age: 42,
//         sex: "male",
//         foreign_language: ["English", "German", "Norwegian"],
//         driving_license: "no"
//     },
//     {
//         name: "jolanta",
//         position: "consultant",
//         age: 29,
//         sex: "female",
//         foreign_language: ["English", "French", "Russian"],
//         driving_license: "no"
//     },
//     {
//         name: "grzegorz",
//         position: "consultant",
//         age: 34,
//         sex: "male",
//         foreign_language: ["English", "German", "Japanese"],
//         driving_license: "yes"
//     },
//     {
//         name: "robert",
//         position: "consultant",
//         age: 47,
//         sex: "male",
//         foreign_language: ["English", "Spanish", "Portuguese"],
//         driving_license: "yes"
//     },
//     {
//         name: "przemysław",
//         position: "implementer",
//         age: 32,
//         sex: "male",
//         foreign_language: ["English", "Spanish", "Chinese", "Italian"],
//         driving_license: "yes"
//     },
// ]


// // 1.	Wyświetl konsultantów I ich wiek.
// function consultantAndAge(persons){
//     const temp = [];
//
//     for(let i = 0; i < persons.length; i++){
//         if (persons[i].position.includes('consultant')){
//             temp.push(persons[i].name +': '+ persons[i].age);
//         }
//     }
//
//     return temp;
// }
// // console.log(consultantAndAge(workers));
//
// // 2.	Wyświetl wszystkich z prawem jazdy.
// const workersWithDriverLicense = (persons) => persons
//     .filter((person) => person.driving_license.includes('yes'))
//     .map((person) => person.name);
//
// // console.log(workersWithDriverLicense(workers));
//
// // 3.	Wyświetl wszystkich mężczyzn + jakimi językami się posługują, ale bez angielskiego.
//
//
// const menWithoutEnglishLang = (persons) => persons
//     .filter((person) => !person.sex.includes('fe'))
//     .map((person) => person.name + ': ' + person.foreign_language
//         .filter((language) => language !== "English"));
//
// console.log(menWithoutEnglishLang(workers));



const trucks = [
    {
        truck: "Scania",
        hp: "560",
        truck_driver: "Janusz",
        weight: 40000,
        favourite_meal: ["Pizza", "Burger", "Fries"]
    },
    {
        truck: "Renault",
        hp: "420",
        truck_driver: "Jarek",
        weight: 35000,
        favourite_meal: ["Kebab", "Burger", "Fries"]
    },
    {
        truck: "Volvo",
        hp: "700",
        truck_driver: "Zenek",
        weight: 37000,
        favourite_meal: ["Kebab", "Burger", "Chciken"]
    },
    {
        truck: "Mercedes",
        hp: "460",
        truck_driver: "Jurek",
        weight: 16000,
        favourite_meal: ["Bigos", "Burger", "Fries"]
    },
    {
        truck: "Man",
        hp: "440",
        truck_driver: "Donald",
        weight: 20000,
        favourite_meal: ["Pizza", "Steak", "Ice cream"]
    },
    {
        truck: "Iveco",
        hp: "380",
        truck_driver: "Antoni",
        weight: 25000,
        favourite_meal: ["Pizza", "Steak", "Spaghetti"]
    },
]

// 1. Wyświetl nazwy ciężarówek posortowane według wagi od najmniejszej do najwiekszej.
// 2. Wyświetl ciężarówki z mocą powyżej 450 hp  i imiona szoferów.
// 3. Wyświetl szoferów na literę J oraz ich ulubione potrawy.