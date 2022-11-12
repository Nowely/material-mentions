import {OverlayProps} from "rc-marked-input/types/types";
import {Divider, List} from "@mui/material";
import {User, UserItem} from "./UserItem";
import {Fragment, useEffect, useState} from "react";

export const UserList = ({onSelect, trigger}: OverlayProps) => {
    const [data, setData] = useState<User[]>([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        //setLoading(true);
        fetch(`https://api.github.com/search/users?q=${trigger.value}`, {signal: abortController.signal})
            .then(res => res.json())
            .then(({items = []}) => {
                setData(items.slice(0, 10).map((i: any) => ({login: i.login, name: i.name, bio: i.bio, avatarUrl: i.avatar_url})))
            })
            .catch(reason => console.error(reason))
        //.finally(() => setLoading(false))


        return () => abortController.abort()
    }, [trigger.value])

    if (data.length === 0) return <div>Not found!</div>

    return (
        <List sx={{maxWidth: 360}}>
            {data.map(({login, name, bio, avatarUrl}) => (
                <Fragment key={login}>
                    <UserItem
                        onSelect={onSelect}
                        login={login}
                        name={name}
                        bio={bio}
                        avatarUrl={avatarUrl}
                    />
                    <Divider variant="inset" component="li"/>
                </Fragment>
            ))}
        </List>
    )
}