import React, { useMemo, useState } from 'react'

function Usememohook() {
    const [add, setAdd] = useState(0)
    const [sub, setSub] = useState(100)


    const multiplication = useMemo(() => {
        console.log('--------')
        return add * 10
    }, [add])

    return (
        <div>
            <h1>Learn useMemo Hook</h1>
            <h2>multiply:{multiplication}</h2>
            <button onClick={() => setAdd(add + 1)}>add</button>
            <button onClick={() => setSub(sub - 1)}>sub</button>
        </div>
    )
}

export default Usememohook
