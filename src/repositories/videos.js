import config from '../config';

const VIDEOS_URL = `${config.BASE_URL}/videos`

function create(video) {
    console.log(VIDEOS_URL);
    return fetch({VIDEOS_URL}, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(video),
    });
}

export default {
    create,
};