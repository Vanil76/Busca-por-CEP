function buscaCep(parametro){
    if(parametro.length == 8){
        let cep = new XMLHttpRequest()
        cep.open('GET', 'https://viacep.com.br/ws/' +  parametro  +    '/json/unicode/')    
        cep.onreadystatechange = () => {        
            if(cep.readyState == 4 && cep.status == 200){           
                let objetoJson = JSON.parse(cep.responseText)
                if(document.getElementById('rua').value = objetoJson.logradouro == undefined){
                    document.getElementById('rua').value = ''
                    alert('CEP inválido')
                } else {
                    document.getElementById('rua').value = objetoJson.logradouro
                    document.getElementById('bairro').value = objetoJson.bairro
                    document.getElementById('localidade').value = objetoJson.localidade
                    document.getElementById('uf').value = objetoJson.uf
                }             
            }
        }
        cep.send()
    } else {
        alert('Por favor, digite o cep corretamente')
    }
}

function atualizar(){
    location.reload()
}