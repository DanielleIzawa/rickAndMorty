import { createGlobalStyle } from "styled-components";

import Theme from "./theme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: rgba(285, 285, 280) 
    0% 0% no-repeat padding-box;;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Open Sans';
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Open Sans';
  }

  h1{
    text-align: center;
    font-weight: ${Theme.fontweight.large_weight};
    font-size: ${Theme.fontSize.px_large};
    color: ${Theme.colors.blue_text};
    margin-top: 80px;
    span{
      color: ${Theme.colors.black};
      text-align: start;
      margin: 0;
      p{
        color: ${Theme.colors.white_text};
        ${Theme.fontSize.px_small};
        text-align: center;
        padding-left: 98px;
      }
    }
  }

  h2{
  font-weight: ${Theme.fontweight.medium_weight};
  font-size: ${Theme.fontSize.px_medium};
  color: ${Theme.colors.black};
  margin: 15px 22px;
    span{
    margin: 0;
    color: ${Theme.colors.blue_text};
    font-size:${Theme.fontSize.px_small_text};
    p{
      font-size: ${Theme.fontSize.px_medium_text};
      color: ${Theme.colors.white_text};
    }
  }
}

  h3{
  margin-left: 22px;
  /* margin-top: -25px; */
  font-weight: ${Theme.fontweight.medium_weight};
  font-size: ${Theme.fontSize.px_small_title};
  color: ${Theme.colors.black};
    span{
    color: ${Theme.colors.blue_text};
    margin-left: 0;
      span{
      font-weight: ${Theme.fontweight.small_weight};
      color: ${Theme.colors.white_text};
      /* margin-top: 0; */
      text-align: start;
      p{font-size:${Theme.fontSize.px_small_text};
      padding-left: 166px;
        p{
          color:#BEBEBE;
          padding-left: 0;
        }
      }
    }
  }
}

  h4{
  margin-top: 14px;
  font-size: ${Theme.fontSize.px_small};
  font-weight: ${Theme.fontweight.medium_weight};
  color: ${Theme.colors.black};
  text-align: center;
    span{
    color: ${Theme.colors.white_text};
  }
}

  button {
  cursor: pointer;
}
`
