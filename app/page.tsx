'use client';

import { useState } from 'react';
import MobilePreview from './components/mobile-preview';
import { Funnel } from './types/blocks';
import UploadFile from './components/UploadFile';

export default function Home() {
	const [funnelData, setFunnelData] = useState<Funnel | null>(null);

	return (
		<div className="flex flex-col items-center justify-center mt-10 mx-10">
			<h1 className="text-4xl font-bold my-4">Perspective Funnel Builder</h1>
			<div>
				<p>
					We put the <strong>fun</strong> back into mobile funnels.
				</p>
			</div>
			<div className="flex flex-col gap-4 w-full">
				<MobilePreview funnelData={funnelData} />
				<UploadFile setFunnelData={setFunnelData} />
			</div>
		</div>
	);
}

