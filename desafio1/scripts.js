function desafio(){
    let input =gets();
    let qtdEntradas= parseInt(input);
    let nivelDeEnergia;
    for (let i = 0;i<qtdEntradas;i++){
        input = gets();
        nivelDeEnergia= parseInt(input);
        if (nivelDeEnergia<=8000){
           console.log("Inseto");
        }else{
            console.log("Mais de 8000!");
        }
    }
}

