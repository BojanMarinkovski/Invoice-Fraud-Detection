import "./Table.css"
import {useEffect, useState} from "react";
import Invoice from "../invoice/Invoice";

function Table() {

    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        // todo call invoices api
        setInvoices(JSON.parse("[{\"id\":1,\"debtorName\":\"Oliver Jake\",\"sum\":19785.0,\"status\":\"OK\"},{\"id\":2,\"debtorName\":\"Noah James\",\"sum\":32394.0,\"status\":\"Suspicious\"},{\"id\":3,\"debtorName\":\"Jack Connor\",\"sum\":23131.0,\"status\":\"OK\"},{\"id\":4,\"debtorName\":\"Liam John\",\"sum\":17957.0,\"status\":\"OK\"},{\"id\":5,\"debtorName\":\"Harry Callum\",\"sum\":19870.0,\"status\":\"Suspicious\"},{\"id\":6,\"debtorName\":\"Mason Robert\",\"sum\":5480.0,\"status\":\"Suspicious\"},{\"id\":7,\"debtorName\":\"Jacob Jacob\",\"sum\":6751.0,\"status\":\"OK\"},{\"id\":8,\"debtorName\":\"Jacob Michael\",\"sum\":16794.0,\"status\":\"OK\"},{\"id\":9,\"debtorName\":\"Charlie Kyle\",\"sum\":23717.0,\"status\":\"OK\"},{\"id\":10,\"debtorName\":\"Thomas Joe\",\"sum\":28203.0,\"status\":\"Suspicious\"},{\"id\":11,\"debtorName\":\"Ethan David\",\"sum\":29864.0,\"status\":\"OK\"},{\"id\":12,\"debtorName\":\"George Reece\",\"sum\":24710.0,\"status\":\"OK\"},{\"id\":13,\"debtorName\":\"Michael Richard\",\"sum\":33440.0,\"status\":\"OK\"},{\"id\":14,\"debtorName\":\"Oscar Rhys\",\"sum\":13588.0,\"status\":\"OK\"},{\"id\":15,\"debtorName\":\"Alexander Joseph\",\"sum\":6582.0,\"status\":\"OK\"},{\"id\":16,\"debtorName\":\"James Charlie\",\"sum\":31107.0,\"status\":\"OK\"},{\"id\":17,\"debtorName\":\"James Charles\",\"sum\":16826.0,\"status\":\"Suspicious\"},{\"id\":18,\"debtorName\":\"William Damian\",\"sum\":29772.0,\"status\":\"OK\"},{\"id\":19,\"debtorName\":\"Daniel Thomas\",\"sum\":18899.0,\"status\":\"OK\"},{\"id\":20,\"debtorName\":\"Amelia Margaret\",\"sum\":4660.0,\"status\":\"OK\"},{\"id\":21,\"debtorName\":\"Emma Mary\",\"sum\":5563.0,\"status\":\"OK\"},{\"id\":22,\"debtorName\":\"Olivia Samantha\",\"sum\":13317.0,\"status\":\"OK\"},{\"id\":23,\"debtorName\":\"Olivia Patricia\",\"sum\":9893.0,\"status\":\"OK\"},{\"id\":24,\"debtorName\":\"Isla Bethany\",\"sum\":8998.0,\"status\":\"OK\"},{\"id\":25,\"debtorName\":\"Sophia Jennifer\",\"sum\":14790.0,\"status\":\"OK\"},{\"id\":26,\"debtorName\":\"Emily Elizabeth\",\"sum\":6955.0,\"status\":\"OK\"},{\"id\":27,\"debtorName\":\"Isabella Elizabeth\",\"sum\":29368.0,\"status\":\"Suspicious\"},{\"id\":28,\"debtorName\":\"Poppy Joanne\",\"sum\":7012.0,\"status\":\"OK\"},{\"id\":29,\"debtorName\":\"Ava Linda\",\"sum\":25400.0,\"status\":\"OK\"},{\"id\":30,\"debtorName\":\"Ava Megan\",\"sum\":26481.0,\"status\":\"OK\"},{\"id\":31,\"debtorName\":\"Mia Barbara\",\"sum\":16206.0,\"status\":\"OK\"},{\"id\":32,\"debtorName\":\"Isabella Victoria\",\"sum\":1069.0,\"status\":\"OK\"},{\"id\":33,\"debtorName\":\"Emily Susan\",\"sum\":35166.0,\"status\":\"OK\"},{\"id\":34,\"debtorName\":\"Jessica Lauren\",\"sum\":14181.0,\"status\":\"OK\"},{\"id\":35,\"debtorName\":\"Abigail Margaret\",\"sum\":4367.0,\"status\":\"Suspicious\"},{\"id\":36,\"debtorName\":\"Lily Michelle\",\"sum\":18254.0,\"status\":\"OK\"},{\"id\":37,\"debtorName\":\"Madison Jessica\",\"sum\":38167.0,\"status\":\"OK\"},{\"id\":38,\"debtorName\":\"Sophie Tracy\",\"sum\":17113.0,\"status\":\"OK\"},{\"id\":39,\"debtorName\":\"Charlotte Sarah\",\"sum\":10026.0,\"status\":\"OK\"}]"));
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
