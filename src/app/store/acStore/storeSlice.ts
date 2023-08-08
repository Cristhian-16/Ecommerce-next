'use client';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialProps {
	producto: Producto[];
	cart: Producto[];
}

const initialState: InitialProps = {
	producto: [],
	cart: [],
};

import { Producto } from '@/app/types';
export const storeSlice = createSlice({
	name: 'store',
	initialState,
	reducers: {
		setProducts: (state, { payload }: PayloadAction<Producto[]>) => {
			state.producto = payload.map((product) => {
				return {
					...product,
					cantidad: 1,
				};
			});
		},
		addToCart: (state, { payload }: PayloadAction<Producto>) => {
			const exist = state.cart.find((product) => product.id === payload.id);
			if (exist) {
				state.cart = state.cart.map((product) =>
					product.id === payload.id
						? {
								...product,
								cantidad: product.cantidad! + 1,
						  }
						: product,
				);
			} else {
				state.cart.push({ ...payload });
			}
		},
		cancelarCart: (state) => {
			state.cart = [];
		},
	},
});
export const { setProducts, addToCart, cancelarCart } = storeSlice.actions;
