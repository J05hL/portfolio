
export const Table = ({array}) => {

   return (
    <div >
      {array[0] ? 
      <table >
        <thead>
          <tr>
            {Object.keys(array[0]).map((item, index) => 
              <th 
                key={index}
              >
                {item.toUpperCase()}
              </th>)}
          </tr>
        </thead>
        <tbody>
          {array.map((item, index)=> 
            <tr 
              key={index}
            >
              {Object.values(item)
                .map((x, i) => 
                  <td 
                    key={i}
                  >{x}</td>)}
            </tr>)}
        </tbody>
        
        </table> : null} 
    </div>
   )
}