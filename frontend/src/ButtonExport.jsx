import { CSVLink } from 'react-csv';

export const ButtonExport = ({ data }) => {
    const csvData = [...data]; // Copia los datos en un nuevo arreglo

    return (
        <CSVLink data={csvData} filename="data.csv">
            Exportar a CSV
        </CSVLink>
    );
};
