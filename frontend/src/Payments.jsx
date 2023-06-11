import { useEffect, useState } from 'react';
import { Table } from './Table';
import { ButtonExport } from './ButtonExport';

export const Payments = () => {
    const [paymetsList, setPaymentsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/payment/list');
                const jsonData = await response.json();
                setPaymentsList(jsonData);
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log(paymetsList);
    }, [paymetsList]);

    return (
        <div>
            <h1>Payments</h1>
            <ButtonExport data={paymetsList} />
            <Table data={paymetsList} />
        </div>
    );
};
