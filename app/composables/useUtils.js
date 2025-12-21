import { PLAYERS, PLACES, WEAPONS } from '~/data/constants'

const getCategoryItems = (obj) => Object.entries(obj).map(([key, val]) => ({ key, ...val }))

export function useUtils() {
    const players = getCategoryItems(PLAYERS)
    const weapons = getCategoryItems(WEAPONS)
    const places = getCategoryItems(PLACES)

    const tableState = [players, weapons, places].flat().reduce((acc, cur) => {
        acc[cur.key] = ''
        return acc
    }, {})

    return {
        playersArray: players,
        weaponsArray: weapons,
        placesArray: places,
        makeTableState: () => tableState
    }
}
