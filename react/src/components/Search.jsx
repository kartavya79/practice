import React, {useEffect, useState} from 'react'   

function Search() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
    useEffect(()=>{
        setInterval(()=>{
            console.log("API call")
        },1000)
    },[])

    const handleChange = (e) => {
        setQuery(e.target.value)
        // API call
        // setResults()
    }
    return (
        <div>
            <input type="text" value={query} onChange={handleChange} placeholder="Search..." />
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    )
}