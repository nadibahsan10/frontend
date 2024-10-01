import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Job() {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Intern wanted
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          XYZ
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit eos omnis iste molestias eaque at aperiam
          voluptas in aliquam? Harum delectus ratione iusto!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Job;
