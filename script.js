document.querySelector('#cliqueAqui').onclick = () => {
    const nome = document.querySelector('#campoNome').value;
    if(nome){
        alert(`Hello Wolrd, ${nome}!`);
    };
    
};

document.querySelector('#limpar').onclick = () => {
    document.querySelector('#campoNome').value = '';  
};