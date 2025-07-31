import {server} from './server/Server.js';
import 'dotenv/config'


server.listen(process.env.PORT || 8080, () => {
    console.log(`APP rodando na porta ${process.env.PORT || 8080}. `)
});