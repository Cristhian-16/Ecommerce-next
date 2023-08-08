import { useState } from 'react';

export type TipoProductos = 'Polo' | 'Hoddie' | 'Casaca' | 'All';

export const useSelect = () => {
	const [select, setSelect] = useState<TipoProductos>('All');

	const handleSelect = (select: TipoProductos) => {
		setSelect(select);
	};

	return {
		handleSelect,
		select,
	};
};
