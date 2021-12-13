import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Gotham';
        src: url(./assets/fonts/GothamRoundedBold_21016.ttf)  format('truetype'), /* Safari, Android, iOS */
        font-weight: 700;
        font-style: normal;
      }

      @font-face {
        font-family: 'Gotham';
        src: url('fonts/Gotham-Medium.ttf')  format('truetype'), /* Safari, Android, iOS */
        font-weight: 400;
        font-style: normal;
      }
      `}
  />
);

export default Fonts;
