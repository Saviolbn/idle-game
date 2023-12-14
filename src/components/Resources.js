import React, { useState } from 'react'

export const Resources = () => {
        const [clicks,setClicks] = useState(0)
    return (
        <div>{clicks}</div>
    )
}

