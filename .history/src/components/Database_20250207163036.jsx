import React from "react";
import Auth from "./Auth";
import { db } from "../config/firebase";
import { useState } from "react";

function Database() {
    const [article, setMovieList] = useState([]);

    return (
        <div>
            <Auth/>
        </div>
    )
}

export default Database;