import Nota from "./Nota";
import "./ListaNotas.css";

const ListaNotas = ({ notas, eliminarNota }) => {
    return (
        <div className="lista-notas">
            {notas.length === 0 ? (
                <p className="parrafo_lista-nota">No hay notas disponibles</p>
            ) : (
                notas.map((nota, indice) => (
                    <div key={indice} className="nota">
                        <Nota nota={nota} eliminarNota={() => eliminarNota(indice)} />
                    </div>
                ))
            )}
        </div>
    );
};

export default ListaNotas;
