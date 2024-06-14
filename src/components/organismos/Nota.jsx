import Button from "../atomos/Button";
import "./Nota.css";
const Nota = ({ nota, eliminarNota }) => {
  return (
    <div className="nota_contain">
      <h2 className="titulonota">{nota.titulo}</h2>
        <div className="parrafo_nota">
        <p>{nota.contenido}</p>
        </div>
        <div className="boton_contain_nota">
            <Button onClick={eliminarNota}>Eliminar</Button>
        </div>
    </div>
  );
};

export default Nota;
