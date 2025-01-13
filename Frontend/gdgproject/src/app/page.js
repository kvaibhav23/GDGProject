"use client";
import React, { useState } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CourseDetailsDialog from "../components/CourseDetailsDialog";
import AddCourseDialog from "../components/AddCourseDialog";

const LandingPage = () => {
  const [courses, setCourses] = useState([
    {
      name: "ECONOMY, SOCIETY AND PUBLIC POLICY",
      code: "ECO111",
      credits: 9,
      description: "An Introductory Course on Macroeconomics",
      imageUrl: "/images/images.png", 
    },
    {
      name: "DATA STRUCTURES AND ALGORITHMS",
      code: "ESO207",
      credits: 11,
      description: "Learn about arrays, linked lists and more.",
      imageUrl: "/images/channels4_profile.jpg",
    },
    {
      name: "MECHANICS OF SOLIDS",
      code: "ESO202",
      credits: 11,
      description: "Introduction to mechanics of deformable solid bodies..",
      imageUrl: "/images/gears.jpg",
    },
    {
      name: "COMPUTATIONAL METHODS",
      code: "MSE204",
      credits: 9,
      description: "Learn about various Statistical Methods.",
      imageUrl: "/images/1_c_fiB-YgbnMl6nntYGBMHQ.jpg",
    },
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isDetailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [isAddCourseDialogOpen, setAddCourseDialogOpen] = useState(false);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setDetailsDialogOpen(true);
  };

  const handleAddCourseClick = () => {
    setAddCourseDialogOpen(true);
  };

  const handleAddCourse = (course) => {
    setCourses([...courses, course]);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            COURSE HELPER
          </Typography>
          <Button color="inherit" href="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} style={{ padding: 24 }}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.code}>
            <Card
              onClick={() => handleCourseClick(course)}
              style={{ cursor: "pointer" }}
            >
              <CardMedia
                component="img"
                height="140"
                image={course.imageUrl || "/images/default-course.jpg"} 
                alt={course.name}
              />
              <CardContent>
                <Typography variant="h6">{course.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Code: {course.code}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Credits: {course.credits}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {course.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircleIcon />}
            onClick={handleAddCourseClick}
          >
            Add Course
          </Button>
        </Grid>
      </Grid>
      {selectedCourse && (
        <CourseDetailsDialog
          course={selectedCourse}
          open={isDetailsDialogOpen}
          onClose={() => setDetailsDialogOpen(false)}
        />
      )}
      <AddCourseDialog
        open={isAddCourseDialogOpen}
        onClose={() => setAddCourseDialogOpen(false)}
        onAddCourse={handleAddCourse}
      />
    </div>
  );
};

export default LandingPage;
