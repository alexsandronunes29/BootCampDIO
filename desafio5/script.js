function matchesPartidas(n){
   // let linhas= gets().split("\n");
    //var numMatches=/parseInt(linhas.shift);
    let num= n;//parseInt(linhas.shift());
    let totalMatches=0;

    while(num>1){
        if(num % 2==0){
            totalMatches+= num/2;
            num-=num/2
        }else{
            totalMatches+=(num-1)/2;
            num-=(num-1)/2
        }
        
        
    }console.log(totalMatches);
}

matchesPartidas(7);
