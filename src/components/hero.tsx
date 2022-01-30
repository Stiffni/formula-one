import { HeroContainer, HeroHeader } from './hero.style';
import { SemiRoundButton } from './button.style';

export const Hero = () => {
	return (
		<HeroContainer>
			<HeroHeader>
				<h2>leading <br /> motorsport <br /> since 1950</h2>
				<SemiRoundButton>Explore the History</SemiRoundButton>
			</HeroHeader>
		</HeroContainer>
	);
};
