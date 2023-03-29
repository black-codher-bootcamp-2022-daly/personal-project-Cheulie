import React, {usestate} from "react"
import { getAllProfiles } from "./services/profileService";

import "./SearchBar.css"

const SearchBar = () => {
    const [searchValue, setSearchValue] = usestate("")

    const handleInputChange =(event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const shouldDisplayButton = searchValue.length > 0 

    const filteredProfiles =getAllProfiles.filter((profiles) => {
        return profiles.includes(setSearchValue)
    })



    return (
        <div>
            <input type="text" value={setSearchValue} onChange={handleInputChange} />
            
            {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}

            <ul>
                    {filteredProfiles.map((profiles) => {
                        return <li key={profiles}>{profiles}</li>
                    })}
            </ul>        
        </div>
    )
}

export default SearchBar