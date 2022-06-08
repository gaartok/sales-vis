/*
const useFetch = () => {
    fetch(endPoint)
    .then((res) => {
        //console.log(`res = ${JSON.stringify(res)}`);
        if (!res.ok) {
        throw Error('Could not fetch data');
        }
        return res.json();
    })
    .then((data) => {
        this.setState({ isLoading: false });
        console.log('Success:', data);
    })
    .catch((error) => {
        this.setState({ isLoading: false });
        this.setState({ error: error.message });
        //console.error('Error:', error);
    });
}
*/

import { useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    fetch(url)
    .then(res => {
        if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
        } 
        return res.json();
    })
    .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
    })
    .catch(err => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
    })

    return { data, isPending, error };
}
 
export default useFetch;


