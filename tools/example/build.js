import { exec } from '../exec';
import { distRoot } from '../constants';

export default function BuildDistributable() {
  	console.log('Building: '.cyan + 'dist'.green);

  	return exec(`rimraf ${distRoot}`)
    .then(() => Promise.all([
      	exec(`webpack -p -e`),
      	exec(`webpack-dev-server --host 0.0.0.0 --colors -e `)
    ]))
    .then(() => console.log('Built: '.cyan + 'dist'.green))

}
