import dataProfileAccount from './profileAccount.json';
import './profileAccount.scss';

const ProfileAccount = () => {

    const formatAmount = (amount: number) => {
        return amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }
    const account = dataProfileAccount.map((item) => {
        return (
            <article className="profile__account__item" key={item.argentBank}>
                <div>
                    <h3 className="profile__account__item__argent-bank">{item.argentBank}</h3>
                    <p className="profile__account__item__amount">{formatAmount(item.amount)}</p>
                    <p className="profile__account__item__balance">{item.balance}</p>
                </div>
                <button className="profile__account__item__btn">View transaction</button>
            </article>
        );
    });

    return (
        <section className="profile__account">
            {account}
        </section>
    );
};

export default ProfileAccount;