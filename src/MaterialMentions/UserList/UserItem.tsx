import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {getAbbr} from "../utils/getAbbr";

export interface UserItemProps {
    onSelect: (mark: { label: string, value?: string }) => void
    user: User
}

export type User = {
    avatar_url?: string
    login: string
    name?: string
    bio?: string
}

export const UserItem = ({onSelect, user}: UserItemProps) => {
    const abbr = getAbbr(user.name) ?? user.login[0]

    return (
        <ListItem onClick={() => onSelect({label: user.login, value: user.avatar_url ?? abbr})}>
            <ListItemAvatar>
                <Avatar src={user.avatar_url} children={abbr}/>
            </ListItemAvatar>
            <ListItemText
                primary={user.login}
                secondary={
                    <>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {user.name}
                        </Typography>
                        <br/>
                        {user.bio}
                    </>
                }>
            </ListItemText>
        </ListItem>
    )
}

