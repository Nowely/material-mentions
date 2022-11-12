import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";

export interface UserItemProps {
    onSelect: (mark: { label: string, value?: string }) => void
    avatarUrl?: string
    login: string
    name?: string
    bio?: string
}

export type User = Omit<UserItemProps, 'onSelect'>

export const UserItem = ({onSelect, login, bio, name, avatarUrl}: UserItemProps) => {
    const avatarAlt = name?.split(' ').slice(0, 3).map(value => value[0]).join('') ?? login[0]

    return (
        <ListItem onClick={() => onSelect({label: login, value: avatarUrl ?? avatarAlt})}>
            <ListItemAvatar>
                <Avatar src={avatarUrl} children={avatarAlt}/>
            </ListItemAvatar>
            <ListItemText
                primary={login}
                secondary={
                    <>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {name}
                        </Typography>
                        <br/>
                        {bio}
                    </>
                }>
            </ListItemText>
        </ListItem>
    )
}