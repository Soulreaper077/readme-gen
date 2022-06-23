
import axios from 'axios';


// async function sayHi(){
//     // call apis

 
  

// }



// let sayHi = new Promise(function(resolve, reject) {
//     axios.get('https://dog-api.kinduff.com/api/facts')
//     .then(response => {
//         resolve(response)
//       console.log(response);
//     }).catch(function (error) {
//         // handle error
//         reject(error)
//       })
  

//   });

// function sayBye(){
//    console.log('bye')
     
//  }
 

//  sayHi.then(
//     function(value) {
//         console.log('sucess val',value)
//     },
//     function(error) {
//         console.log('failed error',error)
//     },
//   ).then(function(){
//     sayBye();

//   })



async function one(){

    setInterval( async function(){ await console.log("Hello")},3000);
}

function two(){
    console.log('two')



}

await one();
two();




