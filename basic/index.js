let data = process.argv;
let choice = data[2];
let a = data[3];
let b = data[4];
if(choice=="add"){
    console.log(Number(a)+Number(b))
}
else if(choice=="sub"){
    console.log(a - b);
}
else if(choice=="mul"){
    console.log(a * b);
}
else if(choice=="div"){
    console.log(a / b);
}
else if(choice=="mod"){
    console.log(a % b);
}