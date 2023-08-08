'use client';

import { Producto } from '@/app/types';
import { Card } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	prd: Producto;
}

export const CardItem = ({ prd }: Props) => {
	return (
		<Link
			href={`/search/${prd.id}`}
			key={prd.id}
			className='relative bg-white cursor-pointer hover:ring-2 hover:ring-blue-500 overflow-hidden rounded-xl flex  items-center justify-center'
		>
			<Card
				className='hover:scale-110 transition-all duration-250 ease-in-out'
				radius='md'
			>
				<Image
					src={`/${prd.id}.jpg`}
					alt='Polo'
					width={500}
					height={500}
					priority
				/>
			</Card>
			<div className='absolute bottom-5 left-5 rounded-md cursor-default bg-blue-600'>
				<div className='flex gap-3 py-2  text-white px-2'>
					<h1>{prd.title}</h1>
					<div className='bg-white text-black px-2 rounded-lg flex items-center justify-center'>
						<p className='font-bold text-blue-700'>${prd.price}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};
