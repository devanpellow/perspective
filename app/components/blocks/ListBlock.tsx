import { ListBlock as ListBlockType } from '@/app/types/blocks';
import Image from 'next/image';
import React from 'react';

function ListBlock({
	block,
	isDarkBackground,
}: {
	block: ListBlockType;
	isDarkBackground: boolean;
}) {
	const { items } = block;

	return (
		<ul className="w-full max-w-2xl space-y-3">
			{items.map((item) => (
				<li
					key={item.id}
					className={`flex flex-row justify-between items-center text-lg py-2 rounded-lg p-4 ${
						isDarkBackground ? 'bg-white' : 'bg-gray-100'
					}`}
				>
					<div className="flex flex-row items-center gap-2">
						<Image src={item.src} alt={item.title} width={20} height={20} />
						<p className="text-lg font-extrabold">{item.title}</p>
					</div>
					<p className="text-sm text-gray-500">{item.description}</p>
				</li>
			))}
		</ul>
	);
}

export default ListBlock;
