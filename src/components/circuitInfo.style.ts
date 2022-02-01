import styled from 'styled-components';
import { ReactComponent as Pin } from '../assets/pin.svg';

export const StyledCircuitInfo = styled.div`
	color: ${({ theme }) => theme.primaryDark};
	height: 100%;
	padding: 1rem 2rem;
	border: .3rem solid  ${({ theme }) => theme.primaryAccent};
	border-radius: 1rem;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-between;
	align-content: space-between;

	h2 {
		margin-bottom: 0;
	}

	h3 {
		text-transform: uppercase;
		display: inline-block;
		vertical-align: bottom;
		padding-left: 0.5rem;
	}
`

export const StyledPin = styled(Pin)`
	width: 1.5rem;
	height: 100%;
	fill: theme.primaryDark;
	display: inline-block;
`
