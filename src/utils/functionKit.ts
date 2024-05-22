class FunctionKit {
	/**
	 * Set every requested fields to json fields using a specific key.
	 * @param {object} newItem
	 * @param {object} currentItem
	 * @param {string} jsonKey - The key is used to know how manage the jsonField.
	 * @param {string[]} jsonFields - Array of fields that need to be manage as json in the newItem.
	 */
	public static handleJsonFields(newItem: object, currentItem: object, jsonKey: string, jsonFields: string[]) {
		jsonFields.forEach((jsonField) => {
			if (jsonField in newItem) {
				const currentField = currentItem ? currentItem[jsonField] : null;
				let newValue: string = null;
				if (currentField !== null) {
					if (newItem[jsonField] === '') {
						delete currentField[jsonKey];
					} else {
						currentField[jsonKey] = newItem[jsonField];
					}
					newValue = JSON.stringify(currentField);
				} else if (newItem[jsonField]) {
					const item = {};
					item[jsonKey] = newItem[jsonField];
					newValue = JSON.stringify(item);
				}
				newItem[jsonField] = newValue;
			}
		});
	}

	/**
	 * Returns a formatted i18n as it should be stored in database
	 * @param {string} i18nAttribute - Stored attribute in database
	 * @param {string} lang - Added lang
	 * @return {string} A string of languages delimited by coma
	 */
	public static getFormattedI18nAttribute(i18nAttribute: string, lang: string): string {
		const langs = i18nAttribute.split(',');
		if (langs.includes(lang) === false) {
			langs.push(lang);
		}
		return langs.sort().join(',');
	}

	/**
	 * Set field to NULL if field is empty or json string is empty
	 * @param {object} newItem
	 */
	public static cleanupFields(newItem: object) {
		for (const field in newItem) {
			if (newItem[field] === '' || newItem[field] === '{}') {
				newItem[field] = null;
			}
		}
	}

	/**
	 * getFieldsWithBackupLang with a backup in any lang from config when there are available
	 * @param {object} item Item from db with multilangue field
	 * @param {string} lang default lang for each field
	 * @param {string[]} defaultLangs all langs handled by api
	 * @param {string[]} i18nAttributes multilang field
	 * @return {object}
	 */
	public static getFieldsWithBackupLang(
			item: object, lang: string, defaultLangs: string[], i18nAttributes: string[]
		): object {
			i18nAttributes.forEach((attribute) => {
				if (item[attribute] !== null) {
					if (typeof item[attribute] === 'string') {
						try {
							// Decode json
							item[attribute] = JSON.parse(item[attribute]);
						} catch (e) {
							throw new Error(e);
						}
					}
					if (item[attribute][lang] === undefined) {
						// Get default lang and add span info
						for (const language of defaultLangs) {
							if (item[attribute][language] !== undefined) {
								item[attribute] = `${item[attribute][language]} \<span class='data-table__label'\>${language}\<\/span\>`;
								break;
							}
						}
					} else {
						item[attribute] = item[attribute][lang];
					}
				}
			})
		return item;
	}
}

export { FunctionKit };
