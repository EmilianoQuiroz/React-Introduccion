//El primer paso para utilizar React es importar la biblioteca, esta se encuentra en el package.json
import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product from "./Product";

// const rootElement = document.getElementById('root')
// ReactDOM.createRoot(rootElement)
//Equivake a..
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>Hello word</h1>)
/*COMPONENTES: son porciones de codigo en las que podemos dividir una pagina para asi poder reutilizar el codigo*/
/*Son funciones que devuelven una porcion de interfaz*/
/*Los elementos siempre deben tener un elemento padre para ser llamados*/
// function Greeting() {
// return <div>
//         <h1>Primer componente en react </h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adip</p>
//         </div>
//   const user = {
//     primerNombre: "Santiago",
//     apellidoQuiroz: "Quiroz",
//   };

//   return <h1>{JSON.stringify(user)}</h1>;
// }
/*El componente Greeting puede ser utilizado dentro del programa como una etiqueta html que llama al componente js*/
/*Estas etiquetas pueden ser de autocerrado */
root.render(
  <>
    <UserCard
      name="Ryan Ray"
      amount="3000"
      married={true}
      points={[99, 33.3, 22.2]}
      adress={{ street: "Calle falsa 123", City: "Buenos Aires" }}
    />
  </>
);

/*FRAGMENT: son contenedores vacios que sirven para cumplir con la regla de react de tener un contenedor padre sin utilizar alguna etiqueta especifica*/
