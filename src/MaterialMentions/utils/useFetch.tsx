import {useEffect} from "react";

export const useFetch = <T, >(url: string, callback: (result: any) => void, deps: unknown[]) => {
    useEffect(() => {
        const abortController = new AbortController();
        fetch(url, {signal: abortController.signal})
            .then(res => res.json())
            .then(callback)
        //.catch(reason => console.error(reason))

        return () => abortController.abort()
    }, deps)
}