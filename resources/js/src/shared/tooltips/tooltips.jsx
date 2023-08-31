import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import "./tooltips.css"

const Tooltips = ({title, children}) => {
    return (
        <>
            <Tooltip
                title={title}
                arrow
                componentsProps={{
                    tooltip: {
                        sx: {
                            bgcolor: '#C8C8C8',
                            border: 1,
                            color: "black",
                            borderColor: "black",
                            '& .MuiTooltip-arrow': {
                                color: '#C8C8C8',
                            },
                        },
                    },
                }}
            >
                <span>{children}</span>
            </Tooltip>
        </>
    )
}

export default Tooltips