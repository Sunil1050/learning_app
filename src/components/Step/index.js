import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import { Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import useStyles from "./style";

const Step = () => {
  //Get the state from store
  const courses = useSelector((state) => state.courses.courses)

  //Get Id using `useParams` from react-router-dom to filter the required course details.

  const { id } = useParams();
  const course = courses.find((s) => s.id === parseInt(id));
  const classes = useStyles(); //Custom CSS

  return (
    <Container sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
      <Typography variant="h4" gutterBottom>
        {course.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {course.description}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Resources:
      </Typography>
      <Grid container rowSpacing={2}>
        {course.resources.map((eachRes) => {
          return (
            < Grid item xs={12} sm={12} md={4} >
              <Card sx={{ maxWidth: 345 }} key={course.id} className={classes.resourceCard}>
                <CardMedia
                  component='iframe'
                  src={eachRes.url}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {eachRes.type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {eachRes.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
};

export default Step;
