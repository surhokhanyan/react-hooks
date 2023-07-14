import React, {useEffect, useState, useTransition} from 'react';
import Comments from "./comments/Comments";

const filterBySearch = (entities, search) => entities.filter(item => item.name.concat(item.body).includes(search))

const UseTransition = () => {
    const [isPending, startTransition] = useTransition();
    const [search, setSearch] = useState("")
    const [comments, setComments] = useState([]);

    const handleSearch = e => {
        startTransition(()=> {
            setSearch(e.target.value)
        })
        // setSearch(e.target.value)
    }

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json()).then(setComments)
    })

    return (
        <div>
            <input type="text" onChange={handleSearch}/>
            {isPending && (
                <h1>Rendering...</h1>
            )}
            <Comments entities={filterBySearch(comments, search)}/>
        </div>
    );
};

export default UseTransition;