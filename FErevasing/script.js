// function fizzBuzz(limit) {
// const newArr = []

// for ( i = 1; i <= limit; i++) {
//     if(i % 15 === 0) {
//         newArr.push("fizz buzz")
//     } else if (i % 3 === 0) {
//         newArr.push("fizz")
//     } else if (i % 5 === 0) {
//         newArr.push("buzz")
//     } else {
//         newArr.push(i)
//     }
   
// }
// return newArr

// }

// console.log(fizzBuzz(10));

// const userObj = {
//     name: "Alex",
//     age: 29,
//     city: 'Berlyn',
// }
// console.log(Object.keys(userObj).length === 0);

// console.log(Object.keys(userObj));
// console.log(Object.values(userObj));
// console.log(userObj.hasOwnProperty('age'));
// console.log(userObj.hasOwnProperty('email'));
// // console.log('age' in userObj);
// delete userObj.city;
// console.log(userObj);
// for (let key in userObj) {
    
//    console.log(userObj[key])
//   }
//   console.log(userObj.name)
//   console.log(userObj['name'])
// for (let key in userObj) {
//     console.log(key)
// }




//   const productsArray = [
//     { product: 'tele', price: 500 },
//     { product: 'computer', price: 1000 },
//     { product: 'phone', price: 700 },
//     { product: 'machine', price: 2000 },
//   ];
  
//   function multiplyonTwo(arr) {
//     for (let obj of productsArray) {
//       obj.price *= 2; // Умножаем цену на два
//     }
//   }
  
//   // Вызываем функцию для массива productsArray
//   multiplyonTwo(productsArray);
  
//   console.log(productsArray);



//   const emptyObj = {
//     email: 'asdfg.com',
//   }
//   console.log(emptyObj)

//   const ob = {
//     name: 'Srgei',
//     country: 'Germany',
//   }
//   Object.assign(ob, emptyObj)
//   console.log(ob)

//   const ob1 = {
// city: 'Berlin',
// number: 11,
//   }
//   Object.assign(ob, ob1)
//   console.log(ob)


//   let users = [
//     {
//       name: 'John',
//       age: 30,
//     },
//     {
//       name: 'Bob',
//       age: 21,
//     },
//     {
//       name: 'Anna',
//       age: 19,
//     },
//   ]
//   const emptyObj = {}
//   for (let userObject of users) {
  
 
//     if (userObject.name === 'Anna') {
//         Object.assign(emptyObj, userObject);
//       }
//     }
    
    
    
     
//     console.log(emptyObj);

//     let users = [
//   {
//     name: 'John',
//     age: 30,
//   },
//   {
//     name: 'Josh',
//     age: 35,
//   },
//   {
//     name: 'Mark',
//     age: 15,
//   },
//   {
//     name: 'Tony',
//     age: 22,
//   },
//   {
//     name: 'Bob',
//     age: 21,
//   },
//   {
//     name: 'Anna',
//     age: 19,
//   },
// ]
// const emptyObj = []
// for (let user of users) {
  
 
//     if (user.age >= 21) {
        
//        emptyObj.push(user)
    
//       }
//     }
    
    
      
//     console.log(emptyObj);

// const  userObj = {
//   name: "Alex",
//   surname: "Green",
//   number: "sdfsdf",
//   projects: {
//     todoList: "javascript",
//     blog: "react",
//     eshop: {
//       stack: "react + redux",
//       team: {
//         backend: "Alex",
//         frontEnd: "Jone",
//         QA: "Oleg"
//       }
//     }
//   }
// }

// const arr = ['23', '234234', '2342sfdfsd34']
// const newArr = arr.map((el, ind, arr) => {
//   console.log(el)
//   console.log(ind)
//   return el.length
  
// })
// const words = ['wrfwef', 'sdfsdf', 'sdfsdfsd', 'sdfsdfds', 'sdfsdf']
// let Letters1 = words.map(word => word.charAt(0));
// console.log(Letters1);

// let Letters = words.map(el => el.toUpperCase());
// console.log(Letters);
// let letters = words.filter(el => el.length > 7);
// console.log(letters);

// const arrNumber = [3, 4, 5, 6, 7, 8, 9]
// let num = arrNumber.filter ((el) => el % 2 === 1);
// console.log(num);
// const names = ['ann', 'vlad', 'ivan', 'alex', 'sergey', 'anahit', 'mark', 'oleg']
// const names1 = names.filter(name => name.charAt(0).toLowerCase() === 'a');

// console.log(names1);

// const arrNumber = [3, 4, 5, 6, 7, 8, 9]
// const arrForEach = arrNumber.forEach((el) => el +1)
// console.log(arrNumber)

// const arrMap = arrNumber.map((el) => el +1)
// console.log(arrMap)

// const people = [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 40 },
//   ]

//   const allAges = people.map((person) =>  person.age ) 
//   console.log(allAges)

const cartItems = [
    { name: 'Apple', price: 120, quantity: 3 },
    { name: 'Banana', price: 50, quantity: 5 },
    { name: 'Orange', price: 6, quantity: 2 },
    { name: 'PineApple', price: 2, quantity: 2 },
    { name: 'Coconut', price: 90, quantity: 2 },
    { name: 'Peach', price: 45, quantity: 2 },
]

//     <div>
// <h1>Apple</h1>
// <p>120</p> <span>3</span>
// </div>
//   отобразить в браузере
// =====================================
//   const cartItems1 = cartItems.map((el) => ({...el, discount: 60}))
//   const cartItems2 = cartItems.map((el) => ({...el, totalPrice: el.price * el.quantity}))
   
//   console.log(cartItems2)

// const filterIt = cartItems.filter((el) => el.price < 60 && el.price > 40)
   
// console.log(filterIt)

// const items = ['Apples', 'Bananas', 'Oranges', 'Grape']

// const items1 = items.map((el) => `<li>${el}</li>`)
// console.log(items1)
