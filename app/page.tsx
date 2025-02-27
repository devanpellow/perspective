'use client';

import { useState } from 'react';
import MobilePreview from './components/mobile-preview';
import { Funnel } from './types/blocks';
import UploadFile from './components/UploadFile';
import Image from 'next/image';
import Navbar from './components/Navbar';

export default function Home() {
	const [funnelData, setFunnelData] = useState<Funnel | null>(null);

	return (
		<div>
			<Navbar />
			<div className="flex flex-col lg:flex-row mt-2 md:mt-6 mx-2 md:mx-10">
				<div className="flex flex-col justify-between lg:w-1/2">
					<div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl text-center lg:text-left font-bold my-4 leading-tight">
							Build your funnel in{' '}
							<span className="text-perspectiveBlue">minutes</span>, not{' '}
							<span className="text-perspectiveRed">hours</span>.
						</h1>
						<p className="text-lg lg:text-2xl text-center lg:text-left">
							Upload your JSON file and we&apos;ll handle the rest.
						</p>
						<UploadFile funnelData={funnelData} setFunnelData={setFunnelData} />
					</div>
					<div className="hidden lg:flex mt-4 flex-row gap-4 items-center pb-8">
						<Image
							src="/assets/logo.png"
							alt="Perspective Logo"
							width={50}
							height={50}
						/>
						<a
							href="https://perspective.co"
							className="text-lg hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn how Perspective can take your business to the next level.
						</a>
					</div>
				</div>
				<div className="lg:w-1/2">
					<MobilePreview funnelData={funnelData} />
				</div>
			</div>
		</div>
	);
}
