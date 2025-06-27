let nomeDoheroi= "José";
let xp = 3000;
let nivel = "";
if(isNaN(xp)){
    console.log("A pontuação deve ser um número");    
}else{
    if(xp < 1000){
    nivel="ferro";
    console.log(`O Herói de nome ${nomeDoheroi} pontuação de ${xp} e o nivel é ${nivel}`);
    }else if(xp >= 1001 && xp <= 2000){
        nivel = "Bronze";
    console.log(`O Herói de nome ${nomeDoheroi} pontuação de ${xp} o nivel é ${nivel}`);
    }else if(xp >= 2001 && xp < 5000){
        nivel = "Prata";
    console.log(`O Herói de nome ${nomeDoheroi} pontuação de ${xp} o nivel é ${nivel}`);
    }else if(xp >= 5001 && xp < 7000){
        nivel = "Ouro";
    console.log(`O Herói de nome ${nomeDoheroi} pontuação de ${xp} o nivel é ${nivel}`);
    }else if(xp >= 7001 && xp < 8000){
        nivel = "Platina";
    console.log(`O Herói de nome ${nomeDoheroi} pontuação de ${xp} o nivel é ${nivel}`);
    }else if(xp >= 8001 && xp < 9000){
        nivel = "Ascendente";
    console.log(`O Herói de nome ${nomeDoheroi} pontuação de ${xp} o nivel é ${nivel}`);
    }else if(xp >= 9001 && xp < 10000){
        nivel = "Imortal";
    console.log(`O Herói de nome ${nomeDoheroi} pontuação de ${xp} o nivel é ${nivel}`);
    }else if(xp >= 10001){
        nivel = "Radiante";
    console.log(`O Herói de nome ${nomeDoheroi} pontuação de ${xp} o nivel é ${nivel}`);
}
}