import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const port = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || port, () => {
    return console.log(`server is listening on ${port}`);
});