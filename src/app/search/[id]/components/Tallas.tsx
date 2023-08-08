'use client';

import { Producto } from '@/app/types';
import { Button, Tooltip } from '@nextui-org/react';

export const Tallas = ({ product }: { product: Producto }) => {
	return (
		<div className='my-5 flex flex-row flex-wrap gap-1 sm:justify-center'>
			<Tooltip content='No disponible' className='text-black' color='default'>
				<Button
					color='primary'
					className='text-black border border-gray-700 cursor-not-allowed'
					variant='flat'
				>
					S
				</Button>
			</Tooltip>
			<Button color='primary' className='text-black border border-blue-700'>
				{product.talla}
			</Button>
			<Tooltip content='No disponible' className='text-black' color='default'>
				<Button
					color='primary'
					className='text-black border border-gray-700 cursor-not-allowed'
					variant='flat'
				>
					L
				</Button>
			</Tooltip>
			<Tooltip content='No disponible' className='text-black' color='default'>
				<Button
					color='primary'
					className='text-black border border-gray-700 cursor-not-allowed'
					variant='flat'
				>
					XL
				</Button>
			</Tooltip>
			<Tooltip content='No disponible' className='text-black' color='default'>
				<Button
					color='primary'
					className='text-black border border-gray-700 cursor-not-allowed'
					variant='flat'
				>
					XXL
				</Button>
			</Tooltip>
		</div>
	);
};
