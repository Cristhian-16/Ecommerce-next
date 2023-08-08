'use client';
import { Carrusel } from '@/app/components';
import { useAppDispatch, useAppSelector } from '@/app/types';
import { Divider } from '@nextui-org/react';
import { Images, Title, Tallas, AddCart } from './components';
import { addToCart } from '@/app/store';

export default function SearchById({ params }: { params: { id: string } }) {
	const dispatch = useAppDispatch();

	const { producto } = useAppSelector((state) => state.storeShop);
	const findProduct = producto.find((prd) => prd.id === params.id);
	if (!findProduct) return <p>No existe ese producto</p>;

	const agregarCarrito = () => {
		dispatch(addToCart(findProduct));
	};

	return (
		<div className='md:max-w-6xl lg:max-w-[1500px] mx-auto '>
			<div className='bg-white mx-5 my-3 rounded-md lg:grid lg:grid-cols-10'>
				<Images product={findProduct} />
				{/* Contenido */}
				<div className=' py-4 sm:py-0 mx-4 lg:col-span-4 lg:flex lg:flex-col lg:justify-center lg:items-center '>
					{/*  */}
					<Title product={findProduct} />
					<Divider className='my-4 bg-gray-700' />
					<div>
						<h3 className='uppercase font-bold'>Size</h3>
						<Tallas product={findProduct} />
					</div>

					<AddCart onCart={agregarCarrito}/>
				</div>
			</div>

			{/* Carrusel */}
			<div className='mt-5'>
				<h1 className='text-white text-[22px] ml-5 md:text-[30px] 2xl:ml-0 font-bold'>
					Related Products
				</h1>
				<Carrusel />
			</div>
		</div>
	);
}
