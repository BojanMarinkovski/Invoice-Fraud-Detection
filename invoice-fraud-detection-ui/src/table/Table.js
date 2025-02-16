import "./Table.css"
import {useEffect, useState} from "react";
import Invoice from "../invoice/Invoice";
import axios from 'axios';

function Table() {

    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/invoice/all")
            .then(res => setInvoices(res.data))
            .catch(err => console.log(err));
    }, []);


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
                    key={it.id}
                    id={it.id}
                    debtorName={it.debtorName}
                    sum={it.sum}
                    status={it.status}
                />)}
            </tbody>
        </table>
    </div>);
}

export default Table;
