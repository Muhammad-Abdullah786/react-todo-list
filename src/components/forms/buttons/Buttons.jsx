function Button({ title, handler, arg }) {
    return <button onClick={handler}>{title}</button>;
   }
export default Button   