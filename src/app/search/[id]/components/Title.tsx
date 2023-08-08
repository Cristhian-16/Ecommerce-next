'use client';

import { Producto } from '@/app/types';
import { Chip } from '@nextui-org/react';

export const Title = ({ product }: { product: Producto }) => {
	return (
		<div>
			<h2 className='text-gray-950 text-5xl font-bold sm:text-center'>
				{product.title}
			</h2>
			<Chip color='primary' className='mt-5'>
				$ {product.price}
			</Chip>
		</div>
	);
};
