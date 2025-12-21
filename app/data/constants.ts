export const PLAYERS = {
    BIBLIOTECARIA: {
        id: 0,
        hint: 'Registros mostram que a Bibliotecária estava em outra cidade no horário do crime.',
        name: 'Bibliotecária',
        color: '#DF932C',
        thumb: '/img/stranger-detective/thumbs/Biblotecaria.png'
    },
    CIENTISTA: {
        id: 1,
        hint: 'O Cientista estava participando de um experimento supervisionado durante todo o período.',
        name: 'Cientista',
        color: '#27BF46',
        thumb: '/img/stranger-detective/thumbs/Cientista.png'
    },
    COZINHEIRO: {
        id: 2,
        hint: 'O Cozinheiro estava trabalhando sob vigilância contínua no horário do ocorrido.',
        name: 'Cozinheiro',
        color: '#E2D63F',
        thumb: '/img/stranger-detective/thumbs/Cozinheiro.png'
    },
    INVESTIGADOR: {
        id: 3,
        hint: 'O Investigador estava em outra investigação registrada oficialmente no mesmo horário.',
        name: 'Investigador',
        color: '#AF5FB5',
        thumb: '/img/stranger-detective/thumbs/Investigador.png'
    },
    JORNALISTA: {
        id: 4,
        hint: 'O Jornalista estava ao vivo cobrindo um evento quando o crime aconteceu.',
        name: 'Jornalista',
        color: '#C23C3C',
        thumb: '/img/stranger-detective/thumbs/Jornalista.png'
    },
    POLICIAL: {
        id: 5,
        hint: 'O Policial estava de plantão em uma ocorrência distante do local do crime.',
        name: 'Policial',
        color: '#EBEBEB',
        thumb: '/img/stranger-detective/thumbs/Policial.png'
    },
    PREFEITO: {
        id: 6,
        hint: 'O Prefeito estava em uma reunião oficial registrada por várias testemunhas.',
        name: 'Prefeito',
        color: '#4B8EDB',
        thumb: '/img/stranger-detective/thumbs/Prefeito.png'
    },
    PROFESSOR: {
        id: 7,
        hint: 'O Professor estava dando aula para uma turma inteira no momento do crime.',
        name: 'Professor',
        color: '#121212',
        thumb: '/img/stranger-detective/thumbs/Professor.png'
    }
}
export const PLACES = {
    ESCOLA: {
        id: 0,
        hint: 'A escola estava fechada e sem acesso no horário do crime.',
        name: 'Escola',
        image: '/img/stranger-detective/places/Escola.png'
    },
    PREFEITURA: {
        id: 1,
        hint: 'Câmeras confirmam que não houve movimentação suspeita na prefeitura.',
        name: 'Prefeitura',
        image: '/img/stranger-detective/places/Prefeitura.png'
    },
    JORNAL: {
        id: 2,
        hint: 'O prédio do jornal estava vazio e trancado durante o ocorrido.',
        name: 'Jornal',
        image: '/img/stranger-detective/places/Jornal.png'
    },
    LANCHONETE: {
        id: 3,
        hint: 'A lanchonete estava lotada e sob constante vigilância no horário.',
        name: 'Lanchonete',
        image: '/img/stranger-detective/places/Lanchonete.png'
    },
    LOCADORA: {
        id: 4,
        hint: 'Funcionários confirmam que nada fora do normal ocorreu na locadora.',
        name: 'Locadora',
        image: '/img/stranger-detective/places/Locadora.png'
    },
    LABORATORIO: {
        id: 5,
        hint: 'O laboratório estava lacrado por protocolos de segurança no momento.',
        name: 'Laboratório',
        image: '/img/stranger-detective/places/Laboratório.png'
    },
    BIBLIOTECA: {
        id: 6,
        hint: 'A biblioteca estava em manutenção e sem acesso ao público.',
        name: 'Biblioteca',
        image: '/img/stranger-detective/places/Biblioteca.png'
    },
    CLUBE: {
        id: 7,
        hint: 'O clube estava realizando um evento público com grande circulação.',
        name: 'Clube',
        image: '/img/stranger-detective/places/Clube.png'
    },
    DELEGACIA: {
        id: 8,
        hint: 'Registros indicam que nada aconteceu na delegacia naquele horário.',
        name: 'Delegacia',
        image: '/img/stranger-detective/places/Delegacia.png'
    },
    FLIPERAMA: {
        id: 9,
        hint: 'O fliperama estava fechado para limpeza no dia do crime.',
        name: 'Fliperama',
        image: '/img/stranger-detective/places/Fliperama.png'
    },
    SHOPPING: {
        id: 10,
        hint: 'As câmeras do shopping não registraram qualquer incidente relacionado.',
        name: 'Shopping',
        image: '/img/stranger-detective/places/Shopping.png'
    }
}
export const WEAPONS = {
    PISTOLA: {
        id: 0,
        hint: 'A pistola estava descarregada e guardada em local seguro.',
        name: 'Pistola'
    },
    ESPINGARDA: {
        id: 1,
        hint: 'A espingarda estava desmontada e inutilizável.',
        name: 'Espingarda'
    },
    TACO_DE_BASEBALL: {
        id: 2,
        hint: 'O taco de baseball estava em exposição e não foi utilizado.',
        name: 'Taco de baseball'
    },
    SOCO_INGLES: {
        id: 3,
        hint: 'O sôco inglês apresentava sinais de ferrugem e não foi manuseado.',
        name: 'Sôco inglês'
    },
    PE_DE_CABRA: {
        id: 4,
        hint: 'O pé de cabra estava guardado e coberto de poeira há semanas.',
        name: 'Pé de cabra'
    },
    VENENO: {
        id: 5,
        hint: 'Análises descartaram qualquer traço de veneno na vítima.',
        name: 'Veneno'
    },
    FACA: {
        id: 6,
        hint: 'A faca encontrada não apresentava vestígios relacionados ao crime.',
        name: 'Faca'
    },
    TESOURA: {
        id: 7,
        hint: 'A tesoura estava sem uso e longe da cena do crime.',
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
