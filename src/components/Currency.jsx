import React, { useState } from 'react'
import '../css/currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_7kn2eNorYEFS028JsYgT9BY0gbS04cFMu8JkY4Af";

function currency() {
    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [resault, setResault] = useState(0);

    const exchange = async () => {
        if (amount < 0) {
            return;
        }

        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const resault = (response.data.data[toCurrency] * amount).toFixed(2);
        setResault(resault);
    }


    return (
        <div className='currency-div'>
            <div style={{ fontFamily: 'arial', backgroundColor: 'black', color: 'white', width: '100%', textAlign: 'center' }}>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>
            <div style={{ marginTop: '25px' }}>
                <input value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type='number' className='amount' />

                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaRegArrowAltCircleRight className='arrow' />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input value={resault} onChange={(e) => setResault(e.target.value)} type='number' className='resault' />

            </div>
            <div>
                <button onClick={(exchange)}
                    className='exchange-button'>Çevir</button>
            </div>



        </div>
    )
}

export default currency