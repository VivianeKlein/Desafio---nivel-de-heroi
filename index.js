let heroi = "Mulher Maravilha"
let exp = 1500
let nivel = ""

if(exp <= 1000) {
    nivel = "Ferro"
} else if(exp > 1000 && exp <= 2000) {
    nivel = "Bronze"
} else if(exp > 2000 && exp <= 4000) {
    nivel = "Prata"
} else if(exp > 4000 && exp <= 6000) {
    nivel = "Ouro"
} else if(exp > 6000 && exp <= 8000) {
    nivel = "Platina"
} else if(exp > 8000 && exp <= 9000) {
    nivel = "Diamante"
} else if(exp > 9000 && exp <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Lendario"
}

console.log("O heroi de nome '" + heroi + "', está no nivel '" + nivel + "'.")