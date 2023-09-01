import React from 'react'
import {assets} from '@/assets';
const Icon = ({ className, srcStyle}) => {
    return (
        <>
            <span className={`icon ${className}`} style={srcStyle}/>
        </>
    )
}

export default Icon
