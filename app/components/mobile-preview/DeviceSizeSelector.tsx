import React from 'react';
import {
	DevicePhoneMobileIcon,
	DeviceTabletIcon,
} from '@heroicons/react/24/outline';

function DeviceSizeSelector({
	screenSize,
	setScreenSize,
}: {
	screenSize: 'small' | 'medium';
	setScreenSize: (size: 'small' | 'medium') => void;
}) {
	return (
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
		</div>
	);
}

export default DeviceSizeSelector;
