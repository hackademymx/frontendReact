// Importaciones de las funciones de react
import React, { useEffect, useState } from "react";
// Importaciones de componentes externos
import { Boton } from "./components/Boton";
// Importación de hojas de estilos
import "./App.css";

let urlApi = "https://jsonplaceholder.typicode.com/users";
// * Función que renderiza nuestra app
function App() {
  // Cargando la petición a la API
  const [loading, setLoading] = useState(false);
  // Error
  const [error, setError] = useState(false);
  // Data
  const [data, setData] = useState(null);
  // Función FETCH
  // Función que llama a una API (Backend)
  // nombreFuncion = () => {}

  // Async -> Función asincrona
  // await -> esperar
  const getUsers = async () => {
    setError(false); // Si teniamos algún error previamente
    setLoading(true); // Activamos la pantalla de carga
    // Hacemos la llamada a nuestro backend
    fetch(urlApi)
      // Then en Javascript es para "entonces"
      .then((response) => {
        // Tomamos la respuesta del backend (es la response)
        if (response.ok) {
          // Si la respuesta es correcta
          // Regresamos la info transformada a json
          return response.json();
        } else {
          // Si no es correcta, ponemos nuestro error en true
          setError(true);
          // Quitamos la carga
          setLoading(false);
          // Regresamos el error por default
          return new Error(response.data);
        }
      })
      .then((data) => {
        // Entonces si todo ha salido bien podemos trabajar con la data del backend
        // Quitamos la carga
        setLoading(false);
        // Guardamos la info
        setData(data);
      })
      .catch((error) => {
        // Si tenemos algún error en nuestro codigo guardamos el error
        setLoading(false);
        setError(true);
      });
  };
  const returnUsers = () => {
    if (data?.length > 0)
      return (
        <div className="users__box">
          {data?.map((item, index) => (
            <div className="user__card" key={index}>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      );
  };
  // useEffect(() => {
  //   getUsers();
  // }, []);
  return (
    <div className="App" id="App">
      <h1>Control de estados</h1>
      <Boton text="Cargar datos" onClick={getUsers} />
      {loading === true && (
        <img
          src={"https://c.tenor.com/YxE9mubQz_8AAAAS/kermit-typing.gif"}
          alt="Cargando"
        />
      )}
      {/* {data !== null && (
        <img
          src={"https://c.tenor.com/0-JMVRIa4gUAAAAC/kermit-happy.gif"}
          alt="Todo salio bien"
        />
      )} */}
      {error === true && (
        <img
          src={"https://c.tenor.com/RrWO6AAuCQ4AAAAC/scared-nervous.gif"}
          alt="Error"
        />
      )}
      {returnUsers()}
    </div>
  );
}

export default App;
