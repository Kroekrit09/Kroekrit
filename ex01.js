let values1=['Apple',1,false];
let values2=['Fries',2,true];
let values3=['Mars',9, 'Apple'];

let commanValues = values1.concat(values2,values3).filter((val,index,arr) => {
    return arr.includes(val);
});

console.log("add common element",commanValues);