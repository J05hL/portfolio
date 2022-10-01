import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

export const ThisIsATable = ({array}) => {

   return (
    <TableContainer >
      {array[0] ? 
      <Table 
        variant='simple'
        style={{
          border: "10px solid white"
        }}
      >
        <Thead
          style={{
            border: "10px solid white"
          }}
        >
          <Tr
            style={{
              border: "10px solid white"
            }}
          >
            {Object.keys(array[0]).map((item, index) => 
              <Th 
                key={index}
                style={{
                  border: "10px solid white"
                }}
              >
                {item.toUpperCase()}
              </Th>)}
          </Tr>
        </Thead>
        <Tbody
          style={{
              border: "10px solid white"
            }}
        >
          {array.map((item, index)=> 
            <Tr 
              key={index}
              style={{
                border: "10px solid white"
              }}
            >
              {Object.values(item)
                .map((x, i) => 
                  <td 
                    key={i}
                    style={{
                      border: "10px solid white"
                    }}
                  >{x}</td>)}
            </Tr>)}
        </Tbody>
        
        </Table> : null} 
    </TableContainer>
   )
}