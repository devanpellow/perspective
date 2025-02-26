export interface Funnel {
	name: string;
	bgColor: string;
	pages: Page[];
}

export interface Page {
	id: string;
	blocks: Block[];
}

export type Block = TextBlock | ImageBlock | ButtonBlock | ListBlock;

export interface TextBlock {
	id: string;
	type: 'text';
	text: string;
	color: string;
	align: 'left' | 'center' | 'right';
}

export interface ImageBlock {
	id: string;
	type: 'image';
	alt?: string;
	src: string;
}

export interface ButtonBlock {
	id: string;
	type: 'button';
	text: string;
	color: string;
	bgColor: string;
}

export interface ListBlock {
	id: string;
	type: 'list';
	items: ListItem[];
}

export interface ListItem {
	id: string;
	title: string;
	description: string;
	src: string;
}
