// Closure é o escopo criado quando uma fução é declarada
// Esse escopo permite a função acessar e manipular variaveis externas
// à função

// Contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

// Vai retornar local pois o lugar onde a função foi criada importa