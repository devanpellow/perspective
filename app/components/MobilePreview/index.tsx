'use client';

import React, { useState } from 'react';
import {
	DevicePhoneMobileIcon,
	DeviceTabletIcon,
	ComputerDesktopIcon,
} from '@heroicons/react/24/outline';

function MobilePreview() {
	const [screenSize, setScreenSize] = useState<'small' | 'medium' | 'large'>(
		'medium'
	);

	const getDeviceStyles = () => {
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
			<div
				className="flex flex-row items-center justify-center gap-4 mb-2"
				role="radiogroup"
			>
				<label
					className={`p-2 rounded-lg transition-colors cursor-pointer ${
						screenSize === 'small' ? 'bg-blue-100' : 'hover:bg-gray-100'
					}`}
				>
					<input
						type="radio"
						className="hidden"
						name="screenSize"
						value="small"
						checked={screenSize === 'small'}
						onChange={(e) => setScreenSize(e.target.value as 'small')}
					/>
					<DevicePhoneMobileIcon className="size-6" />
				</label>
				<label
					className={`p-2 rounded-lg transition-colors cursor-pointer ${
						screenSize === 'medium' ? 'bg-blue-100' : 'hover:bg-gray-100'
					}`}
				>
					<input
						type="radio"
						className="hidden"
						name="screenSize"
						value="medium"
						checked={screenSize === 'medium'}
						onChange={(e) => setScreenSize(e.target.value as 'medium')}
					/>
					<DeviceTabletIcon className="size-6" />
				</label>
				<label
					className={`p-2 rounded-lg transition-colors cursor-pointer ${
						screenSize === 'large' ? 'bg-blue-100' : 'hover:bg-gray-100'
					}`}
				>
					<input
						type="radio"
						className="hidden"
						name="screenSize"
						value="large"
						checked={screenSize === 'large'}
						onChange={(e) => setScreenSize(e.target.value as 'large')}
					/>
					<ComputerDesktopIcon className="size-6" />
				</label>
			</div>
			<div className="flex flex-row items-center justify-center">
				<div
					className={`${getDeviceStyles()} transition-all duration-300 ease-in-out bg-gray-100 border border-gray-200 rounded-lg`}
				></div>
			</div>
		</div>
	);
}

export default MobilePreview;
