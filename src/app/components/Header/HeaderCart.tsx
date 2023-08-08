'use client';
import { useAppSelector } from '@/app/types';
import { Carrito } from '@/components';
import { Badge } from '@nextui-org/react';

interface Props {
	open: () => void;
	modal: boolean;
}

export const HeaderCart = ({ open, modal }: Props) => {
	const { cart } = useAppSelector((state) => state.storeShop);

	const cantidadTotal = cart.map((c) => c.cantidad!).reduce((a, b) => a + b, 0);

	return (
		<div
			className={`${modal ? 'hidden' : 'block'} md:w-1/3 flex justify-end`}
			onClick={open}
		>
			<Badge content={cart.length === 0 ? '' : `${cantidadTotal}`}>
				<button className='p-3 border border-gray-700 rounded-md'>
					<Carrito />
				</button>
			</Badge>
		</div>
	);
};
