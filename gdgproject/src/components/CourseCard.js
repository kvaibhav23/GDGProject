import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import CourseIcon from '@mui/icons-material/School';

const CourseCard = ({ course, onClick }) => (
  <Card onClick={() => onClick(course)}>
    <CardContent>
      <Typography variant="h5">{course.name}</Typography>
      <Typography variant="body2">{course.code}</Typography>
      <Typography variant="body2">Credits: {course.credits}</Typography>
      <Typography variant="body2">{course.description}</Typography>
      {course.imageUrl && (
        <img src={course.imageUrl} alt={course.name} style={{ width: '100%', height: 'auto' }} />
      )}
      <CourseIcon />
    </CardContent>
  </Card>
);

export default CourseCard;
