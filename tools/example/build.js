import { exec } from '../exec';
import { distRoot } from '../constants';

export default function BuildDistributable() {
  	console.log('Building: '.cyan + 'dist'.green);

  	return exec(`webpack -e`)
    .then(() => Promise.all([
      	exec(`webpack-dev-server --host 0.0.0.0  --port 8900 --colors -e `),
		console.log('server on port 8900')
    ]))
    .then(() => console.log('Built: '.cyan + 'dist'.green))

}
