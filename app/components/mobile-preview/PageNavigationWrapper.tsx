import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function PageNavigationWrapper({
	children,
	canGoBack,
	canGoForward,
	setPageIndex,
	pageIndex,
}: {
	children: React.ReactNode;
	canGoBack: boolean;
	canGoForward: boolean;
	setPageIndex: (pageIndex: number) => void;
	pageIndex: number;
}) {
	return (
		<>
			<div
				className={`flex flex-row items-center justify-center w-10 h-10 rounded-full bg-gray-200 mr-4 shadow-sm ${
					canGoBack
						? 'opacity-100 cursor-pointer hover:bg-gray-300 hover:scale-110 transition-all duration-300 ease-in-out'
						: 'opacity-50'
				}`}
				onClick={() => {
					if (canGoBack) {
						setPageIndex(pageIndex - 1);
					}
					return;
				}}
			>
				<ChevronLeftIcon className="w-6 h-6" />
			</div>
			{children}
			<div
				className={`flex flex-row items-center justify-center w-10 h-10 rounded-full bg-gray-200 ml-4  shadow-sm ${
					canGoForward
						? 'opacity-100 cursor-pointer hover:bg-gray-300 hover:scale-110 transition-all duration-300 ease-in-out'
						: 'opacity-50'
				}`}
				onClick={() => {
					if (canGoForward) {
						setPageIndex(pageIndex + 1);
					}
					return;
				}}
			>
				<ChevronRightIcon className="w-6 h-6" />
			</div>
		</>
	);
}

export default PageNavigationWrapper;
