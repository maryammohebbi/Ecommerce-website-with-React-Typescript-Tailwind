import { useEffect, useState } from "react";

export default function useLocalStorage(key: string) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key)
        return storedValue && JSON.parse(storedValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue]

}