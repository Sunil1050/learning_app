import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { visitedCourse } from "../../redux/courses/coursesSlice"
import { Container, Grid, Card, CardActions, CardContent, Button, Typography, Box, Tooltip, IconButton } from '@mui/material';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import useStyles from "./styles";

function Home() {
  //Get the state from redux store using `useSelector` hook.
  const courses = useSelector((state) => state.courses.courses)
  const dispatch = useDispatch();
  const classes = useStyles(); //Custom styles

  //1. This method helpful for updating the state by dispatching an action `visitedCourse`.
  //2. This will mark the Course status as completed once student visits the course and learn required modules.

  const handleNavigation = stepId => {
    const updatedSteps = courses.map(item => {
      if (item.id === stepId) {
        return { ...item, isVisited: true };
      }
      return item;
    })
    dispatch(visitedCourse(updatedSteps))

  };

  //Click on `Learn More` button to visit the course details.
  //Hover on icons in the Lesson card to see their statuses

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: '50px' }}>Learning Path</Typography>
      <Grid container rowSpacing={3}>
        {courses.map((course) => {
          return (
            < Grid item xs={12} sm={12} md={4} >
              <Card sx={{ maxWidth: 345 }} key={course.id} className={classes.lessonCard}>
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
  );
}
export default Home;
