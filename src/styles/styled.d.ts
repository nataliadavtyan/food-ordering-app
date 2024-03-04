import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    color: {
      main: string;
      text: string;
      inactiveText: string;
      bgColor: string;
      // bgColor: string,
      // bgColor: string,
      menuBg: string;
    };
  }
}
