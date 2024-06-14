import { useState } from 'react';
import AgregarNotaForm from "../components/moleculas/AgregarNotaForm";
import ListaNotas from "../components/organismos/ListaNotas";
import "./inicio.css"

const Inicio = () => {
  const [notas, setNotas] = useState([]);

  const agregarNota = (nota) => {
    setNotas([...notas, nota]);
  };

  const eliminarNota = (indice) => {
    const nuevasNotas = notas.filter((_, i) => i !== indice);
    setNotas(nuevasNotas);
  };

  return (
    <div className="inicio">
      <h1>BLOG DE NOTAS</h1>
      <AgregarNotaForm agregarNota={agregarNota} />
      <ListaNotas notas={notas} eliminarNota={eliminarNota} />
    </div>
  );
};

export default Inicio;
