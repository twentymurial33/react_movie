import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App(){
   let items=["New York", "Ethiopia","Washington","Emirates","Paris"]

  const handleSelect=(item:string)=>{
  console.log(item)
  }
  return(<div>

 <ListGroup items={items} heading="Cities" onSelectItem={handleSelect}/>
 <Alert>Hello World</Alert>
 <Button onClick={()=>{}}>My Button</Button>

  </div>)
}

export default App;