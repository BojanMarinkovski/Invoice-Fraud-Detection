import "./Table.css"
import {useEffect, useState} from "react";
import Invoice from "../invoice/Invoice";
import axios from 'axios';
import {v4 as uuidGenerator} from 'uuid';

function Table() {

    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/invoice/all")
            .then(res => {
                let invoices = res.data;
                invoices.forEach(it => it.feUUID = uuidGenerator());
                setInvoices(invoices)
            })
            .catch(err => console.log(err));
    }, []);

    const clearAllStatuses = () => {
        axios.get("http://localhost:8080/invoice/clear-status-for-all-invoices")
            .then(res => console.log(res))
            .catch(err => console.log(err));
        let resetInvoices = [...invoices];
        resetInvoices.forEach(it => it.feUUID = uuidGenerator());
        setInvoices(resetInvoices);
    }

    return (<div className="table-wrapper">
        <table className="table table-style">
            <thead>
                <tr>
                    <th scope="col">#id</th>
                    <th scope="col">Debtor Name</th>
                    <th scope="col">Sum</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {invoices.map(it => <Invoice
                    key={it.feUUID}
                    id={it.id}
                    debtorName={it.debtorName}
                    sum={it.sum}
                />)}
            </tbody>
        </table>
        <button
            type="button"
            className="btn btn-success"
            onClick={() => clearAllStatuses()}>
            Clear all statuses
        </button>
    </div>);
}

export default Table;
