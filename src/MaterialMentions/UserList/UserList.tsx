import {useState} from "react";
import {OverlayProps} from "rc-marked-input/types/types";
import {List, Paper} from "@mui/material";
import {SearchUser, UserItem} from "./UserItem";
import {useFetch} from "../utils/useFetch";

export const UserList = ({onSelect, trigger: {value}, style}: OverlayProps) => {
    const [users, setUsers] = useState<SearchUser[]>([])

    useFetch(`https://api.github.com/search/users?q=${value}`, ({items = []}) => setUsers(items), [value])

    if (users.length === 0) return null

    return (
        <Paper elevation={3}
               sx={{width: '100%', maxWidth: 280, maxHeight: 260, overflow: 'auto', position: 'absolute', top: style.top}}>
            <List dense>
                {users.map(user => (<UserItem key={user.login} onSelect={onSelect} user={user}/>))}
            </List>
        </Paper>
    )
}