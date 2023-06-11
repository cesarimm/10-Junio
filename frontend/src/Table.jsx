export const Table = ({ data = [] }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Fecha</th>
                    <th>Cliente</th>
                    <th>Monto</th>
                    <th>Banco</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.fecha}</td>
                        <td>{item.cliente}</td>
                        <td>{item.monto}</td>
                        <td>{item.banco}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
