import { ButtonBlock as ButtonBlockType } from '@/app/types/blocks';
import React from 'react';

function ButtonBlock({ block }: { block: ButtonBlockType }) {
	const { text, color, bgColor } = block;

	return (
		<button
			className="rounded-md px-6 py-3 font-bold text-lg transition-all duration-200 hover:opacity-90 hover:scale-105 shadow-md"
			style={{ color, backgroundColor: bgColor }}
		>
			{text}
		</button>
	);
}

export default ButtonBlock;
