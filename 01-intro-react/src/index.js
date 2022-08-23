//El primer paso para utilizar React es importar la biblioteca, esta se encuentra en el package.json
import React, { useSyncExternalStore } from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { useState, useEffect } from "react";

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

//--- Arreglos en React ---//
// const user = [
//   {
//     id: 1,
//     name: "Ryan Ray",
//     image: "https://robohash.org/user1",
//   },
//   {
//     id: 2,
//     name: "Jon Ray",
//     image: "https://robohash.org/user2",
//   },
//   {
//     id: 2,
//     name: "Jon Ray",
//     image: "https://robohash.org/user3",
//   },
// ];

function Counter(){
  
  const [counter, setCounter] = useState(0)

  useEffect(function(){
    console.log('render')
  })

  return(
  <div>
        {/* Use State */}
        <h1>Counter: {counter}</h1>
    <button onClick={() =>{
      setCounter(counter + 1)
    }}>Sumar</button>

<button onClick={() =>{
      setCounter(counter - 1)
    }}>Restar</button>
       <button onClick={() =>{
      setCounter(counter - counter)
    }}>Reestablecer</button>
  </div>
  )
}

root.render(
  <>
    {/*     <UserCard
      name="Ryan Ray"
      amount="3000"
      married={true}
      points={[99, 33.3, 22.2]}
      adress={{ street: "Calle falsa 123", City: "Buenos Aires" }}
    /> */}
    {/* <Button text='Payment'/>
    <Button text='GoTo'/>
    <Button text='Home'/> */}
    {/* <TaskCard ready={true}></TaskCard>
    <Button text="Saludar"></Button>
    <input
      onClick={function () {
        alert("input seleccionado");
      }}
    ></input>
    <input
      onChange={function () {
        console.log("Escribiendo en el input");
      }}
    ></input> */}
    {/* <Post></Post> */}
    {/* {user.map((user, i) => {
      return (
      <div key={i}>
        <h1>{user.name}</h1>;
        <img src={user.image} />
      </div>
      )
    })} */}

    {/* Use State */}
    <Counter/>
  </>
);

/*FRAGMENT: son contenedores vacios que sirven para cumplir con la regla de react de tener un contenedor padre sin utilizar alguna etiqueta especifica*/

//--- Tipos de componentes ---//
// Componentes Funcionales (hechos con funciones )
//Componentes de Clases (menos utilizados actualmente)

//--- Metodos mas utilizados ---//
/*
.map()
.filter()
.find()
.reduce()
.sort()
*/