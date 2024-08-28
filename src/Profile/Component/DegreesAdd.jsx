import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function DegreesAdd({ onClose }) {

    const [form, setForm] = useState({
        description: '',
        image: null,
        imageURL: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setForm(prevForm => ({
                ...prevForm,
                image: file,
                imageURL: URL.createObjectURL(file),
            }));
        }
    };

    const handleRemoveImage = () => {
        setForm(prevForm => ({
            ...prevForm,
            image: null,
            imageURL: '', // Reset the image URL
        }));
    };

    const handleSubmit = () => {
        console.log(form);
        onClose(); // Close the modal after updating
    };


    return (
        <div>
            <h2 style={{ margin: '2% 0 5% 2%' }}>Add Degree</h2>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80%',
                    marginLeft: '10%'
                }}
            >
                <div
                    style={{
                        border: '2px dashed',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: '2%',
                        position: 'relative'
                    }}
                >

                    {/* Display Image in Avatar with Remove Button */}
                    {form.image ? (
                        <>
                            <Avatar
                                src={form.imageURL}
                                alt="Uploaded Image"
                                sx={{ width: 100, height: 100, margin: '5px' }}
                                variant="square"
                            />
                            <IconButton
                                onClick={handleRemoveImage}
                                sx={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    backgroundColor: '#780000',
                                    '&:hover': { background: 'black' }
                                }}
                            >
                                <CloseIcon sx={{ fontSize: 'small', color: '#ffffff' }} />
                            </IconButton>
                        </>
                    ) : (
                        <Avatar
                            sx={{ width: 100, height: 100, margin: '5px' }}
                            variant="square"
                        />
                    )}
                    
                    {/* Custom File Input */}
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="contained-button-file"
                        type="file"
                        onChange={handleImageChange}
                    />
                    <label htmlFor="contained-button-file">
                        <Button
                            variant="contained"
                            color="primary"
                            component="span"
                            sx={{ margin: '10% 0', width: '100%' }}>
                            Upload Image
                        </Button>
                    </label>
                </div>

                <TextField
                    id="outlined-position"
                    label="Degree, Institute, Passing Year"
                    variant="outlined"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    style={{ marginTop: '16px' }}
                />

                <Button
                    variant="contained"
                    sx={{ margin: '2% 0 5% 25%', width: '50%' }}
                    onClick={handleSubmit}
                >
                    Update
                </Button>
            </div>
        </div>
    )
}

export default DegreesAdd