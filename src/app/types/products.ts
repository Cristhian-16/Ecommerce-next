export interface ProductInterface {
	productos: Producto[];
}

export interface Producto {
	id: string;
	title: string;
	tipo: string;
	price: number;
	talla?: string;
	cantidad?: number;
}
