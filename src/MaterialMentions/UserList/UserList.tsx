import {Fragment, useEffect, useState} from "react";
import {OverlayProps} from "rc-marked-input/types/types";
import {Divider, List} from "@mui/material";
import {User, UserItem} from "./UserItem";

export const UserList = ({onSelect, trigger, style}: OverlayProps) => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!trigger.value) return
        const abortController = new AbortController();
        //setLoading(true);
        fetch(`https://api.github.com/search/users?q=${trigger.value}`, {signal: abortController.signal})
            .then(res => res.json())
            .then(({items = []}) => setUsers(items))
            //.catch(reason => console.error(reason))
        //.finally(() => setLoading(false))


        return () => abortController.abort()
    }, [trigger.value])

    //if (users.length === 0) return <div>Not found!</div>

    return (
        <List sx={{width: '100%', maxWidth: 260, maxHeight: 300, overflow: 'auto', position: 'absolute', }}>
            {users.map(user => (
                <Fragment key={user.login}>
                    <UserItem onSelect={onSelect} user={user}/>
                    <Divider variant="inset" component="li"/>
                </Fragment>
            ))}
        </List>
    )
}