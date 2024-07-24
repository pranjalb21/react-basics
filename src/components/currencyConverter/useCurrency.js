import { useEffect, useState } from "react";

function useCurrency (currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
            .then((res) => res.json())
            .then((resJS) => setData(resJS.rates));
    }, [currency]);
    console.log(data);
    return data;
}
export default useCurrency;
