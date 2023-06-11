import { CSVLink } from 'react-csv';
import './button.css';

export const ButtonExport = ({ data }) => {
    const csvData = [...data]; // Copia los datos en un nuevo arreglo

    return (
        <CSVLink className="button" data={csvData} filename="data.csv">
            Exportar a CSV
        </CSVLink>
    );
};
