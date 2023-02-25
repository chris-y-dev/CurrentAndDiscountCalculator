import React from 'react';

function Form(){

    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target.priceInput.value);
        console.log(e.target.type.value);
    }


    return(
        <form onSubmit={handleSubmit}>
            <p>
            <label htmlFor="discount">Discount</label>
            <input type="text" id="discount" required="required" placeholder='%' />
            </p>
        <p>
            <label htmlFor="type">What do you want to know?</label>
            <select id="type">
                <option value="original">Original price</option>
                <option value="discounted">Discount price</option>
                <option value="saving">Amount saved</option>
            </select>
        </p>
            
            <p>
            <label htmlFor="priceInput">Item Price</label>
            <input type="text" id="priceInput"/>
            </p>

            <button type="submit">Caculate</button>
        </form>
    )
}

export default Form;