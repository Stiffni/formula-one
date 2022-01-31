import Fade from 'react-reveal/Fade';
import { CardContainer } from './card.style';

export const Card:React.FC = ({children}) => {
	return (
		<Fade bottom>
			<CardContainer>
				{children}
			</CardContainer>
		</Fade>
	)
}
