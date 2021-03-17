import React, {useState, useEffect} from 'react'
import jsonData from './content.json';

const Context = React.createContext()

function ContextProvider ({children}) {
    const [slideItems, setSlideItems] = useState([])
    let [currentPic, setCurrentPic] = useState(1)
    const [scrollDirections, setScrollDirection] = useState("")

    useEffect(() => {

const loadData = () => JSON.parse(JSON.stringify(jsonData));
setSlideItems(loadData)         
    }, [])


    return (
        <Context.Provider value={{slideItems, currentPic, scrollDirections, setScrollDirection, setCurrentPic}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}