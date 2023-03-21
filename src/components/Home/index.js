import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { visitedCourse, coursePercent } from "../../redux/courses/coursesSlice"
import { Container, Grid, Card, CardActions, CardContent, Button, Typography, Box, Tooltip, IconButton } from '@mui/material';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Header from "../Header";
import useStyles from "./styles";

function Home() {
  //Get the state from redux store using `useSelector` hook.
  const courses = useSelector((state) => state.courses.courses)
  const progressPercent = useSelector((state) => state.courses.progressPercent);
  const dispatch = useDispatch();
  const classes = useStyles(); //Custom styles

  //1. This method helpful for updating the state by dispatching an action `visitedCourse`.
  //2. This will mark the Course status as completed once student visits the course and learn required modules.

  const handleNavigation = courseId => {
    const updatedSteps = courses.map(item => {
      if (item.id === courseId) {
        return { ...item, isVisited: true };
      }
      return item;
    })

    const { isVisited } = courses.filter((course) => course.id === courseId)[0]

    dispatch(visitedCourse(updatedSteps))
    dispatch(coursePercent(isVisited ? progressPercent : (progressPercent + 20)))

  };

  //Click on `Learn More` button to visit the course details.
  //Hover on icons in the Lesson card to see their statuses

  return (
    <>
      <Header />
      <Container sx={{ paddingBottom: '35px', paddingTop: '35px' }}>
        {/* <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: '30px' }}>Learning Path</Typography> */}
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {courses.map((course) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Card key={course.id} className={classes.lessonCard}>
                  <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {`Lesson-${course.id}`}
                      </Typography>
                      {course.isVisited ? (
                        <Tooltip title="Completed">
                          <IconButton>
                            <AssignmentTurnedInIcon color="success" />
                          </IconButton>
                        </Tooltip>
                      ) : (
                        <Tooltip title="In progress">
                          <IconButton>
                            <RotateLeftIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {course.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <NavLink
                      exact to={`/course/${course.id}`}
                      onClick={() => handleNavigation(course.id)}
                    >
                      <Button size="small">Learn More</Button>
                    </NavLink>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container >
    </>

  );
}
export default Home;
