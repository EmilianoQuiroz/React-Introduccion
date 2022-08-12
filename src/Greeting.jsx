//Las etiquetas de JSX siempre empiezan coon mayuscula, de esta manera las podemos diferenciar
// export function Greeting() {
//     function add(x, y){
//         return x + y;
//     }

//     return <h1>{add(10, 30)}</h1>;
// }
//El export es clave para poder exportar los componentes a nuestro index
export function Greeting(title, name) {
    console.log(title, name)
    return <h1>{title} admin {name}</h1>
    
}

export function UserCard(){
    return <h1>User Card</h1>
}