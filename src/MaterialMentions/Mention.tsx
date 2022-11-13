import {MarkProps} from "rc-marked-input/types/types";
import {Avatar, Chip} from "@mui/material";
import {useState} from "react";
import {User} from "./UserList/UserItem";
import {getAbbr} from "./utils/getAbbr";
import {useFetch} from "./utils/useFetch";


export const Mention = ({label}: MarkProps) => {
    const [user, setUser] = useState<User | null>(null)
    const abbr = getAbbr(user?.name) ?? label[0]

    useFetch(`https://api.github.com/users/${label}`, setUser, [])

    return <Chip variant="outlined" label={label} size="small" avatar={<Avatar src={user?.avatar_url} children={abbr}/>}/>
}