const legal= (age : number):boolean => {

    if(age >= 18) {
        return true;
    }
    return false;
}


console.log(legal(20)); // true