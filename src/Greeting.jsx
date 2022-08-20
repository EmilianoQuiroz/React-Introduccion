//Las etiquetas de JSX siempre empiezan coon mayuscula, de esta manera las podemos diferenciar
// export function Greeting() {
//     function add(x, y){
//         return x + y;
//     }

//     return <h1>{add(10, 30)}</h1>;
// }
//El export es clave para poder exportar los componentes a nuestro index
// export function Greeting(title, name) {
//     console.log(title, name)
//     return

// }

export function UserCard(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>$ {props.amount}</p>
      <p>{props.married ? "married" : "single"}</p>
      <ul>
        <li>City: {props.adress.City}</li>
        <li>Adress: {props.adress.street}</li>
      </ul>
    </div>
  );
}
