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
    try {
      // Empezamos la peticion y mostramos la pantalla de carga
      setError(false); // Si teniamos algún error previamente
      setLoading(true); // Activamos la pantalla de carga

      // Todo el codigo que puede romperse o mandar error

      // Llamar al backend o API
      let response = await fetch(urlApi);

      //Recabar la información
      let data = await response.json();

      // Si todo pasa correctamente y no hubo error quitamos
      // la pantalla de carga y guardamos la data
      setLoading(false);
      setData(data);
    } catch (error) {
      // Es el codigo que se ejecutará cuando ocurra algún error
      setLoading(false);
      setError(true);
    }
  };
  const returnUsers = () => {
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
