const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
// const users = require('../db/users.js');
const stream = require('getstream');

const app = express();
const port = process.env.PORT || 9002;
const streamClient = stream.connect(
    '7ybe5zzkwqdx',
    'mf5uny5qqcaejk8v2gk9bqu32xnm2nf2bj65n2e8ytrkxx64fn7t6fuujvwxqfbm'
);

const createUser = async () => await streamClient.user('gaia').get();
const user = createUser();

console.log('created user: ', user);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/login', async (req, res) => {
    const response = streamClient.user('gaia').getOrCreate({
        name: req.body.name,
        image: req.body.image,
    });
    console.log('login response: ', response);
    // const token = streamClient.createUserToken(user.id);
    res.status(200).send({});
});

app.get('/series-videos', async (req, res, next) => {
    try {
        const seriesId = req.query.seriesId || '';
        if (!seriesId.length) {
            return res.status(400).send('Please send a valid video series id');
        }
        const nodeData = await axios.get(
            `https://brooklyn.gaia.com/node/${seriesId}`
        );
        const seriesVideosData = await axios.get(
            `https://brooklyn.gaia.com/v2/videos/series/${seriesId}`
        );
        const seriesEpisodeList = seriesVideosData.data.videos;
        const episodeDetailsList = seriesEpisodeList.map((episodeData) => {
            const { title, episode, id } = episodeData;
            return {
                episodeTitle: title,
                episodeNumber: episode,
                episodeId: id,
            };
        });
        const response = {
            seriesHero: nodeData.data.hero_image.hero_1070x400,
            seriesTitle: nodeData.data.title,
            episodeList: episodeDetailsList,
        };
        return res.status(200).send(response);
    } catch (error) {
        if (error.response.status === 404) {
            return res.status(404).send('That video ID does not exist');
        } else {
            return next(error);
        }
    }
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({ error: err });
});

app.listen(port, () =>
    console.log(`Congrats, the server is running.  Serving from port: ${port}`)
);
