import { CardContainer } from './card.style';

export const Card:React.FC = ({children}) => {
	return (
		<CardContainer>
			{children}
		</CardContainer>
	)
}
