import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputBase from '@mui/material/InputBase';
import {styled} from '@mui/material/styles';


const InputSelect = ({options, className, defaultValue, setState, value, width}) => {
    console.log(width);

    const BootstrapInput = styled(InputBase)(({theme}) => ({
        'label + &': {
            marginTop: theme.spacing(3),
            width: `${width}`,
        },
        '& .MuiInputBase-input': {
            borderRadius: 6,
            position: 'relative',
            backgroundColor: "#F7F7F6",
            border: '1px solid #1D5891',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
            '&:focus': {
                borderRadius: 6,
            },
        },
    }));


    const optionItems = options?.map((item, index) => {
        return (
            <MenuItem key={`${index}`} sx={{width: `${width}`}} value={item}
                      className='bg-lime-500 z-50'>{item}</MenuItem>
        )
    });

    const handleChange = (event) => {
        setState(event.target.value)
    }

    return (
        <>
            <Select
                value={value}
                onChange={handleChange}
                className={`bg-transparent border-0 ${className}`}
                sx={{width: `${width}`}}
                input={<BootstrapInput/>}
                defaultValue={defaultValue ? defaultValue : ""}
                IconComponent={ExpandMoreIcon}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            bgcolor: 'transparent',
                            boxShadow: "none",
                            paddingX: "10px",
                            zIndex: 100000000,
                            '& .MuiPaper-root': {
                                left: "0px",
                            },
                            '& .MuiList-root': {
                                padding: 0,
                                width: {width},
                            },
                            '& .MuiMenuItem-root': {
                                color: "#7D7D92",
                                paddingX: 1,
                                marginTop: "5px",
                                marginBottom: "5px",
                                bgcolor: "#F7F7F6",
                                border: 1,
                                borderColor: "#E8E8E8",
                                borderRadius: "6px",
                                boxShadow: "1px 1px 4px #babac4",
                                '&:hover': {
                                    bgcolor: "#175088",
                                    color: "white"
                                }
                            },
                        },
                    },
                }}
            >
                {optionItems}
            </Select>
        </>
    )
}

export default InputSelect
