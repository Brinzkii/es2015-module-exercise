function choice(items) {
	let idx = Math.floor(Math.random() * items.length);
	return items[idx];
}

function remove(items, item) {
	const findItem = (i) => i === item;
	let result = items.findIndex(findItem);

	if (result !== -1) {
		items.splice(result, 1);
		return item;
	} else {
		return undefined;
	}
}

export { choice, remove };
