'use client';

import { Producto } from '@/app/types';
import Image from 'next/image';

export const Images = ({ product }: { product: Producto }) => {
	return (
		<div className='mx-4 py-2 flex items-center justify-center sm:justify-center lg:col-span-6'>
			<Image
				src={`/${product.id}.jpg`}
				alt={product.title}
				width={300}
				height={300}
				className='sm:w-[400px] md:w-[500px] md:h-auto lg:w-[600px] xl:w-[700px] lg:h-auto rounded-md overflow-hidden'
				priority
			/>
		</div>
	);
};
