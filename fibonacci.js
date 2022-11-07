var n1= i;
let n2 = 1;
let r = 0;

for(var i =0; i < 100; i++){
        
    r= n1+n2;
    n1 = n2;
    n2 = r;

        document.write(r + "<br/>");
        console.log(i);
    }
