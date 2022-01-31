import Fade from 'react-reveal/Fade';
import { HeroContainer, HeroHeader } from './hero.style';
import { SemiRoundButton } from './button.style';

export const Hero = () => {
	return (
		<HeroContainer>
				<HeroHeader>
					<Fade right>
						<h2>leading <br /> motorsport <br /> since 1950</h2>
						<SemiRoundButton>Explore the History</SemiRoundButton>
					</Fade>
				</HeroHeader>
		</HeroContainer>
	);
};
