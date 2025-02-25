'use client';

import React, { useState } from 'react';
import { Funnel } from '@/app/types/blocks';
import DeviceRadioGroup from './DeviceRadioGroup';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { convertTitleToSlug } from '@/app/utils';
function MobilePreview({ funnelData }: { funnelData: Funnel | null }) {
	const [screenSize, setScreenSize] = useState<'small' | 'medium' | 'large'>(
		'medium'
	);

	const getDeviceWidth = () => {
		switch (screenSize) {
			case 'small':
				return 'w-[375px] h-[600px]';
			case 'medium':
				return 'w-[540] h-[600px]';
			case 'large':
				return 'w-[768px] h-[600px]';
			default:
				return 'w-[375px] h-[600px]';
		}
	};

	return (
		<div>
			<DeviceRadioGroup screenSize={screenSize} setScreenSize={setScreenSize} />
			<div className="flex flex-row items-center justify-center rounded-lg">
				<div
					className={`${getDeviceWidth()} transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-lg`}
				>
					{funnelData && (
						<div
							className="w-full h-full rounded-lg"
							style={{ backgroundColor: funnelData.bgColor }}
						>
							<div className="flex flex-row items-center justify-between w-full h-8 bg-gray-400 px-2 rounded-t-lg">
								<div className="flex flex-row gap-1 items-center">
									<div className="w-3 h-3 bg-red-500 rounded-full"></div>
									<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
									<div className="w-3 h-3 bg-green-500 rounded-full"></div>
								</div>
								<div className="flex items-center justify-center w-3/4 h-3/4 bg-gray-200 rounded-full">
									{`www.${convertTitleToSlug(funnelData.name)}.com`}
								</div>
								<div className="flex items-center justify-center hover:bg-gray-200 rounded-full p-1">
									<PlusIcon className="w-4 h-4" />
								</div>
							</div>
							{funnelData.pages.map((page) => (
								<div key={page.id}>
									{page.blocks.map((block) => (
										<div key={block.id}>{block.text}</div>
									))}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default MobilePreview;
