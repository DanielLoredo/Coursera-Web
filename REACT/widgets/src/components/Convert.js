import React, {useState, useEffect} from "react";
import "../css/bootstrap.min.css";
import axios from "axios";

const Convert = ({text, language}) => {
    const [translation, setTranslation] = useState("");
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
        
        const doTranslation = async () => {
            const {data} = 
                await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            });
            setTranslation(data.data.translations[0].translatedText);
        }
        
        doTranslation();

    }, [debouncedText]);



    return (
        <div>{translation}</div>
    );
}

export default Convert;