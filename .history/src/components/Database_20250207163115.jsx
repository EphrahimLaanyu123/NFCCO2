import React from "react";
import Auth from "./Auth";
import { db } from "../config/firebase";
import { useState } from "react";

function Database() {
    const [article, setArticle] = useState([]);

    const getArticle = async () => {
        try {
          const data = await getDocs(moviesCollectionRef);
          const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setMovieList(filteredData);
        } catch (err) {
          console.error(err);
        }
      };
    
      useEffect(() => {
        getMovieList();
      }, []);
    

    return (
        <div>
            <Auth/>
        </div>
    )
}

export default Database;