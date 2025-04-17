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
        onC
 )
};