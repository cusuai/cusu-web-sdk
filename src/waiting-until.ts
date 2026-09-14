export function formatWaitingWhen(
	iso: string,
	timezone: string | undefined,
	locale: string
): string {
	const date = new Date(iso);
	if (Number.isNaN(date.getTime())) {
		return '';
	}
	const zone = timezone || undefined;
	const weekday = new Intl.DateTimeFormat(locale, {
		...(zone ? { timeZone: zone } : {}),
		weekday: 'long'
	}).format(date);
	const time = new Intl.DateTimeFormat(locale, {
		...(zone ? { timeZone: zone } : {}),
		hour: 'numeric',
		minute: '2-digit',
		hourCycle: 'h23'
	})
		.format(date)
		.replace(/^0(\d)/, '$1');
	const language = locale.split('-')[0]?.toLowerCase() ?? 'en';
	if (language === 'cs' || language === 'sk') {
		return `v ${weekday} od ${time}`;
	}
	return `${weekday} ${time}`;
}
