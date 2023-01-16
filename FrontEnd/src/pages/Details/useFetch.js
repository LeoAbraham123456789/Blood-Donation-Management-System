import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading]=useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>
    {
        const abortCont=new AbortController();
        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal})
            .then(res=>{
            if(!res.ok)
            {
             throw Error("Not able to fetch from the given end point");
            }
            return res.json();
        })
            .then(data=>{
            setData(data);
            setLoading(false);
            setError(false)
        })
            .catch(err=>{
                console.log(err)
                if(err.name==="AbortError")
                {
                    console.log("fetch aborted");
                }
                else
                {
                    setError(err.message)
                    setLoading(false)
                }
        })
        }, 1000);
        return ()=>abortCont.abort();
    }, [url]);
    return {data, isLoading, error};
}
export default useFetch;