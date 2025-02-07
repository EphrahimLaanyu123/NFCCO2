import React from "react";
import Auth from "./Auth";
import { db } from "../config/firebase";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore"

function Database() {
    const [article, setArticle] = useState([]);
    const articlecollectionRef = collection(db, "articles");

    const getArticle = async () => {
        try {
          const data = await getDocs(articlecollectionRef);
          const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setArticle(filteredData);
        } catch (err) {
          console.error(err);
        }
      };
    
      useEffect(() => {
        getArticle();
      }, []);
    

    return (
        <div>
            <Auth/>
            <div>
                <div>
                {article.map((article) => (
                    <div>
                    <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
                        {.title}
                    </h1>
                    <p> Date: {article.releaseDate} </p>

                    <button onClick={() => deleteMovie(movie.id)}> Delete Movie</button>

                    <input
                        placeholder="new title..."
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                    />
                    <button onClick={() => updateMovieTitle(movie.id)}>
                        {" "}
                        Update Title
                    </button>
                    </div>
                ))}
                </div>
                )}
            </div>
        </div>
    )
}

export default Database;