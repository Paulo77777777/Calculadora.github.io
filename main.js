function calcular (tipo,valor) {

if (tipo == 'acao') {
  
  if (valor === 'c') { 
    document.getElementById('resultado').value = ''
  }
  
  if(valor === '+'|| valor === '-'|| valor === '*'|| valor === '/' || valor === '+' ){
    
    document.getElementById('resultado').value += valor
  }
  
  if (valor === '=') {
   var valor_campo= eval(document.getElementById('resultado').value)
    
    document.getElementById('resultado').value = valor_campo
    
  }
  
}else if (tipo == 'valor') {

document.getElementById('resultado').value += valor
}

}


/*
var coisas = []
coisas['frutas'] = ['laranja','banana']
coisas['objetos'] = ['celular','colher','chinelo']

coisas['frutas'].push('maça')
coisas['frutas'].unshift('uva')

coisas['objetos'].pop()
coisas['objetos'].shift()

console.log(coisas)

*/
