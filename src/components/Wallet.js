import { useState } from "react";

function Wallet({ addMoney }) {
    const [addAmt, setAddAmt] = useState(0);

    function handleOnChange(e) {
        setAddAmt(parseInt(e.target.value));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addMoney(addAmt);
    }

    return (
        <div>
            <h3>Wallet</h3>
            <form onSubmit={handleSubmit}>
                <input type="number" onChange={handleOnChange} value={addAmt} ></input>
                <input type="submit" value="Add Money"></input>
            </form>
        </div>
    )
}

export default Wallet;