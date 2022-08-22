/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import {ImageContainer} from '../ImageContainer'

const style = css`
  max-width: 100%;
  max-height: 100%;
  border-radius: 20px;
  border: 1px solid;
`

export const Image = ({src, alt, link})=> {
  console.log(`in the Image this is link >>`, link)
  return (

    <ImageContainer>
      {link? 
      <a href={link} target="_blank" rel="noreferrer">
      
        <img css={style} src={src} alt={alt}/>
      </a> :
      <img css={style} src={src} alt={alt}/>
      }

    </ImageContainer>
  
  )

}