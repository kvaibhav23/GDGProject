import React from 'react';
import { Dialog, CardContent, Typography, TextField, Button } from '@mui/material';

const CourseDetailsDialog = ({ course, open, onClose, onUpdate, onDelete }) => (
  <Dialog open={open} onClose={onClose}>
    <CardContent>
      <Typography variant="h4">Course Details</Typography>
      <TextField
        label="Course Name"
        defaultValue={course.name}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Course Code"
        defaultValue={course.code}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Credits"
        type="number"
        defaultValue={course.credits}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        defaultValue={course.description}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <TextField
        label="Image URL"
        defaultValue={course.imageUrl}
        fullWidth
        margin="normal"
      />
      {course.imageUrl && (
        <img
          src={course.imageUrl}
          alt={course.name}
          style={{ width: '100%', marginTop: 16 }}
        />
      )}
      <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="primary" onClick={onUpdate}>
          Update
        </Button>
        <Button variant="contained" color="secondary" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </CardContent>
  </Dialog>
);

export default CourseDetailsDialog;