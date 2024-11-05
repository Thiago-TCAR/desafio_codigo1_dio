function calculoRank (vitorias, derrotas){   
    let saldoVitorias = vitorias - derrotas
    let nivel;

    if(saldoVitorias <= 10)
        nivel = "Ferro"

     else if(saldoVitorias >= 11 && saldoVitorias <= 20)
        nivel = "Bronze"

     else if(saldoVitorias >= 21 && saldoVitorias <= 50)
        nivel = "Prata"

     else if(saldoVitorias >= 51 && saldoVitorias <= 80)
        nivel = "Ouro"

     else if(saldoVitorias >= 81 && saldoVitorias <= 90)
        nivel = "Diamante"

     else if(saldoVitorias >= 91 && saldoVitorias <= 100)
        nivel = "Lendario"

     else if(saldoVitorias >= 101)
        nivel = "Imortal"

     return ("O heroi tem de saldo de " + saldoVitorias + " esta no nível de " + nivel)
}

let vitorias = 52
let derrotas = 1

let result = calculoRank(vitorias, derrotas)
console.log(result)