//Component based on https://mui.com/material-ui/react-list/#align-list-items
import React, {ForwardedRef, forwardRef} from "react";
import {OverlayProps} from "rc-marked-input/types/types";
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";

export const Users = ({onSelect}: OverlayProps) => {

    return (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <ListItem alignItems="flex-start" onClick={() => onSelect({label: "Remy Sharp", value: "RS"})}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" children="RS"/>
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem alignItems="flex-start" onClick={() => onSelect({label: "Travis Howard", value: "TH"})}>
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" children="TH"/>
                </ListItemAvatar>
                <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem alignItems="flex-start" onClick={() => onSelect({label: "Cindy Baker", value: "CB"})}>
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" children="CB"/>
                </ListItemAvatar>
                <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                        </>
                    }
                />
            </ListItem>
        </List>
    );
}