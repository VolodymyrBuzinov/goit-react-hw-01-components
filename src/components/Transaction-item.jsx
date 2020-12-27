import transactions from '../json-files/transactions.json'
import PropTypes from 'prop-types';


export default function Transactions() {       
    return transactions.map(transaction => {
        const { id, type, amount, currency } = transaction;
        return <tr key={id}>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
    })
}
Transactions.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}
