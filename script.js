function colorirDia(){
    // Pegar o valor de campo de dia
    let days = document.getElementById("days").value;

    //  Pegar o valor de campo de cor
    let color = document.getElementById("color").value;

    // Pegar os elementos da tabela
    let table = document.getElementById("calendar");

    // Verificar se o campo de dia foi preenchido
    if(!days){
        alert("Preencha o campo de dia");
    } else if((days > 0 )&& (days <= 30){
        // Se o número de dias está no intervalo
        // Aplicará a cor no dia correspondente

        let td = calendar.getElementsByTagName("td");

        td.style.backgroundColor = color;

    } else {
        alert("Digite um dia entre 1 e 30");
    }

    // Guarda a célula da tabela
    // Prestar atenção nesse trecho para prova
    let elementos = document.querySelectorAll("td");

    // Declara e inicializa o contador
    let contadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorRoxo = 0;
}