'use client';
import { cancelarCart } from '@/app/store';
import { Producto, useAppDispatch } from '@/app/types';
import { Button, Card } from '@nextui-org/react';
import Image from 'next/image';
import Swal from 'sweetalert2';

interface Props {
	cart: Producto[];
	close: () => void;
}

export const CardProduct = ({ cart, close }: Props) => {
	const dispatch = useAppDispatch();

	const priceFinal = cart
		.map((c) => c.price * c.cantidad!)
		.reduce((a, b) => a + b, 0);

	const cancelarPage = () => {
		dispatch(cancelarCart());
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Pago Aceptado',
			showConfirmButton: false,
			timer: 1500,
		});
		close();
	};

	return (
		<div className=' flex flex-col gap-2'>
			{cart.map((c) => (
				<Card key={c.id} className='mx-5 flex flex-row gap-4'>
					<Image width={100} height={100} alt={c.title} src={`/${c.id}.jpg`} />
					<div className='pt-5'>
						<h2 className='text-black font-bold'>{c.title}</h2>
						<div className='flex flex-col py-2'>
							<p className='font-semibold'>
								Precio/Unidad :
								<span className='text-blue-700'>$ {c.price}</span>
							</p>
							<p className='font-semibold'>
								Talla : <span className='text-blue-700'>{c.talla}</span>
							</p>
							<p className='font-semibold'>
								Cantidad : <span className='text-blue-700'>{c.cantidad}</span>
							</p>
						</div>
					</div>
				</Card>
			))}
			<div className='text-white mt-5 flex items-center justify-center gap-3'>
				<h4 className='text-3xl font-bold'>Pago Final :</h4>
				<div>
					<p className='text-white'> ${priceFinal.toFixed(2)} </p>
				</div>
			</div>

			<div
				onClick={cancelarPage}
				className='cursor-pointer absolute bottom-5 ml-6  w-[350px] bg-blue-700 text-white  rounded-lg transition-all duration-300 ease-in-out active:scale-90'
			>
				<div className='text-white flex items-center justify-center py-2'>
					Cancelar Pago
				</div>
			</div>
		</div>
	);
};
