//your JS code here. If required.

let prom=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("Hello, world!");
      },1000);
})

// console.log(prom);

// setTimeout(()=>{
//     console.log(prom);
// },1500);

prom.then((data)=>{
//   console.log(data);
  let div=document.getElementById('output');
   div.innerText=data;

})

