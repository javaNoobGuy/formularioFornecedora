function buscarDados(){
    const cpf = document.getElementById("cpf").value;
    fetch(`http://localhost:3000/pessoas`,{
        method : 'GET'

    }).then(
        response => response.json()

    ).then(data => {
        const person = data.find(pessoa => pessoa.cpf == Number(cpf))
        console.log(person);

        if(person){
            document.getElementById("nomeUpdate").value = person.nome;
            document.getElementById("idadeUpdate").value = person.idade;
            document.getElementById("cpfUpdate").value = person.cpf;
            document.getElementById("id").value = person.id;
        }else{
            console.log('deu tudo errado!');
        }
    });



}