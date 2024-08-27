import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function DegreesAdd({ onClose }) {

    const [form, setForm] = useState({
        description: '',
        image: null,
        imageName: '',
        imageSize: '',
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
                imageName: file.name,
                imageSize: (file.size / 1024).toFixed(2) + ' KB' // Size in KB
            }));
        }
    };

    const handleSubmit = () => {
        console.log(form);
        onClose(); // Close the modal after updating
    };


    return (
        <div>
            <h2 style={{ margin: '2% 0 5% 2%' }}>Update Degree</h2>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80%',
                    marginLeft: '10%'
                }}
            >
                <div style={{ border: '2px dashed', display: 'flex', flexDirection: 'column', marginBottom: '2%' }}>
                    {/* Display Image Name and Size */}
                    {form.image ?
                        (
                            <div style={{ marginBottom: '20px' }}>
                                <p style={{ textAlign: 'center', marginTop: '2%' }}><strong>File Name:</strong> {form.imageName}</p>
                                <p style={{ textAlign: 'center' }}><strong>File Size:</strong> {form.imageSize}</p>
                            </div>
                        )
                        :
                        (
                            <div style={{ marginBottom: '20px' }}>
                                <p style={{ textAlign: 'center', marginTop: '2%' }}><strong>File Name:</strong></p>
                                <p style={{ textAlign: 'center' }}><strong>File Size:</strong></p>
                            </div>
                        )
                    }

                    {/* Custom File Input */}
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="contained-button-file"
                        type="file"
                        onChange={handleImageChange}
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span" sx={{ margin: '0 0 2% 25%', width: '50%' }}>
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