import { StyledMessage } from './message.style';

export const Message:React.FC = ({children}) => {
	return (
		<StyledMessage>{children}</StyledMessage>
	);
};
