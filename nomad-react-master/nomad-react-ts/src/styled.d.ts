// https://styled-components.com/docs/api#typescript
// *.d.ts: declaration file
import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}