const { keyframes } = require("@emotion/core");

const animationFadeIn = keyframes `
0%{
  opacity:0;
}
100%{
  opacity:1;
}
`;

export {
    animationFadeIn
}