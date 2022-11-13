import {Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";

export interface UserItemProps {
    onSelect: (mark: { label: string, value?: string }) => void
    user: SearchUser
}

export type SearchUser = Pick<User, 'login' | 'avatar_url'>

export type User = {
    avatar_url?: string
    login: string
    name?: string
    bio?: string
}

export const UserItem = ({onSelect, user}: UserItemProps) => {
    const abbr = user.login[0]

    return (
        <ListItem disablePadding onClick={() => onSelect({label: user.login, value: user.avatar_url ?? abbr})}>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar src={user.avatar_url} children={abbr}/>
                </ListItemAvatar>
                <ListItemText primary={user.login}/>
            </ListItemButton>
        </ListItem>
    )
}

