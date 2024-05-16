import css from "./TransactionHistoryItem.module.css";

export default function TransactionHistoryItem({
  transactionData: { type, amount, currency },
}) {
  return (
    <tr>
      <th className={css.th}>{type}</th>
      <th className={css.th}>{amount}</th>
      <th className={css.th}>{currency}</th>
    </tr>
  );
}
