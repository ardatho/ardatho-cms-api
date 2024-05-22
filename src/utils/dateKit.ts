import * as moment from 'moment';

class DateKit {
	/**
	 * Initiate locales
	 */
	public static init() {
		moment.updateLocale('en', {
			relativeTime: {
				future: 'in %s',
				past: '%s ago',
				s:  '<1m',
				ss: '<1m',
				m:  '1m',
				mm: '%dm',
				h:  '1h',
				hh: '%dh',
				d:  '1d',
				dd: '%dd',
				M:  '1M',
				MM: '%dM',
				y:  '1Y',
				yy: '%dY'
			}
		});

		moment.updateLocale('fr', {
			relativeTime : {
				future : 'dans %s',
				past : 'il y a %s',
				s : '<1m',
				ss: '<1m',
				m : '1m',
				mm : '%dm',
				h : '1h',
				hh : '%dh',
				d : '1j',
				dd : '%dj',
				M : '1 mois',
				MM : '%d mois',
				y : '1 an',
				yy : '%d ans'
			},
		});
	}
	/**
	 * Returns a formatted datetime
	 * @param {Date} datetime - Datetime to format
	 * @param {string} lang - Locale
	 * @param {boolean} withoutSuffix - If true, suffixes like "ago" would not be displayed
	 * @return {string} A formatted datetime
	 */
	public static fromNow(datetime: Date, lang: string, withoutSuffix: boolean): string {
		moment.locale(lang);
		return moment(datetime).fromNow(withoutSuffix);
	}
}

export { DateKit };
