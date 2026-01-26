import React from 'react'
export const fetchJoke = async () => {

    try {
        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );


        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching joke:", error);
        return null;
    }
};

