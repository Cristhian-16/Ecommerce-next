import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from './providers';
import { Footer, Header } from './components';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Shop Next',
	description: 'Creado en Next.js',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} min-h-screen bg-[#171717]`}>
				<Providers>
					<Header />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
