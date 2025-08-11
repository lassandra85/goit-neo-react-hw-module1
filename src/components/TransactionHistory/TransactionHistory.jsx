import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead className={css.head}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={css.row}>
                        <td className={css.cell}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </td>
                        <td className={css.cell}>{amount}</td>
                        <td className={css.cell}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TransactionHistory;
