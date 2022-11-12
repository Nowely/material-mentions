import {createMarkedInput} from "rc-marked-input";
import {Avatar, Chip, ChipProps} from "@mui/material";
import {UserList} from "./UserList";

export const MaterialMentions = createMarkedInput(Chip, UserList, [{
    initMark: ({label, value}) =>
        ({label, avatar: <Avatar src={value}>{value}</Avatar>, size: "small" as ChipProps['size']})
}])