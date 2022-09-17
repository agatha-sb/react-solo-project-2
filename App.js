import React from "react";
import Entries from "./components/Entries"
import Header from "./components/Header"
import data from "./data"
// import  from "./images"

export default function App()   {
    const entries = data.map(entry => {
        return (
            <Entries 
                key={entry.id}
                {...entry}
            />
        )
    })
    
    console.log(entries)
    return  (
        <div>
            <Header />
            <section className="container">
                {entries}
            </section>
        </div>
    )
}