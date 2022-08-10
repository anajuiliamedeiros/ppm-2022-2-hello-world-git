document.querySelector('#cliqueAqui').onclick = () => {
    const nome = document.querySelector('#campoNome').value;
    if(nome){
        alert(`Hello Wolrd, ${nome}!`);
    }
    console.log(nome);
}