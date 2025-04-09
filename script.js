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
    } else if((days > 0 )&& (days <= 30)){
        // Se o número de dias está no intervalo
        // Aplicará a cor no dia correspondente
        // abaixo estão variáveis de bloco
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

    for (let i = 0; i < elementos.length; i++) {
        var estilo = window.getComputedStyle(elementos[i]);

        // Obtém a cor de fundo atual da célula
        var corEstilo = estilo.backgroundColor;
        
        if(corEstilo === "rgb(0, 0, 255)" || corEstilo === "lightblue"){
            contadorAzul++;
        } else if(corEstilo === "rgb(0, 128, 0)" || corEstilo === "lightgreen"){
            contadorVerde++;
        } else if(corEstilo === "rgb(255, 0, 255)" || corEstilo === "lightpink"){
            contadorRosa++;
        } else if(corEstilo === "rgb(128, 0, 128)" || corEstilo === "plum"){            
            contadorRoxo++;
        }
    }
}