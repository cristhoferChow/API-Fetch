function consultaEnd(){
    let cep = document.querySelector('#cep').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cep.length !== 8){
        alert("CEP inválido!");
        return;
    }

    fetch(url).then(function(response){
        response.json().then(mostrarEnd);
    });

}


function mostrarEnd(dados){
    let resultado = document.querySelector("#resultado");

    if(dados.erro){
        resultado.innerHTML = "Não foi possivel encontrar esse CEP"
    }else{
        resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                               <p>Complemento: ${dados.complemento}</p>
                               <p>Bairro: ${dados.bairro}</p>
                               <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`
    }
}