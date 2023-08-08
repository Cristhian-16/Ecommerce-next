import { Button } from '@nextui-org/react';
import { TipoProductos } from '../hooks/useSelect';

interface Props {
	onSelect: (select: TipoProductos) => void;
}

export const TipoProducto = ({ onSelect }: Props) => {
	return (
		<div className='hidden md:block md:col-span-2 text-white'>
			<h2 className='text-gray-500 cursor-none text-[12px]'>Productos</h2>

			{/* Listar Filtro */}
			<div className='mt-5 flex flex-col items-start justify-start gap-2'>
				<Button
					onClick={() => onSelect('All')}
					className='text-white flex items-center justify-start focus:ring-1 focus:ring-blue-500'
				>
					All
				</Button>
				<Button
					onClick={() => onSelect('Polo')}
					className='text-white flex items-center justify-start focus:ring-1 focus:ring-blue-500'
				>
					Polo
				</Button>
				<Button
					onClick={() => onSelect('Hoddie')}
					className='text-white flex items-center justify-start focus:ring-1 focus:ring-blue-500'
				>
					Hoddie
				</Button>
				<Button
					onClick={() => onSelect('Casaca')}
					className='text-white flex items-center justify-start focus:ring-1 focus:ring-blue-500'
				>
					Casaca
				</Button>
			</div>
		</div>
	);
};
