// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    mediaQuery: {
      lg: 1100;
    };

    colors: {
      navyBlue: "#333c5e";
      red: "#F15B5B";
    };
  }
}
