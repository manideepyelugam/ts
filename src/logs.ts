const logs = (id : string | number):void => {
    if(typeof id === "string"){
        console.log("string")
    }else{
        console.log("number")
    }
}


logs("hello");logs(1)