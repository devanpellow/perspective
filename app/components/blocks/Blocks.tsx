import { Block } from '@/app/types/blocks';
import React from 'react';
import TextBlock from './TextBlock';
import ImageBlock from './ImageBlock';
import ButtonBlock from './ButtonBlock';
import ListBlock from './ListBlock';
import BlockWrapper from './BlockWrapper';

function Blocks({ block }: { block: Block }) {
	switch (block.type) {
		case 'text':
			return (
				<BlockWrapper>
					<TextBlock block={block} />
				</BlockWrapper>
			);
		case 'image':
			return (
				<BlockWrapper>
					<ImageBlock block={block} />
				</BlockWrapper>
			);
		case 'button':
			return (
				<BlockWrapper>
					<ButtonBlock block={block} />
				</BlockWrapper>
			);
		case 'list':
			return (
				<BlockWrapper>
					<ListBlock block={block} />
				</BlockWrapper>
			);
		default:
			return null;
	}
}

export default Blocks;
