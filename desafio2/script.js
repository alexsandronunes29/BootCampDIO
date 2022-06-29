function calculaIntervalo(A,B){
    const primeiro=A;
    const segundo=B;
    total=0;
   while (A<0){
        console.log("ERRO.Escolha um numero positivo");
        
    }
    total=(B-A + 1) *((A+B)/2);
    console.log(total);
}

calculaIntervalo(1,1000);