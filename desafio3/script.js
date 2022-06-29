function papaLegua(){
    let input =gets();
    let qtdEntradas= parseInt(input);
    melhor=999;
    for (let i = 0;i<qtdEntradas;i++){
        input = gets();
        let tempo= parseFloat(input);
        if (tempo<melhor){
           console.log(melhor);
        }
    }
}
