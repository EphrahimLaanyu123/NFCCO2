import React from "react";
import Auth from "./Auth";
import { db } from "../config/firebase";
import use

function Database() {
    const [movieList, setMovieList] = useState([]);

    return (
        <div>
            <Auth/>
        </div>
    )
}

export default Database;