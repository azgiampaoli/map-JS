
const num = [1,2,3,4,5];

const dois = {
    valor: 2
}
const tres = {
    valor: 10
}


    function divisao(array, thisArgs){
        return array.map(function(item){
            return item / this.valor;
        }, thisArgs);
    }
    



console.log('this -> dois', divisao(num, dois));
console.log('this -> tres', divisao(num, tres));