const express = require('express');
const app = express();

const generateRandomWord = () => {
    const words = ['Amor', 'Luna', 'Estrella', 'Cielo', 'Viento'];
    return words[Math.floor(Math.random() * words.length)];
};

const generateRandomArtist = () => {
    const artists = ['Carlos', 'Sofia', 'Luis', 'Maria', 'David'];
    return artists[Math.floor(Math.random() * artists.length)];
};

const generateRandomGenre = () => {
    const genres = ['Pop', 'Rock', 'Reggaeton', 'Jazz', 'Electrónica'];
    return genres[Math.floor(Math.random() * genres.length)];
};

const generateRandomSongTitle = () => {
    const word1 = generateRandomWord();
    const word2 = generateRandomWord();
    return word1 + " " + word2;
};

const songs = [];
for (let i = 0; i < 500; i++) {
    const title = generateRandomSongTitle();
    const artist = generateRandomArtist();
    const genre = generateRandomGenre();
    const song = {
        title: title,
        artist: artist,
        genre: genre
    };
    songs.push(song);
}

app.use(express.static("public"));
app.get("/songs", (req, res) => {
    res.json(songs);
});

app.get("/songs/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.json(songs[id]);
});

app.listen(3000, () => {
    console.log("El servidor está funcionando en el puerto 3000");
});

