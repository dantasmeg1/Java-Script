var primeiroValor = parseInt (prompt("Digite o primeiro valor: "))
var segundoValor = parseInt(prompt("Digite o segundo valor: ")) 

var operacao = prompt("Digite : 1 para realizar a Divisão, 2 para realizar a Multiplicação, 3 para realizar a Soma ou 4 para realizar a Subtração : ")

if (operacao == 1){
  var resultado = primeiroValor / segundoValor //calculo
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = "  + resultado + "</h2>") 
   } else if(operacao == 2){
     var resultado = primeiroValor * segundoValor //calculo
      document.write("<h2>" + primeiroValor + " X " + segundoValor + " = "  + resultado + "</h2>") 
        } else if(operacao == 3){
          var resultado = primeiroValor + segundoValor //calculo
          document.write("<h2>" + primeiroValor + " + " + segundoValor + " = "  + resultado + "</h2>") 
              } else if (operacao == 4){
              var resultado = primeiroValor - segundoValor //calculo
              document.write("<h2>" + primeiroValor + " - " + segundoValor + " = "  + resultado + "</h2>") 
                       }else{
                         document.write ("<h2> Opção Invalida </h2>")
                           }
    
 


