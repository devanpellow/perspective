import { TextBlock as TextBlockType } from '@/app/types/blocks';
import React from 'react';

function TextBlock({
	block,
}: {
	block: TextBlockType;
}) {
	const { text, color, align } = block;

	return (
		<div className={`text-${align}`}>
			<p className="text-3xl font-extrabold" style={{ color: color }}>
				{text}
			</p>
		</div>
	);
}

export default TextBlock;
