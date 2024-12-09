import React, {useId } from 'react'

function InputBox({
    label,//for getting to know TO hai ya FROM
    amount,
    onAmountChange,//jaise hi amount change hoga toh state bhi change hoga na toh ham use jo call kar rha waha baat krenge
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,//agar jaise hamne use disable karna hi user change na kare
    className = "",
}) {
    const amountInputId=useId()//gives unique value 
    return (
        // jaise hamara label bahut baar call ho rha toh use unique id dene se performance achhi ho jayegi aur use input se bind bhi kar denge 
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange&&onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {/* react me key likhna jruri hai warna react ko lagega ki mai same chij bar bar bana raha hun jiske karan uska performance degrade ho jayega */}
                        {currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;