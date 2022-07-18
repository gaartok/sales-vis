
const doFetchGet = (url, setData, setIsPending, setError) => {
    setIsPending(true);
    setError(null);
    setData(null);
    
    fetch(url)
    .then(res => {
        if (!res.ok) {
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
        setIsPending(false);
        setError(err.message);
    })
}
 
export default doFetchGet;


