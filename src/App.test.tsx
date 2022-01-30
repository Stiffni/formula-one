import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders Formula 1 text', () => {
	render(
		<Router>
			<App />
		</Router>
	);

	const homeElement = screen.getByText(/F1/i);
	expect(homeElement).toBeInTheDocument();
});
