 window.addEventListener('load',function(){
        document.querySelector('#btn').addEventListener('click', function(){
            calculatabuada();
        });
 });

  function calculatabuada(){

    var numero = document.querySelector('#numero').value;
    var contador= 0; 
    var tabuada= '';

    //do{
    //    tabuada += numero * contador;
    //    contador++;
    //}while(contador<=10)

    for (tabuada='';contador<=10;contador++){
        tabuada += numero * contador;
    }

    var ObjDiv= document.querySelector('#resultado');

    ObjDiv.innerHTML = tabuada;

}