import { ImageBlock as ImageBlockType } from '@/app/types/blocks';
import Image from 'next/image';
import React from 'react';

function ImageBlock({ block }: { block: ImageBlockType }) {
	const { src, alt } = block;

	return (
		<div className="flex items-center justify-center">
			<Image
				className="object-contain"
				src={src}
				alt={alt ?? 'Funnel Image'}
				aria-label={alt ?? 'Funnel Image'}
				width={100}
				height={100}
				loading="lazy"
			/>
		</div>
	);
}

export default ImageBlock;
