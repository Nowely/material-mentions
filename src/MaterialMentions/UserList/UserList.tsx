import {OverlayProps} from "rc-marked-input/types/types";
import {Divider, List} from "@mui/material";
import {UserItem} from "./UserItem";

const users = [{
    avatar: 'RS',
    avatarAlt: 'Remy Sharp',
    title: "Brunch this weekend?",
    primary: 'Ali Connors',
    secondary: " — I'll be in your neighborhood doing errands this…",
}, {
    avatar: 'TH',
    avatarAlt: 'Travis Howard',
    title: "Summer BBQ?",
    primary: 'to Scott, Alex, Jennifer',
    secondary: " — Wish I could come, but I'm out of town this…",
}, {
    avatar: 'CB',
    avatarAlt: 'Cindy Baker',
    title: "Oui Oui",
    primary: 'Sandra Adams',
    secondary: "  — Do you have Paris recommendations? Have you ever…",
}]

export const UserList = ({onSelect}: OverlayProps) => {

    return (
        <List sx={{maxWidth: 360}}>
            {users.map(({avatar, avatarAlt, title, primary, secondary}) => (
                <>
                    <UserItem
                        onClick={() => onSelect({label: avatarAlt, value: avatar})}
                        avatar={avatar}
                        avatarAlt={avatarAlt}
                        title={title}
                        primary={primary}
                        secondary={secondary}
                    />
                    <Divider variant="inset" component="li"/>
                </>
            ))}
        </List>
    )
}