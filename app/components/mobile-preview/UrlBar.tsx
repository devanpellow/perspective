import React from 'react';
import { convertTitleToSlug } from '@/app/utils';
import { PlusIcon } from '@heroicons/react/24/outline';

function UrlBar({ title }: { title: string }) {
	return (
		<div className="hidden md:flex flex-row items-center justify-between w-full pt-6 pb-2 bg-gray-400 px-2 rounded-t-lg">
			<div className="flex flex-row gap-1 items-center">
				<div className="w-3 h-3 bg-red-500 rounded-full"></div>
				<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
				<div className="w-3 h-3 bg-green-500 rounded-full"></div>
			</div>
			<div className="flex items-center justify-center w-3/4 h-1/2 bg-gray-200 rounded-full">
				{`www.${convertTitleToSlug(title)}.com`}
			</div>
			<div className="flex items-center justify-center hover:bg-gray-200 rounded-full p-1">
				<PlusIcon className="w-4 h-4" />
			</div>
		</div>
	);
}

export default UrlBar;
