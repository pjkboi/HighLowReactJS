import axios from 'axios';

const api = axios.create({
    baseURL: 'https://deckofcardsapi.com/api/deck/'
})

export const createDeckAndDraw = async () => {
    const {data} = await api.get('new/shuffle/', {
        params: {
            deck_count: 1
        }
    })

    console.log({data});
}
