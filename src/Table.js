import React, {Component} from 'react'

const TableHeader = () => {
return (
  <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
)
}

const TableBody = (props) => {
  const rows = props.cdata.map((row, index)=>{
    return(
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td> 
        <button onClick={()=> props.removePerson(index)}>Remove</button>
      </td>
    </tr>
    )
  })
  return <tbody>{rows}</tbody>
}


const Table = (props) => {

 
    const {cdata, removePerson} = props
    return(
      <table>
      <TableHeader />
      <TableBody cdata = {cdata} removePerson={removePerson}/>
      </table>
    )
  
}
export default Table
