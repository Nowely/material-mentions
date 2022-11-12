import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";

interface UserItemProps {
    onClick: () => void
    avatar: string
    avatarAlt: string
    title: string
    primary: string
    secondary: string
}

export const UserItem = ({onClick, avatar, avatarAlt, title, secondary, primary}: UserItemProps) => {

    return (
        <ListItem onClick={onClick}>
            <ListItemAvatar>
                <Avatar alt={avatarAlt} children={avatar}/>
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={
                    <>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {primary}
                        </Typography>
                        {secondary}
                    </>
                }>
            </ListItemText>
        </ListItem>
    )
}