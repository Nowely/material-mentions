import {useState} from 'react'
import {MaterialMentions} from "./MaterialMentions";

function App() {
    const [value, setValue] = useState(
        `Enter the '@' for calling mention list: \n- Hello @[Agustina](A) and @[Frank Parker](FP)!`
    )

    return (
        <div className="App">
            <MaterialMentions value={value} onChange={setValue}/>
            {/*<MarkedInput
                Mark={Chip}
                value={value}
                onChange={(val: string) => setValue(val)}
                Overlay={UserList}
            >
                <Option<ChipProps>
                    initMark={({label, value}) => ({label, avatar: <Avatar>{value}</Avatar>, size: "small"})}
                />
            </MarkedInput>*/}
        </div>
    )
}

export default App