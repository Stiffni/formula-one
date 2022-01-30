import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Circuits } from './pages/circuits';
import { Home } from './pages/home';
import { Layout } from './components/layout';
import { GlobalStyles } from './global';
import { theme } from './theme';
import './App.css';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/circuits' element={<Circuits />} />
						<Route path='*' element={<Home />} />
					</Route>
				</Routes>
			</>
		</ThemeProvider>
	);
}

export default App;
