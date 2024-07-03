document.getElementById('formulario').addEventListener('submit',function(event){
    event.preventDefault();
    const X = document.getElementById('X').value.split(',').map(Number);
    const Y = document.getElementById('Y').value.split(',').map(Number);
    const ResultX = parseFloat(document.getElementById('ResultX').value);
    const ResultY = parseFloat(document.getElementById('ResultY').value);
    if(X.length !== Y.length || X.length === 0){
        alert('Insira por favor o mesom numero de dados para X e Y')
        return;
    }

    const {A,B} = calculandoregrecao(X,Y)
    const correlacao = calculandoCorrelacao(X,Y)

    const resulX = A * ResultX + B;
    const resultY = (ResultY - B) / A 

    document.getElementById('regrecao').innerHTML = `Regreção linear : y = ${A.toFixed(1)} x + ${B.toFixed(1)}`;
    document.getElementById('resultX').innerHTML = `Resultado de X:  ${resulX.toFixed(2)}`;
    document.getElementById('resultY').innerHTML = `Resultado de Y : ${resultY.toFixed(2)}`;
    document.getElementById('correlacao').innerHTML = `Corelação ${correlacao.toFixed(2)}`;

    document.getElementById('resultado').style.display = 'block';

});
// numerodeelementosXY verifica a quantidade de 
// elementos em X e Y ou seja o tamanho deles
function calculandoregrecao(X,Y){
    const numerodeelementosXY = X.length;
    let somaX = 0, somaY = 0, somaXY = 0, SomaX2 = 0;
    // essas são as variáveis para armazenar as somas que serão calculadas no loop do codigo

    // Loop Regreção

    for (let i = 0; i < numerodeelementosXY; i++){
        somaX += X[i]; // Soma todos os valores de X
        somaY += Y[i]; // Soma todos os valores de Y
        somaXY += X[i] * Y[i]; // Multiplica cada valor de X pelo valor correspondente de Y e depois soma o resultadp
        SomaX2 += X[i] * X[i]; // Calcula o quadrado de cada valor de x e depois soma o resultado


    }

    const A = (numerodeelementosXY * somaXY - somaX * somaY) / (numerodeelementosXY * SomaX2 - somaX * somaX);
    const B = (somaY * SomaX2 - somaX * somaXY) / (numerodeelementosXY * SomaX2 - somaX * somaX);

    return {A,B}


}   


function calculandoCorrelacao(X,Y){
    const numerodeelementosXY = X.length;
    let somaX =0, somaY=0, somaXY = 0, SomaX2 = 0, SomaY2 = 0;
    
    for(let i = 0; i < numerodeelementosXY; i++){
        somaX += X[i]; // Soma todos os valores de X
        somaY += Y[i]; // Soma todos os valores de Y
        somaXY += X[i] * Y[i]; // Multiplica cada valor de X pelo valor correspondente de Y e depois soma o resultadp
        SomaX2 += X[i] * X[i]; // Calcula o quadrado de cada valor de x e depois soma o resultado
        SomaY2 += Y[i] * Y[i]; // Calcula o quadrado de cada valor de x e depois soma o resultado
    }

    const numerador = (numerodeelementosXY * somaXY - somaX *somaY);
    const denominador = Math.sqrt((numerodeelementosXY * SomaX2 - somaX * somaX) * (numerodeelementosXY * SomaY2-somaY * somaY))

    return numerador / denominador;
}





