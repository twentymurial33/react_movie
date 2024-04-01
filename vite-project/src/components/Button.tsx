interface Props{
    children:string;
    onClick:()=>void;
}

const Button = ({children,onClick}:Props) => {
  return (
  
    <button type="button" className="btn btn-secondary" onClick={onClick}>{children}</button>
  )
}

export default Button