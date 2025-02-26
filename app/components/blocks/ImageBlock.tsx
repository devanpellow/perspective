import { ImageBlock as ImageBlockType } from '@/app/types/blocks';
import Image from 'next/image';
import React from 'react';

function ImageBlock({ block }: { block: ImageBlockType }) {
	const { src, alt } = block;

	return (
		<div className="flex items-center justify-center">
			<Image
				className="object-contain rounded-lg shadow-lg"
				src={src}
				alt={alt ?? 'Funnel Image'}
				aria-label={alt ?? 'Funnel Image'}
				width={200}
				height={200}
				loading="lazy"
			/>
		</div>
	);
}

export default ImageBlock;
