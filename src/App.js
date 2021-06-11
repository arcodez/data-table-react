import "./styles.css";
import DataTable from "react-data-table-component";
import JSONDATA from "../data.json";

export default function App() {
  const columnas = [
    {
      name: "Name",
      selector: "name",
      sorTable: true
    },
    {
      name: "Edad",
      selector: "edad",
      sorTable: true
    },
    {
      name: "City",
      selector: "city",
      sorTable: true,
      right: true
    }
  ];

  const paginationOpciones = {
    rowsPerPageText: "Filas Por Pagina",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos"
  };

  return (
    <div className="App">
      <DataTable
        columns={columnas}
        data={JSONDATA}
        title="Lista de Usuarios"
        pagination
        paginationComponentOptions={paginationOpciones}
        fixedHeader
        fixedHeaderScrollHeight={"600px"}
      />
    </div>
  );
}
