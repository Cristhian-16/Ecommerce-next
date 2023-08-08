'use client';

import { Card } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

export const Links = () => {
	return (
		<>
			<Card className='relative md:col-span-4 md:row-span-2 transition-colors duration-300 ease-in-out  hover:ring-2 hover:ring-blue-600'>
				<Link
					href={'/search/polo-1'}
					className='w-full h-full flex justify-center items-center  '
				>
					<Image
						src={'/polo-1.jpg'}
						alt='Polo 1'
						width={500}
						height={500}
						className='transition-all duration-300 ease-in-out hover:scale-105 md:hover:scale-125'
						priority
					/>
				</Link>
				<div className='absolute bottom-5 left-5 rounded-md cursor-default bg-blue-600'>
					<div className='flex gap-3 py-2  text-white px-2'>
						<h1>Polo Negro</h1>
						<div className='bg-white text-black px-2 rounded-lg'>
							<p className='font-bold text-blue-700'>$ 20.99</p>
						</div>
					</div>
				</div>
			</Card>
			<Card className='relative md:col-span-2 md:row-span-1 transition-colors duration-300 ease-in-out  hover:ring-2 hover:ring-blue-600'>
				<Link
					href='/search/hoddie-1'
					className='w-full h-full flex justify-center items-center  '
				>
					<Image
						src={'/hoddie-1.jpg'}
						alt='Hoddie'
						width={500}
						height={500}
						className='transition-all duration-300 ease-in-out hover:scale-110'
						priority
					/>
				</Link>
				<div className='absolute bottom-5 left-5 rounded-md cursor-default bg-blue-600'>
					<div className='flex gap-3 py-2  text-white px-2'>
						<h1>Hoddie</h1>
						<div className='bg-white text-black px-2 rounded-lg'>
							<p className='font-bold text-blue-700'>$ 35.99</p>
						</div>
					</div>
				</div>
			</Card>
			<Card className='relative md:col-span-2 md:row-span-1 transition-colors duration-300 ease-in-out  hover:ring-2 hover:ring-blue-600'>
				<Link
					href={'/search/cuero-11'}
					className='w-full h-full flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 '
				>
					<Image
						src={'/cuero-11.jpg'}
						alt='Casaca Cuero'
						width={500}
						height={500}
						priority
					/>
				</Link>
				<div className='absolute bottom-5 left-5 rounded-md cursor-default bg-blue-600'>
					<div className='flex gap-3 py-2  text-white px-2'>
						<h1>Casaca</h1>
						<div className='bg-white text-black px-2 rounded-lg'>
							<p className='font-bold text-blue-700'>$ 245.99</p>
						</div>
					</div>
				</div>
			</Card>
		</>
	);
};
