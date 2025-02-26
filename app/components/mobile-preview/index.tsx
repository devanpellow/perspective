'use client';

import React, { useState } from 'react';
import { Funnel } from '@/app/types/blocks';
import DeviceSizeSelector from './DeviceSizeSelector';
import UrlBar from './UrlBar';
import { getDeviceWidthStyles } from '@/app/utils';
import Blocks from '../blocks/Blocks';
import PageNavigationWrapper from './PageNavigationWrapper';

function MobilePreview({ funnelData }: { funnelData: Funnel | null }) {
	const [screenSize, setScreenSize] = useState<'small' | 'medium'>('small');

	const [pageIndex, setPageIndex] = useState(0);
	const currentPage = funnelData?.pages[pageIndex];
	const canGoBack = Boolean(funnelData && pageIndex > 0);
	const canGoForward = Boolean(
		funnelData && pageIndex < funnelData.pages.length - 1
	);

	return (
		<div className="w-full mt-4 lg:mt-0 lg:pl-40">
			<DeviceSizeSelector
				screenSize={screenSize}
				setScreenSize={setScreenSize}
			/>
			<div className="flex flex-row items-center justify-center rounded-lg">
				<>
					<PageNavigationWrapper
						canGoBack={canGoBack}
						canGoForward={canGoForward}
						setPageIndex={setPageIndex}
						pageIndex={pageIndex}
					>
						<div
							className={`relative w-[375px] h-[480px] md:h-[680px] rounded-[40px] bg-black shadow-2xl p-3 transition-all duration-300 ease-in-out ${getDeviceWidthStyles(
								screenSize
							)}`}
						>
							<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 md:w-40 h-6 bg-black rounded-b-2xl flex items-center justify-center">
								<div className="w-10 md:w-20 h-1 bg-gray-600 rounded-full" />
							</div>
							<div className="w-full h-full overflow-hidden rounded-[32px] bg-white">
								{funnelData ? (
									<div className="flex flex-row w-full h-full">
										<div className="w-full h-full">
											<UrlBar title={funnelData.name} />
											<div
												className="flex flex-col w-full h-full overflow-y-auto pb-12"
												style={{ backgroundColor: funnelData.bgColor }}
											>
												{currentPage?.blocks.map((block) => {
													return (
														<Blocks
															key={block.id}
															block={block}
															bgColor={funnelData.bgColor}
														/>
													);
												})}
											</div>
										</div>
									</div>
								) : (
									<div className="w-full h-full p-1">
										<video
											className="w-full h-full object-cover"
											loop
											muted
											playsInline
											autoPlay
										>
											<source
												src="https://d2i0bpypg0mkx.cloudfront.net/videos/en/templates/9-product-finder.mp4"
												type="video/mp4"
											/>
										</video>
									</div>
								)}
							</div>
						</div>
					</PageNavigationWrapper>
				</>
			</div>
		</div>
	);
}

export default MobilePreview;
