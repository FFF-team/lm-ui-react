export const isEmptyObj = (obj) => {

	if (!Object.keys) { 
		console.warn('you client don`t support Object.keys');
		return 
	}

	return Object.keys(obj).length === 0;

}