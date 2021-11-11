import { createStore } from 'redux';

const INITIAL_STATE = {
    nome: '',
    ano: '',
    descricao: '',
    peso: '',
    comprimento: '',
    largura: '',
    altura: '',
    preco: '',
    modelo: '',
    marca: '',
    opcoes: [false, false, false, false]
}

function addText(state = INITIAL_STATE, action) {
    console.log(action.opcoes)
    switch (action.type) {
        case 'UPDATE_NOME':
            return action.nome;
        case 'UPDATE_ANO':
            return action.ano;
        case 'UPDATE_DESCRICAO':
            return action.descricao;
        case 'UPDATE_PESO':
            return action.peso;
        case 'UPDATE_COMPRIMENTO':
            return action.comprimento;
        case 'UPDATE_LARGURA':
            return action.largura;
        case 'UPDATE_ALTURA':
            return action.altura;
        case 'UPDATE_PRECO':
            return action.preco;
        case 'UPDATE_MODELO':
            return action.modelo;
        case 'UPDATE_MARCA':
            return action.marca;
        case 'UPDATE_OPCOES':
            return action.opcoes;
        default:
            return state;    
    }
}


const Store = createStore(addText);

export default Store;