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

  return (

    <ImageContainer>
      {link? 
      <a href={link}>
        <img css={style} src={src} alt={alt}/>
      </a> :
      <img css={style} src={src} alt={alt}/>
      }

    </ImageContainer>
  
  )

}