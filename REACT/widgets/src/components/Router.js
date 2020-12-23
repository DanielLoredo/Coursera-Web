import { useEffect, useState } from "react";

const Router = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener("popstate", onLocationChange);

        return () => {
            window.removeEventListener("popstate", onLocationChange); 
        }
    }, []);
    
    if(window.location.pathname === path){
        return children;
    }else{
        return null;
    }
}

export default Router;