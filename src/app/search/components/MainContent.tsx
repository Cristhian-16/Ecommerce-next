'use client';

import { useAppSelector } from '@/app/types';
import { Cards, TipoProducto } from '.';
import { User } from '@nextui-org/react';
import { TipoProductos } from '../hooks/useSelect';

interface Props {
	select: TipoProductos;
	onSelect: (select: TipoProductos) => void;
}

export const MainContent = ({ select, onSelect }: Props) => {
	const { producto } = useAppSelector((state) => state.storeShop);

	const filtroProduct = producto.filter((prd) => {
		if (select === 'All') {
			return true;
		}

		if (select !== prd.tipo) {
			return false;
		}

		return true;
	});

	return (
		<main className='mx-auto pt-5 px-3 md:grid md:grid-cols-12 gap-2 md:max-w-4xl lg:max-w-7xl xl:max-w-[1500px]'>
			<TipoProducto onSelect={onSelect} />
			<Cards producto={filtroProduct} />
			<div className='hidden mx-3 md:block md:col-span-2 text-white'>
				<User
					name='Cristhian'
					description='CR STORE'
					avatarProps={{
						src: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
					}}
				/>
			</div>
		</main>
	);
};
