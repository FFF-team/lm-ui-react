import 'colors';
import { exec } from '../exec';
import fsp from 'fs-promise';
import { srcRoot, distRoot } from '../constants';
import buildBabel from '../buildBabel';

export default function BuildDistributable() {
  	console.log('Building: '.cyan + 'dist'.green);

  	return exec(`rimraf ${distRoot}`)
    .then(() => Promise.all([
      	exec(`webpack`),
        exec(`webpack -p`)
    ]))
    .then(() => console.log('Built: '.cyan + 'dist'.green))

}
