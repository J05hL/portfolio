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

export const Image = ({src, alt, link, banner})=> {
  console.log(`in the Image this is link >>`, link)
  return (

    <ImageContainer
      banner={banner ? true : false}
    >
      {link? 
      <a href={link} target="_blank" rel="noreferrer">
      
        <img css={banner ? wide : normal} src={src} alt={alt}/>
      </a> :
      <img css={banner ? wide : normal} src={src} alt={alt}/>
      }

    </ImageContainer>
  
  )

}