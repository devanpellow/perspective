'use client';

import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function UploadFile() {
	const [jsonData, setJsonData] = useState(null);

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
				setJsonData(data);
			} catch (err) {
				alert('Error parsing JSON file.');
			}
		};
		reader.readAsText(file);
	};

	return (
		<div className="flex flex-col items-center mt-12">
			{!jsonData ? (
				<>
					<div
						className="w-52 h-32 border-2 border-dashed border-gray-400 flex justify-center items-center text-gray-500 text-center cursor-pointer mb-4 rounded-lg hover:bg-gray-50"
						onClick={() => document?.getElementById('file-input')?.click()}
						onDragOver={(e) => {
							e.preventDefault();
							e.currentTarget.style.borderColor = '#888';
						}}
						onDragLeave={(e) => (e.currentTarget.style.borderColor = '#ccc')}
						onDrop={handleDrop}
					>
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
				<button
					className="p-4 bg-blue-500 text-white rounded-lg flex flex-row items-center font-extrabold"
					onClick={() => setJsonData(null)}
				>
					<ArrowUpTrayIcon className="size-4 mr-2" />
					Upload A Different File
				</button>
			)}

			{jsonData && (
				<div className="w-full max-w-4xl max-h-96 overflow-auto bg-gray-100 p-4 border border-gray-300 rounded-md whitespace-pre-wrap break-words">
					<pre>{JSON.stringify(jsonData, null, 4)}</pre>
				</div>
			)}
		</div>
	);
}
