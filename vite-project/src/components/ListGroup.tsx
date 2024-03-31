import { MouseEvent } from "react"
function ListGroup(){
  let items=[
    "New York", "Ethiopia","Washington","Emirates"
  ]

//  const getMessage=()=>{
//   return items.length===0?<p>No item found</p>: null
//  }
 //event handler 
 const handleClick=
  (event:MouseEvent)=>{console.log(event)
 }
    return(
    <>
  <h1>List</h1>
  {/* {getMessage()} */}
  {items.length===0?<p>No item found</p>: null}
  <ul className="list-group">
  {items.map((item, key)=><li className="list-group-item active" key={item} onClick={handleClick}>{item}</li>)}
  </ul>
  </>
    )
}

export default ListGroup