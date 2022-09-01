/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import {ImageContainer} from '../ImageContainer'

const normal = css`
  width: 60%;
  height: auto;
  border-radius: 20px;
  border: 1px solid;
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

export const Image = ({src, alt, link, banner, tiny})=> {

  return (

    <ImageContainer
      banner={banner ? true : false}
      tiny={tiny ? true : false}
    >
      {link? 
      <a href={link} target="_blank" rel="noreferrer">
      
        <img css={banner ? wide : tiny ? small : normal} src={src} alt={alt}/>
      </a> :
      <img css={banner ? wide : tiny ? small : normal} src={src} alt={alt}/>
      }

    </ImageContainer>
  
  )

}