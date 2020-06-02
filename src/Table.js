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
      <td><h1>{index}</h1></td>
    </tr>
    )
  })
  return <tbody>{rows}</tbody>
}


class Table extends Component {

  render(){
    const {cdata} = this.props
    return(
      <table>
      <TableHeader />
      <TableBody cdata = {cdata}/>
      </table>
    )
  }
}
export default Table
