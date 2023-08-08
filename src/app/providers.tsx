// app/providers.tsx
'use client';

import { Provider } from 'react-redux';
import { NextUIProvider } from '@nextui-org/react';
import { store } from './store';
import ContextApp from './context/ContextApp';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<ContextApp>
				<NextUIProvider>{children}</NextUIProvider>;
			</ContextApp>
		</Provider>
	);
}
