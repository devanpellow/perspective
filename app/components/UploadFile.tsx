'use client';

import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { Funnel } from '../types/blocks';

export default function UploadFile({
	funnelData,
	setFunnelData,
}: {
	funnelData: Funnel | null;
	setFunnelData: (funnel: Funnel | null) => void;
}) {
	const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file && file.type === 'application/json') {
			parseJSON(file);
		} else {
			alert('Please upload a valid JSON file.');
		}
	};

	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		if (file && file.type === 'application/json') {
			parseJSON(file);
		} else {
			alert('Please upload a valid JSON file.');
		}
	};

	const parseJSON = (file: File) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			try {
				const data = JSON.parse(e.target?.result as string);
				setFunnelData(data);
			} catch (err) {
				console.error(err);
				alert('Error parsing JSON file.');
			}
		};
		reader.readAsText(file);
	};

	return (
		<div className="flex flex-col items-center mt-4 lg:mt-12">
			{!funnelData ? (
				<>
					<div
						className="w-full h-32 md:h-52 border-2 border-dashed border-black flex justify-center items-center text-white text-xl font-bold text-center cursor-pointer mb-4 rounded-lg bg-perspectiveYellow/80 hover:bg-perspectiveYellow transition-all duration-300 ease-in-out"
						onClick={() => document?.getElementById('file-input')?.click()}
						onDragOver={(e) => {
							e.preventDefault();
							e.currentTarget.style.borderColor = 'rgb(251, 88, 90)';
						}}
						onDragLeave={(e) => (e.currentTarget.style.borderColor = '#ccc')}
						onDrop={handleDrop}
					>
						<ArrowUpTrayIcon className="size-6 mr-2" />
						Click or Drop JSON File
					</div>
					<input
						type="file"
						id="file-input"
						accept=".json"
						style={{ display: 'none' }}
						onChange={handleFile}
					/>
				</>
			) : (
				<div className="flex flex-col items-center gap-4">
					<button
						className="p-4 bg-perspectiveBlue hover:bg-perspectiveBlue/80 text-white rounded-lg flex flex-row items-center font-extrabold"
						onClick={() => setFunnelData(null)}
					>
						<ArrowUpTrayIcon className="size-6 mr-2" />
						Upload A Different File
					</button>
					<div className="max-w-[300px] h-[200px] lg:max-w-[500px] lg:h-[300px] overflow-auto bg-gray-100 p-4 border border-gray-300 rounded-md whitespace-pre-wrap break-words text-xs md:text-sm">
						<pre>{JSON.stringify(funnelData, null, 4)}</pre>
					</div>
				</div>
			)}
		</div>
	);
}
