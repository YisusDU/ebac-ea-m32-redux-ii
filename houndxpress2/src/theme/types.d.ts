import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      darkModeBg: string;
    };
    fonts: {
      base: string;
    };
  }
}
