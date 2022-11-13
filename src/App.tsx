import {useState} from 'react'
import {MaterialMentions} from "./MaterialMentions";

function App() {
    const [value, setValue] = useState(
        `Enter the '@' for calling mention list: \n- Hello @[Agustina] and @[Ruslan]!`
    )

    return (
        <div className="App">
            <MaterialMentions value={value} onChange={setValue}/>
        </div>
    )
}

export default App