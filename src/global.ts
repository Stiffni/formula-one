import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
		position: relative;
		overflow-x: hidden;
		width: 100%;
	}
	*, *::after, *::before {
	box-sizing: border-box;
	}
	body {
		align-items: center;
		background: ${({ theme }) => theme.primaryDark};
		color: ${({ theme }) => theme.primaryLight};
		display: flex;
		font-family: 'Roboto Condensed', sans-serif;
		justify-content: center;
		text-rendering: optimizeLegibility;
	}
	h1 {
		font-size: 2rem;
	}
	h2 {
		font-size: 1.5rem;
	}
	h3 {
		font-size: 1.25rem;
	}
	h4 {
		font-size: 1.25rem;
	}
`;
