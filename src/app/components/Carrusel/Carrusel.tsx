'use client';

import { useAppSelector } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';

export const Carrusel = () => {
	const { producto } = useAppSelector((state) => state.storeShop);

	return (
		<div className='mt-5  w-full overflow-x-auto pb-6 pt-1'>
			<ul className='flex animate-carousel gap-4'>
				{producto.map((prd) => (
					<Link
						href={`/search/${prd.id}`}
						key={prd.id}
						className='cursor-pointer relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'
					>
						<div className='relative h-full w-full '>
							<div className='flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600  relative border-neutral-200 '>
								<Image
									src={`/${prd.id}.jpg`}
									width={500}
									height={500}
									alt={prd.title}
									priority
									className='relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105'
									style={{
										position: 'absolute',
										height: '100%',
										width: '100%',
										left: 0,
										top: 0,
										right: 0,
										bottom: 0,
										color: 'transparent',
									}}
								/>
							</div>
						</div>
						<div className='absolute bottom-5 left-5 rounded-md cursor-default bg-blue-600'>
							<div className='flex gap-3 py-2  text-white px-2'>
								<h1 className='text-sm'>{prd.title}</h1>
								<div className='bg-white text-black px-2 rounded-lg flex items-center justify-center'>
									<p className='font-bold text-blue-700'>{prd.price}</p>
								</div>
							</div>
						</div>
					</Link>
				))}
			</ul>
		</div>
	);
};
