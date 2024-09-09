//Q1

for(let i=1;i<=25;i++){
    if(i%2===0){
        console.log("even Number: "+i);
        
    }
}


//Q2
for (let i = 1; i <= 10; i++) {
    let square= i*i;
    console.log(`Square: ${i}*${i} =${square}`);
    
}

//Q3
for(let i=1 ; i<=20 ; i++){
    if(i%2!==0){
        console.log("odd Num :"+i);
        
    }
}

//Q4
let a = 0;
let b = 1;

console.log(a); 
console.log(b); 

for(let i=2;i<10;i++){
    let sum=a+b;
    console.log(sum);
    
    a = b;
    b = sum;
    
}


//Q5
for(let i=1 ; i<=3 ; i++){
    for (let n=1;n<=10 ;n++){ 
        console.log(`${i}*${n}=${i*n}`);
        
    }
}
