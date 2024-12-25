import React, { useState } from 'react';
import { Dialog, CardContent, TextField, Button } from '@mui/material';

const AddCourseDialog = ({ open, onClose, onAddCourse }) => {
  const [course, setCourse] = useState({ name: '', code: '', credits: '', description: '', imageUrl: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleAddCourse = () => {
    onAddCourse(course);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <CardContent>
        <TextField label="Course Name" name="name" onChange={handleChange} fullWidth />
        <TextField label="Course Code" name="code" onChange={handleChange} fullWidth />
        <TextField label="Credits" name="credits" onChange={handleChange} fullWidth />
        <TextField label="Description" name="description" onChange={handleChange} fullWidth />
        <TextField label="Image URL" name="imageUrl" onChange={handleChange} fullWidth />
        <Button onClick={handleAddCourse}>Add Course</Button>
      </CardContent>
    </Dialog>
    
  );
};

export default AddCourseDialog;
