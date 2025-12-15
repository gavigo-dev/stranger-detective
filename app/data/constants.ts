export const PLAYERS = {
    BIBLIOTECARIA: {
        id: 0,
        name: 'Bibliotecária',
        color: '#DF932C',
        thumb: '/img/stranger-detective/thumbs/Biblotecaria.png'
    },
    CIENTISTA: {
        id: 1,
        name: 'Cientista',
        color: '#27BF46',
        thumb: '/img/stranger-detective/thumbs/Cientista.png'
    },
    COZINHEIRO: {
        id: 2,
        name: 'Cozinheiro',
        color: '#E2D63F',
        thumb: '/img/stranger-detective/thumbs/Cozinheiro.png'
    },
    INVESTIGADOR: {
        id: 3,
        name: 'Investigador',
        color: '#AF5FB5',
        thumb: '/img/stranger-detective/thumbs/Investigador.png'
    },
    JORNALISTA: {
        id: 4,
        name: 'Jornalista',
        color: '#C23C3C',
        thumb: '/img/stranger-detective/thumbs/Jornalista.png'
    },
    POLICIAL: {
        id: 5,
        name: 'Policial',
        color: '#EBEBEB',
        thumb: '/img/stranger-detective/thumbs/Policial.png'
    },
    PREFEITO: {
        id: 6,
        name: 'Prefeito',
        color: '#4B8EDB',
        thumb: '/img/stranger-detective/thumbs/Prefeito.png'
    },
    PROFESSOR: {
        id: 7,
        name: 'Professor',
        color: '#121212',
        thumb: '/img/stranger-detective/thumbs/Professor.png'
    }
}
export const PLACES = {
    ESCOLA: {
        id: 0,
        name: 'Escola',
        image: '/img/stranger-detective/places/Escola.png'
    },
    PREFEITURA: {
        id: 1,
        name: 'Prefeitura',
        image: '/img/stranger-detective/places/Prefeitura.png'
    },
    JORNAL: {
        id: 2,
        name: 'Jornal',
        image: '/img/stranger-detective/places/Jornal.png'
    },
    LANCHONETE: {
        id: 3,
        name: 'Lanchonete',
        image: '/img/stranger-detective/places/Lanchonete.png'
    },
    LOCADORA: {
        id: 4,
        name: 'Locadora',
        image: '/img/stranger-detective/places/Locadora.png'
    },
    LABORATORIO: {
        id: 5,
        name: 'Laboratório',
        image: '/img/stranger-detective/places/Laboratório.png'
    },
    BIBLIOTECA: {
        id: 6,
        name: 'Biblioteca',
        image: '/img/stranger-detective/places/Biblioteca.png'
    },
    CLUBE: {
        id: 7,
        name: 'Clube',
        image: '/img/stranger-detective/places/Clube.png'
    },
    DELEGACIA: {
        id: 8,
        name: 'Delegacia',
        image: '/img/stranger-detective/places/Delegacia.png'
    },
    FLIPERAMA: {
        id: 9,
        name: 'Fliperama',
        image: '/img/stranger-detective/places/Fliperama.png'
    },
    SHOPPING: {
        id: 10,
        name: 'Shopping',
        image: '/img/stranger-detective/places/Shopping.png'
    }
}
export const WEAPONS = {
    PISTOLA: {
        id: 0,
        name: 'Pistola'
    },
    ESPINGARDA: {
        id: 1,
        name: 'Espingarda'
    },
    TACO_DE_BASEBALL: {
        id: 2,
        name: 'Taco de baseball'
    },
    SOCO_INGLES: {
        id: 3,
        name: 'Sôco inglês'
    },
    PE_DE_CABRA: {
        id: 4,
        name: 'Pé de cabra'
    },
    VENENO: {
        id: 5,
        name: 'Veneno'
    },
    FACA: {
        id: 6,
        name: 'Faca'
    },
    TESOURA: {
        id: 7,
        name: 'Tesoura'
    }
}

export function getAllKeys() {
    const result: Record<string, string> = {}

    ;[...Object.keys(PLAYERS), ...Object.keys(PLACES), ...Object.keys(WEAPONS)].forEach((key) => {
        result[key] = ''
    })

    return result
}
