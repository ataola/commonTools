class Util {

	_transformSentence(str, {
		upper,
		lower
	}) {
		if (upper) {
			return str.toUpperCase();
		}

		if (lower) {
			return str.toLowerCase();
		}

		return str;
	}

	sleep(millisecond) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, millisecond);
		});
	}

	sleepNotRecommended(millisecond) {
		let start = Date.now();
		while (Date.now() - start < millisecond) {
			// donothing
			if (Date.now() - start >= millisecond) break;
		}
	}



	formatSentence(str, {
		initials,
		upper,
		lower
	} = {}) {
		if (initials) {
			if (upper) {
				return str.replace(/\b\w+\b/g, function (word) {
					return word.substring(0, 1).toUpperCase() + word.substring(1);
				});
			}

			if (lower) {
				return str.replace(/\b\w+\b/g, function (word) {
					return word.substring(0, 1).toLowerCase() + word.substring(1);
				});
			}
			return str;
		}

		return this._transformSentence(str, {
			upper,
			lower
		});
	}

	valueType(value) {
		// 值类型  Number、String、Boolean、Object、Function、Null
		const type = typeof value;
		if (type === 'object') {
			if (value instanceof Array) return 'array';
			if (value === null) return 'null';
			return 'object';
		}
		return type;
	}

	static createUtil() {
		return new Util();
	}
}

module.exports = Util.createUtil();