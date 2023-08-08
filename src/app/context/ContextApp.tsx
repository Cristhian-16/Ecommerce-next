/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useAppDispatch } from '../types';
import { useEffect } from 'react';
import { setProducts } from '../store';

import productos from '../mocks/store.json';

export default function ContextApp({
	children,
}: {
	children: React.ReactNode;
}) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setProducts(productos.productos));
	}, []);

	return <>{children}</>;
}
