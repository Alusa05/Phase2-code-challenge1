import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
const [description, setDescription] = useState('');
const [amount, setAmount] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
        addExpense({ description, amount: parseFloat(amount) });
        setDescription('');
        setAmount('');
    }
};
 return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        />
        <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e)=> setAmount(e.target.value)}
        required
        />
        <button type="submit">Add Expense</button>
    </form>
 );
};
export default ExpenseForm;