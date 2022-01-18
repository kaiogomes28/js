/*
const obj1 = {
  "Name": "Computador",
  "Price": 3000.9,
  "Due Date": "2023-12-28"
}

const obj2 = {
  Name : "Computador",
  Price: 2550.9,
  "Due Date" : "2022_12-28"
}

const obj3 = {
  id: 53,
  date: "2021-10-20",
  items: [
    {
      description: "Celular",
      price: 1499.99,
      quantity: 1
    },
    {
      description: "Mouse",
      price: 100.0,
      quantity: 2
    }
  ],
  client: {
    name: "Maria Red",
    email: "maria@gmail.com",
    active: true
  }
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(obj3.date);
*/

const txt = `{"name": "Computador" , "price": 50.9, "due-date": "2025-04-15"}`;

const obj = JSON.parse(txt);

console.log(obj.price);
console.log(obj.name);

const text = JSON.stringify(obj);