import 'colors';
import dist from './dist/build';
import lib from './lib/build';
import { distRoot, bowerRoot } from './constants';
import { exec } from './exec';

export default function Build(options) {

  	return Promise.all([

  		lib(),
    	dist()

  	]);
  
}
