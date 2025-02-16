import "./Invoice.css"

function Invoice({id, debtorName, sum, status}) {

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{debtorName}</td>
            <td>{sum}</td>
            <td>{status}</td>
        </tr>
    );
}

export default Invoice;
