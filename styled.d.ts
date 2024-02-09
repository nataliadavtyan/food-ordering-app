import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;

        colors: {
            // do I really need to type the colors?
            main: string;
            secondary: string;
            text: string;
        };
    }
}