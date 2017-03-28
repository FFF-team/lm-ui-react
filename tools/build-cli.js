import 'colors';
import build from './build';
import lib from './lib/build.js';
import example from './example/build.js';
import { setExecOptions } from './exec';

import yargs from 'yargs';

const argv = yargs
  	.help('h')
  	.option('example', {
    	demand: false,
    	default: false
  	})
  	.option('build', {
    	demand: false,
    	default: false
  	})
  	.option('lib', {
    	demand: false,
    	default: false
  	})
  	.argv;

setExecOptions(argv);

let buildProcess;

if (argv.example) {
	//用于开发模式
	buildProcess = example(argv);

} else if (argv.lib) {
	//单独发布lib目录
	buildProcess = lib(argv);

} else if (argv.build) {
	//发布全部 dist&&lib
	buildProcess = build(argv);

}

buildProcess
    .catch(err => {
        if (err.stack) {
        console.error(err.stack.red);
        } else {
        console.error(err.toString().red);
    }
    process.exit(1);
});
