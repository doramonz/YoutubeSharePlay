import { app } from './app.js';
import env from './env.js';

const PORT = process.env.PORT || env.PORT;

app.listen(Number(PORT), () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port` + PORT);
});