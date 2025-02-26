'use client';

import { useState } from 'react';
import MobilePreview from './components/mobile-preview';
import { Funnel } from './types/blocks';
import UploadFile from './components/UploadFile';
import Image from 'next/image';
export default function Home() {
	const [funnelData, setFunnelData] = useState<Funnel | null>(null);

	return (
		<div className="flex flex-col md:flex-row mt-10 mx-2 md:mx-10">
			<div className="flex flex-col justify-between">
				<div>
					<div>
						<h1 className="text-6xl font-bold my-4 leading-tight">
							Build your funnel in{' '}
							<span className="text-perspectiveBlue">minutes</span>, not{' '}
							<span className="text-perspectiveRed">hours</span>.
						</h1>
						<p className="text-2xl">
							Upload your JSON file and we&apos;ll handle the rest.
						</p>
					</div>
					<p className="text-xl mt-4"></p>
					<UploadFile funnelData={funnelData} setFunnelData={setFunnelData} />
				</div>
				<div className="mt-4 flex flex-row gap-4 items-center">
					<Image
						src="/assets/logo.png"
						alt="Perspective Logo"
						width={50}
						height={50}
					/>
					<a
						href="https://perspective.co"
						className="text-lg hover:underline "
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn how Perspective can take your business to the next level.
					</a>
				</div>
			</div>
			<MobilePreview funnelData={funnelData} />
		</div>
	);
}
