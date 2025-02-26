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
