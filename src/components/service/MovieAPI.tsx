import { useState } from "react";
import { Movies } from "../../types/Types";



export async function getMoviebyTitle(movieTitle:string ):Promise<Movies[] |null> {

    const API_KEY = "34e15e4e";

    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${movieTitle}&apikey=${API_KEY}`)
        const data = await response.json();

        if (data.Response === "False") {
            return null;
        } else {
            return data.Search.slice(0, 5);  // Limita a 5 resultados
        }
    } catch (err) {
        return null;
    }
}

export async function getMovieById(movieId:string ):Promise<Movies | null> {


    const API_KEY = "34e15e4e";

    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`)

        const data = await response.json();

        if (data.Response === "False") {
            return null;
        } else {
            return data;
        }
    } catch (err) {
        return null;
    }
}