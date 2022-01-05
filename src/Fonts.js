import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Gotham Rounded Medium"; 
        src: url("https://db.onlinewebfonts.com/t/64614abc4eb19976e5d29c8d3335a350.eot"); 
        src: url("https://db.onlinewebfonts.com/t/64614abc4eb19976e5d29c8d3335a350.eot?#iefix") format("embedded-opentype"), 
        url("https://db.onlinewebfonts.com/t/64614abc4eb19976e5d29c8d3335a350.woff2") format("woff2"), 
        url("https://db.onlinewebfonts.com/t/64614abc4eb19976e5d29c8d3335a350.woff") format("woff"), 
        url("https://db.onlinewebfonts.com/t/64614abc4eb19976e5d29c8d3335a350.ttf") format("truetype"), 
        url("https://db.onlinewebfonts.com/t/64614abc4eb19976e5d29c8d3335a350.svg#Gotham Rounded Medium") format("svg"); 
      }

      @font-face {
        font-family: "Gotham Rounded Bold";
        src: url("//db.onlinewebfonts.com/t/b7f851417b1f5bd34ad6742010bc7604.eot");
        src: url("//db.onlinewebfonts.com/t/b7f851417b1f5bd34ad6742010bc7604.eot?#iefix") format("embedded-opentype"),
        url("//db.onlinewebfonts.com/t/b7f851417b1f5bd34ad6742010bc7604.woff2") format("woff2"),
        url("//db.onlinewebfonts.com/t/b7f851417b1f5bd34ad6742010bc7604.woff") format("woff"),
        url("//db.onlinewebfonts.com/t/b7f851417b1f5bd34ad6742010bc7604.ttf") format("truetype"),
        url("//db.onlinewebfonts.com/t/b7f851417b1f5bd34ad6742010bc7604.svg#Gotham Rounded Bold") format("svg");
        }
      `}
  />
);

export default Fonts;
