'use client';

import { CarritoCart } from '@/components';

export const NoProductCart = () => {
	return (
		<div className='mt-6 flex items-center justify-center'>
			<div className='flex flex-col items-center justify-center'>
				<div>
					<CarritoCart />
				</div>
				<h3 className='text-white'>No hay Productos en el Carrito</h3>
			</div>
		</div>
	);
};
