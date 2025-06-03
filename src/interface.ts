interface User {
    name: string;
    age: number;
}

const isLegal = (user: User): boolean => {
    return user.age >= 18;
};

const sayHello = (user: User): void => {
    console.log(`Hello, ${user.name}!`);
};

const user: User = { name: "manideep", age: 22 };

console.log(isLegal(user)); // true
sayHello(user); // Hello, manideep!
