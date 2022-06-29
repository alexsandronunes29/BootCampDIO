function numberEvens(ar){
    var arr=ar;
    var arra=[];

    for (let i=0;i< arr.length;i++){
        if (arr[i] % 2==0 ){
            arra=arr[i];
            console.log(arra);
        }
    }
}

numberEvens([2,3,5,7,11,18,34]);