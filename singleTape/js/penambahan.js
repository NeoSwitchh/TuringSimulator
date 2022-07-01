//public
let input;
let inputArr;

function selain10c(item){
    if (item != 0 || item != 1 || item != 'C'){
        document.getElementById("output").value = "INVALID";
        return "invalid";
    }
}
function main() {
    input = document.getElementById("input").value;
    inputArr = Array.from(input);
    
    //Cek invalid input
    inputArr.forEach(selain10c);
    function selain10c(item){
        if (item != 0 || item != 1 || item != 'C'){
            document.getElementById("output").value = "INVALID";
            inputArr = [];
        }
    }
    if (inputArr.length==0) {
        return 0;
    }

    // //logic
    // let z=0;
    // //q0 until C
    // while (inputArr[z]==0 || inputArr[z]==1){
    //     z++;
    // }
    // //q1
    // z=z+1;
    // if (inputArr[z]==0){
        
    // }else{

    // }
}