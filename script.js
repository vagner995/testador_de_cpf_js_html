console.log('teste');

function validaCPF (cpf) {
    console.log(cpf.length)

    if (cpf.length != 11) {
        return false;
    }

    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9, 11);
    console.log( numeros);
    console.log( digitos);

    var soma = 0;
    for( i=0; i<9; i++) {
        soma += numeros[i] * (10-i);
    };

    var digitoVerificador1 = soma%11%10;
 
    numeros = numeros + String(digitoVerificador1)

    for( i=0, soma=0; i<10; i++) {
        soma += numeros[i] * (i);
    };

    var digitoVerificador2 = soma%11%10;

    if ( digitoVerificador1 == digitos[0] && digitoVerificador2 == digitos[1]){
        return true;
    } else {
        return false;
    }    
}


function validacao() {
    console.log('Iniciando validação CPF');

    var cpf = document.getElementById('cpf_digitado').value;

    console.log(cpf);

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('error').style.display = 'none';
    } else {
        document.getElementById('error').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    }

}