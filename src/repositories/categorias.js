import config from '../config';

const CATEGORIAS_URL = `${config.BASE_URL}/categorias`

function getAllWithVideos() {
    return get('?_embed=videos');
}

function getAll() {
    return get('');
}

function get(path) {
    return fetch(`${CATEGORIAS_URL}${path}`)
        .then(async (resp) => {
            return await resp.json();
        });
}


export default {
    getAllWithVideos,
    getAll,
};