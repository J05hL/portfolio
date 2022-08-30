/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import {ImageContainer} from '../ImageContainer'

const normal = css`
  max-width: 100%;
  max-height: 100%;
  border-radius: 20px;
  border: 1px solid;
`

const wide = css`
  width: 100%;
  height: 100%;
  border: 1px solid;
`

const small = css`
  width: 50px;
  height: 50px;

`

export const Image = ({src, alt, link, banner, tiny})=> {
  console.log(`in the Image this is link >>`, link)
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