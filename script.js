console.log('teste');

function validaCPF () {
    return false;
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