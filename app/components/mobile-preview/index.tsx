'use client';

import React, { useState } from 'react';
import { Funnel } from '@/app/types/blocks';
import DeviceRadioGroup from './DeviceRadioGroup';
import UrlBar from './UrlBar';
import ChevronLeftIcon from '@heroicons/react/24/outline/ChevronLeftIcon';
import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon';
import { getDeviceWidthStyles } from '@/app/utils';
import Blocks from '../blocks/Blocks';

function MobilePreview({ funnelData }: { funnelData: Funnel | null }) {
	const [screenSize, setScreenSize] = useState<'small' | 'medium' | 'large'>(
		'medium'
	);

	const [pageIndex, setPageIndex] = useState(0);
	const currentPage = funnelData?.pages[pageIndex];
	const canGoBack = pageIndex > 0;
	const canGoForward = funnelData && pageIndex < funnelData.pages.length - 1;

	return (
		<div className="w-full">
			<DeviceRadioGroup screenSize={screenSize} setScreenSize={setScreenSize} />
			<div className="flex flex-row items-center justify-center rounded-lg">
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

					<div
						className={`${getDeviceWidthStyles(
							screenSize
						)} transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-lg`}
					>
						{funnelData && (
							<div className="flex flex-row w-full h-full">
								<div
									className="w-full h-full rounded-lg"
									style={{ backgroundColor: funnelData.bgColor }}
								>
									<UrlBar title={funnelData.name} />
									{currentPage?.blocks.map((block) => {
										return <Blocks key={block.id} block={block} />;
									})}
								</div>
							</div>
						)}
					</div>

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
			</div>
		</div>
	);
}

export default MobilePreview;
