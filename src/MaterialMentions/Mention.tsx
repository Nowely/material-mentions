import {MarkProps} from "rc-marked-input/types/types";
import {Avatar, Chip} from "@mui/material";
import {useEffect, useState} from "react";
import {User} from "./UserList/UserItem";
import {getAbbr} from "./utils/getAbbr";


export const Mention = ({label}: MarkProps) => {
    const [user, setUser] = useState<User | null>(null)
    const abbr = getAbbr(user?.name) ?? label[0]

    useEffect(() => {
        const abortController = new AbortController();
        fetch(`https://api.github.com/users/${label}`, {signal: abortController.signal})
            .then(res => res.json())
            .then(setUser)
            //.catch(reason => console.error(reason))

        return () => abortController.abort()
    }, [])

    return <Chip label={label} size="small" avatar={<Avatar src={user?.avatar_url} children={abbr}/>}/>
}