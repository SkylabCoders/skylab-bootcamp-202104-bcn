import chalk from 'chalk';
import { port } from '../config/server.js';

export default (app) => app.listen(port, () => console.log(`Server is runing in ${chalk.magentaBright(` localhost:${port}`)}`));
