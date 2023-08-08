'use client';

import { FlechaAbajo } from '@/components';
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@nextui-org/react';
import { TipoProductos } from '../hooks/useSelect';

interface Props {
	onSelect: (select: TipoProductos) => void;
}

export const Select = ({ onSelect }: Props) => {
	return (
		<div className='mx-4 md:hidden text-white'>
			<Dropdown className='w-[360px] bg-[#171717] shadow-md border border-gray-200 md:hidden'>
				<DropdownTrigger aria-controls='radix-:R2rb9cq:'>
					<div className='border border-gray-500 px-3 py-2 rounded-md flex justify-between items-center'>
						<h2>Selecciona un Filtro</h2>
						<FlechaAbajo />
					</div>
				</DropdownTrigger>
				<DropdownMenu variant='faded' className='text-white md:hidden'>
					<DropdownItem
						onClick={() => onSelect('All')}
						className='w-full'
						key='all'
					>
						All
					</DropdownItem>
					<DropdownItem
						onClick={() => onSelect('Polo')}
						className='w-full'
						key='polos'
					>
						Polo
					</DropdownItem>
					<DropdownItem
						onClick={() => onSelect('Hoddie')}
						className='w-full'
						key='pantalones'
					>
						Hoddie
					</DropdownItem>
					<DropdownItem
						onClick={() => onSelect('Casaca')}
						className='w-full'
						key='pantalones'
					>
						Casaca
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};
