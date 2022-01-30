import styled from 'styled-components';
import heroImage from '../assets/hero/hero-mobile.png';

export const HeroContainer = styled.div`
	height: 100vh;
	width: 100vw;
	background-size: cover;
	background-image: url(${heroImage});
	box-shadow: inset 0 5em 4em ${({ theme }) => theme.primaryDark};
	filter: grayscale(35%);
`;

export const HeroHeader = styled.div`
	position: absolute;
	text-align: right;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 0.2rem;
	right: 10%;
	top: 15%;
	font-style: italic;
	color: ${({ theme }) => theme.primaryLight}
`
