
import Transactions from './Transaction-item'

export default function TransactionTable() {
    return <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    <Transactions></Transactions>
  </tbody>
</table>
}

