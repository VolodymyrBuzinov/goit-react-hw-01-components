import PropTypes from 'prop-types';

export default function Transactions({ transactions }) {
    return (<table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {
                transactions.map(transaction => {
                    const { id, type, amount, currency } = transaction;
                    return <tr key={id}>
                        <th>{type}</th>
                        <th>{amount}</th>
                        <th>{currency}</th>
                    </tr>
                })
            }
        </tbody>
    </table>
    )
}
Transactions.propTypes = {
    transactions: PropTypes.arrayOf(
    PropTypes.shape({
     id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    }),
  ),       
}
