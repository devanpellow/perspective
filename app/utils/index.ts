import { Funnel } from '../types/blocks';

export const convertTitleToSlug = (title: string) => {
	return title.toLowerCase().replace(/ /g, '-');
};

export const getDeviceWidthStyles = (screenSize: 'small' | 'medium') => {
	switch (screenSize) {
		case 'small':
			return 'w-[375px] h-[600px]';
		case 'medium':
			return 'w-[540px] h-[600px]';
		default:
			return 'w-[375px] h-[600px]';
	}
};

export const getIsDarkBackground = (bgColor: string) => {
	const red = parseInt(bgColor.slice(1, 3), 16);
	const green = parseInt(bgColor.slice(3, 5), 16);
	const blue = parseInt(bgColor.slice(5, 7), 16);
	return red * 0.299 + green * 0.587 + blue * 0.114 > 186;
};
export const getIsTypeFunnel = (data: unknown): data is Funnel => {
	return (
		typeof data === 'object' &&
		data !== null &&
		'name' in data &&
		'bgColor' in data &&
		'pages' in data
	);
};
