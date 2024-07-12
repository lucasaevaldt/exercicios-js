alert('Hello, World!');

function oQueEuSouDoPadre() {
    let meuPai = {
        filho: 'Eu'
    };

    let eu = {
        paiDoPadre: 'Eu'
    };

    if (meuPai.filho === 'Eu' && eu.paiDoPadre === 'Eu') {
        return 'filho';
    } else {
        return 'desconhecido';
    }
}

alert(oQueEuSouDoPadre());