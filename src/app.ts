require('dotenv').config();
import { enviroment } from './configuration/environment';
import server from './server/index';

const PORT = enviroment.PORT;

server.listen(PORT, () => console.log(`Server listening at http://lolcalhost:${PORT}`));