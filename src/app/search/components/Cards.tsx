'use client';

import { Producto } from '@/app/types';
import { CardItem } from '.';

interface Props {
	producto: Producto[];
}

export const Cards = ({ producto }: Props) => {
	return (
		<div className='space-y-2 md:col-span-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-3'>
			{producto.map((prd) => (
				<CardItem key={prd.id} prd={prd} />
			))}
		</div>
	);
};
