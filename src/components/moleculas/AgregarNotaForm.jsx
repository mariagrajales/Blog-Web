import { useState } from 'react';
import Input from "../atomos/Input";
import Textarea from "../atomos/Textarea";
import Button from "../atomos/Button";
import "./AgregarNotaForm.css";

const AgregarNotaForm = ({ agregarNota }) => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    agregarNota({ titulo, contenido });
    setTitulo('');
    setContenido('');
  };

  return (
    <form className="contain_form" onSubmit={manejarEnvio}>
      <Input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <Textarea
        placeholder="Contenido"
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
        required
      />
    <div className="contain_button_form">
      <Button type="submit">Agregar Nota</Button>
    </div>
    </form>
  );
};

export default AgregarNotaForm;