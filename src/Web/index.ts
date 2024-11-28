import { Entrypoint } from './Entrypoint'
import * as dotenv from 'dotenv';

dotenv.config({ path: '/.env' });
Entrypoint.set();
Entrypoint.Instance.boot();

export { Entrypoint }

/*
TODO:
standardize imports and exports
clean up unused files
create enneagream page
and another page for leadership indication
clean up the api calls and create a general api for usage instead
*/