import React, {useState, useEffect} from 'react'

interface User {
    bio: string;
    company: string;
}

const Details = () => {
    const [user, setUser] = useState({} as User);
    // get user data
    useEffect(() => {
        fetch("https://api.github.com/users/kressnick25")
            .then((res) => {
                if (res.ok) return res.json();
                throw new Error("failed to fetch");
            })
            .then(res => setUser(res))
            .catch(err => console.log(err.message));
    }, []);

    if (!user) return <p>Loading...</p>
    return <p>{user.bio} at {user.company}</p>
}

export {
    Details
}