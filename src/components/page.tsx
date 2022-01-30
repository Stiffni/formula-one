import { PageContainer } from './page.style';

export const Page:React.FC = ({children}) => {
	return (
		<PageContainer>
			{children}
		</PageContainer>
	);
};
