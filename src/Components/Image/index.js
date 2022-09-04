/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import {ImageContainer} from '../ImageContainer'

const fixed = css`
  max-width: 100%; 
  height: auto;  
  width: 60%;
  height: auto;
  border-radius: 20px;
  border: 1px solid;
`

const normal = css`
  width: 60%;
  height: auto;
  border-radius: 20px;
  border: 1px solid;
  @media(min-width: 1100px) {
    display: none;
  }
`

const wide = css`
  width: 100%;
  height: auto;
  border: 1px solid;
`

const small = css`
  width: 50px;
  height: 50px;
`

export const Image = ({src, alt, link, banner, tiny, fix})=> {

  return (

    <ImageContainer
      banner={banner ? true : false}
      tiny={tiny ? true : false}
      fix={fix ? true : false}
    >
      {link? 
      <a href={link} target="_blank" rel="noreferrer">
      
        <img css={fix ? fixed : banner ? wide : tiny ? small : normal} src={src} alt={alt}/>
      </a> :
      <img css={fix ? fixed : banner ? wide : tiny ? small : normal} src={src} alt={alt}/>
      }

    </ImageContainer>
  
  )

}