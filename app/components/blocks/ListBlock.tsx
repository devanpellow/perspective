import { ListBlock as ListBlockType } from '@/app/types/blocks';
import React from 'react';

function ListBlock({ block }: { block: ListBlockType }) {
	const { items } = block;

	return (
		<ul className="w-full max-w-2xl space-y-3">
			{items.map((item) => (
				<li
					key={item.id}
					className="text-lg py-2 border-b border-gray-200 last:border-b-0"
				>
					{item.title}
				</li>
			))}
		</ul>
	);
}

export default ListBlock;
