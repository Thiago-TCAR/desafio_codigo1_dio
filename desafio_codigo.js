let name = "Thiago"
let nivelXP = 8000
let classificacao = ""

if (nivelXP >= 0 && nivelXP <= 1001) {
    classificacao = "Ferro";
} else if (nivelXP <= 2000) {
    classificacao = "Bronze";
} else if (nivelXP <= 5000) {
    classificacao = "Prata";
} else if (nivelXP <= 7000) {
    classificacao = "Ouro";
} else if (nivelXP <= 8000) {
    classificacao = "Platina";
} else if (nivelXP <= 9000) {
    classificacao = "Ascendente";
} else if (nivelXP <= 10000) {
    classificacao = "Imortal";
} else {
    classificacao = "Radiante";
}

console.log("O herói de nome " + name + " está no nível " + classificacao)