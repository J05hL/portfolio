/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const outerTableDiv = css`
  display: flex;
  justify-content: center;
  color: #FAF9F6;
  background-color: #342e37;
  padding: 20px;
`

const table = css`
  color: #FAF9F6;
  background-color: #342e37;
  padding: 5px;
`

const tableElement = css`
color: #FAF9F6;
background-color: #342e37;
padding: 5px;
border: 1px solid;
`

export const Table = ({array}) => {

   return (
    <div css={outerTableDiv}>
      {array[0] ? 
      <table css={table}>
        <thead>
          <tr>
            {Object.keys(array[0]).map((item, index) => 
              <th 
                key={index}
                css={tableElement}
              >
                {item}
              </th>)}
          </tr>
        </thead>
        <tbody>
          {array.map((item, index)=> 
            <tr 
              key={index}
              css={tableElement}
            >
              {Object.values(item)
                .map((x, i) => 
                  <td 
                    key={i}
                    css={tableElement}
                  >{x}</td>)}
            </tr>)}
        </tbody>
        
        </table> : null} 
    </div>
   )
}