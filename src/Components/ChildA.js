import React, { memo } from 'react'

function ChildA({ Learning }) {
    console.log('----this is child component', Learning)
    return (
        <div>
            <h2>this is child components</h2>
        </div>
    )
}

export default memo(ChildA)
