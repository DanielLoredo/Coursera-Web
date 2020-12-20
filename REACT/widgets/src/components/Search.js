import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/bootstrap.min.css";

const Search = () => {
    const [term, setTerm] = useState("programming");
    const [results, setResults] = useState([]);

    const SearchTerm = (e) => {
        setTerm(e.target.value);
    }

    useEffect(() => {
        const search = async () => {
            const response = await axios.get("http://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term
                }
            });
            
            setResults(response.data.query.search);
        }
        search();
    }, [term]);

    const renderedResults = results.map((result) => {
        return <li key = {result.pageid} className="list-group-item"><div style={{fontWeight: "bold"}}>{result.title}</div><div><span dangerouslySetInnerHTML={{ __html: result.snippet}}></span></div></li>
    });

    return (
        <div className = "form-group" style={{marginTop: "10px"}}>
            <label>Search Term</label>
            <input
                className = "form-control"
                value = {term}
                onChange = {SearchTerm}
            />
            <ul className = "list-group">
                {renderedResults}
            </ul>
        </div>
    );
}

export default Search;