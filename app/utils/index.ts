export const convertTitleToSlug = (title: string) => {
	return title.toLowerCase().replace(/ /g, '-');
};

export const getDeviceWidthStyles = (
	screenSize: 'small' | 'medium' | 'large'
) => {
	switch (screenSize) {
		case 'small':
			return 'w-full md:w-full lg:w-[375px] h-[600px]';
		case 'medium':
			return 'w-full sm:w-2/3 lg:w-[540px] h-[600px]';
		case 'large':
			return 'w-full lg:w-[768px] h-[600px]';
		default:
			return 'w-full sm:w-1/2 lg:w-[375px] h-[600px]';
	}
};

export const getIsDarkBackground = (bgColor: string) => {
	const red = parseInt(bgColor.slice(1, 3), 16);
	const green = parseInt(bgColor.slice(3, 5), 16);
	const blue = parseInt(bgColor.slice(5, 7), 16);
	return red * 0.299 + green * 0.587 + blue * 0.114 > 186;
};
