import styled from 'styled-components';
import heroImageMobile from '../assets/hero/hero-mobile.webp';
import heroImageLarge from '../assets/hero/hero-large.webp';
import heroImageFull from '../assets/hero/hero-full.webp';

export const HeroContainer = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;

	&:before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-image: url(${heroImageMobile});
		box-shadow: inset 0 5em 4em ${({ theme }) => theme.primaryDark};
		filter: grayscale(35%);

		@media (min-width: ${({ theme }) => theme.laptopMin}) {
			background-image: url(${heroImageLarge});
		}

		@media (min-width: ${({ theme }) => theme.desktopMin}) {
			background-image: url(${heroImageFull}) ;
		}
	}
`;

export const HeroHeader = styled.div`
	position: absolute;
	text-align: right;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 0.2rem;
	left: 50%;
	top: 15%;
	font-style: italic;
	color: ${({ theme }) => theme.primaryLight};

	@media (min-width: ${({ theme }) => theme.laptopMin}) {
		left: 60%;
	}
`;
