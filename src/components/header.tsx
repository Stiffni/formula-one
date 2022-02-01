import { Link } from 'react-router-dom'
import { HeaderContainer } from './header.style';

export const Header = () => {
	return (
		<HeaderContainer>
			<h1><Link to='/'>F1</Link></h1>
		</HeaderContainer>
	)
}
