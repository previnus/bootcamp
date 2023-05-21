let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
]

const sum = party.reduce((acc , value) => {
    if(value.desert !==  'Apple Pie'){
        return acc + value.calories
    }else{
        return acc
    }
}, 0)


console.log(sum)



const arr = [1, 2, 3, 4, 5];

const sum2 = arr.reduce((acc, curr) => {
    console.log(acc)
    console.log(curr)
  return acc + curr;
}, 0);

console.log(sum2); // Output: 15


