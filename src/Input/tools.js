import * as _ from 'lodash';

/*
 *
 *
 */
export const getOtherPorps = (allProps, omitMap) => {

	const props = Object.assign({}, allProps);
	const otherProps = _.omit(allProps, omitMap);
	return otherProps;

}

export const isEmptyObj = (obj) => {

	if (!Object.keys) { 
		console.warn('you client don`t support Object.keys');
		return 
	}

	return Object.keys(obj).length === 0;

}