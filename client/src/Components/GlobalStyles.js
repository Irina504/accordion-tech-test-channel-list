import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

}

body {
    
    --tangerine-yellow: #FFCC00;
    --hollywood-cerise: #FF0099;
    --cyprus: #003333;
    --electric-purple: #CC33FF;
    --slate-blue: #6666CC;
    --black: #000000;
    --coastal-breeze: #DFF9FB;
    --purple-corallite: #574B90;
    --title-font: 'Kumbh Sans', sans-serif;
    --regular-font: 'Roboto', sans-serif;

    font-family:var(--regular-font);
    font-weight: 400;
    font-size: 1em;
    color: var(--coastal-breeze);

}


`;
