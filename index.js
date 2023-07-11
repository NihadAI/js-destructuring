//task1
const clients1 = ["Gilbert", "Salvatore", "Pierce", "Summers", "Forbes", "Donovan", "Bennett"];
const clients2 = ["Pierce", "Zaltzman", "Salvatore", "Michaelson"];
const merged = Array.from(new Set([...clients1, ...clients2]));

console.log(merged);

//task2
const characters = [
    {
      name: "Elena",
      lastName: "Gilbert",
      age: 17,
      gender: "woman",
      status: "human"
    },
    {
      name: "Caroline",
      lastName: "Forbes",
      age: 17,
      gender: "woman",
      status: "human"
    },
    {
      name: "Alaric",
      lastName: "Saltzman",
      age: 31,
      gender: "man",
      status: "human"
    },
    {
      name: "Damon",
      lastName: "Salvatore",
      age: 156,
      gender: "man",
      status: "vampire"
    },
    {
      name: "Rebekah",
      lastName: "Mikaelson",
      age: 1089,
      gender: "woman",
      status: "vampire"
    },
    {
      name: "Klaus",
      lastName: "Mikaelson",
      age: 1093,
      gender: "man",
      status: "vampire"
    }
  ];
  
  const characterInfo = characters.map(({ name, lastName, age }) => ({
    name,
    surname: lastName,
    age
  }));
  
  console.log(characterInfo);
  
//task3
const user1 = {
    name: "John",
    years: 30
  };
  
  const { name, years: age, isAdmin = false } = user1;
  
  console.log(name);      
  console.log(age);       
  console.log(isAdmin);   
  

  //task4
  const satoshi2020 = {
    name: 'Nick',
    surname: 'Sabo',
    age: 51,
    country: 'Japan',
    birth: '1979-08-21',
    location: {
      lat: 38.869422,
      lng: 139.876632
    }
  };
  
  const satoshi2019 = {
    name: 'Dorian',
    surname: 'Nakamoto',
    age: 44,
    hidden: true,
    country: 'USA',
    wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    browser: 'Chrome'
  };
  
  const satoshi2018 = {
    name: 'Satoshi',
    surname: 'Nakamoto',
    technology: 'Bitcoin',
    country: 'Japan',
    browser: 'Tor',
    birth: '1975-04-05'
  };
  
  const fullProfile = {
    ...satoshi2018,
    ...satoshi2019,
    ...satoshi2020
  };
  
  console.log(fullProfile);

//task5
const books = [{
    name: 'Harry Potter',
    author: 'J.K. Rowling'
  }, {
    name: 'Lord of the rings',
    author: 'J.R.R. Tolkien'
  }, {
    name: 'The witcher',
    author: 'Andrzej Sapkowski'
  }];
  
  const bookToAdd = {
    name: 'Game of thrones',
    author: 'George R. R. Martin'
  };
  
  const updatedBooks = [...books, bookToAdd];
  
  console.log(updatedBooks);

//task6
const employee = {
    name: 'Vitalii',
    surname: 'Klichko'
  };
  
  const updatedEmployee = {
    ...employee,
    age: 30,
    salary: 5000
  };
  
  console.log(updatedEmployee);

//task7
const array = ['value', () => 'showValue'];

const [value, showValue] = array;

console.log(value);
console.log(showValue());
