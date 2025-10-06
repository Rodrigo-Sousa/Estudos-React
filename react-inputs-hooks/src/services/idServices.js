// Função que gera Id's aleatórios
import {v4 as uuid} from 'uuid';

export function getNewId(){
    // retornando a função do uuid
    return uuid();
}