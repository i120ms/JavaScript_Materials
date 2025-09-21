// Array : a variable like structure that can hold more than 1 value

        let fruits = ["apple", "orange", "banana", "arbuz"];

        fruits[0] = "coconut"
        fruits[3] = "melon"

    // 1. Metody

        fruits.push("coconut"); // push() Method : Adds one or more elements to the end of an array and returns the new length of the array
        fruits.pop(); // pop() Method : Removes the last element from an array and returns that element
        fruits.unshift("mango"); // unshift() Method : adds the specified elements to the beginning of an array and returns the new length of the array
        fruits.shift(); // shift() Method : removes the first element from an array and returns that removed element. This method changes the length of the array

    // 2. Metoda .length

        let numOfFruits = fruits.length;
        let index = fruits.indexOf("orange");
        console.log(numOfFruits);
        console.log(index);

    // 3. Metoda .sort & .reverse

        fruits.sort().reverse();

    // 4. Pętle

        for(let i = 0; i < fruits.length; i+=2){
            console.log(fruits[i]);
        }

        for(let i = fruits.length - 1; i >= 0; i--){
            console.log(fruits[i]);
        }

        for(let fruit of fruits){
            console.log(fruit);
        }

        console.log(fruits);
        console.log(fruits[0]);
        console.log(fruits[1]);
        console.log(fruits[2]);
        console.log(fruits[3]);
