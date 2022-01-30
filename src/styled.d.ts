// https://styled-components.com/docs/api#typescript
// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		primaryDark: string,
		primaryLight: string,
		primaryAccent: string,
		primaryHover: string,
		tabletMin: string,
		laptopMin: string,
		desktopMin: string
	}
}
