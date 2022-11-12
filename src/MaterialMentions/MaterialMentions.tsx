import {createMarkedInput} from "rc-marked-input";
import {Avatar, Chip, ChipProps} from "@mui/material";
import {Users} from "./Users";

export const MaterialMentions = createMarkedInput(Chip, Users, [{
    initMark: ({label, value}) => ({label, avatar: <Avatar>{value}</Avatar>, size: "small" as ChipProps['size']})
}])