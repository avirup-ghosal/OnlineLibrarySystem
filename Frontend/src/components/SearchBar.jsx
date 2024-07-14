import {FaSearch} from "react-icons/fa";
export function SearchBar(){
    return(
        <div className="search-bar-container" style={{paddingTop:"20vh",
            width:"40%",
            margin:"auto",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            minWidth:"200px"
        }}>
            <div className="input-wrapper">
                <FaSearch id="search-icon"/>
                <input placeholder="Type to search..." />
                </div>
            <div>SearchResults</div>
        </div>
    )

}