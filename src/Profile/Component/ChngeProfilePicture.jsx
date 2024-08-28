import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ChngeProfilePicture({ onClose }) {
    const [form, setForm] = useState({
        name: '',
        position: '',
        image: null,
        imageName: '',
        imageSize: '',
        status: '',
        bio: ''
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
            <h2 style={{ margin: '2% 0 5% 2%' }}>Update Basic Profile</h2>

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
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    style={{ marginTop: '16px' }}
                />

                <TextField
                    id="outlined-email"
                    label="Position"
                    variant="outlined"
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    style={{ marginTop: '16px' }}
                />

                <TextField
                    id="outlined-phone"
                    label="Short Description of Yourself"
                    variant="outlined"
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    style={{ marginTop: '16px' }}
                    minRows={2}
                    multiline
                />

                <FormControl sx={{ margin: '16px', minWidth: 120 }} size="small">
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                        labelId="status-label"
                        id="status-select"
                        name="status"
                        value={form.status}
                        label="Status"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Alumni"}>Alumni</MenuItem>
                        <MenuItem value={"Student"}>Student</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    sx={{ margin: '2% 0 5% 25%', width: '50%' }}
                    onClick={handleSubmit}
                >
                    Update
                </Button>
            </div>
        </div>
    );
}

export default ChngeProfilePicture;
