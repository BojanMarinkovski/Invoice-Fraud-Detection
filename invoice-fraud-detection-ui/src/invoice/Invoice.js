import "./Invoice.css"
import {useState} from "react";
import axios from 'axios';

function Invoice({id, debtorName, sum}) {

    const [status, setStatus] = useState(undefined);

    const onClickBtn = (id) => {
        axios.get(`http://localhost:8080/invoice/get-status/${id}`)
            .then(res => setStatus(res.data))
            .catch(err => console.log(err));
    }

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{debtorName}</td>
            <td>{sum}</td>
            <td>
                {status ? status :
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => onClickBtn(id)}>
                            Validate
                        </button>
                }
            </td>
        </tr>
    );
}

export default Invoice;
