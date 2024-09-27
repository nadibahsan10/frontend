import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import MoreIcon from "@mui/icons-material/More";
import ShareIcon from "@mui/icons-material/Share";
import WorkIcon from "@mui/icons-material/Work";
import ListIcon from "@mui/icons-material/List";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function IndividualJobDescription({ job }) {
  if (!job) {
    return (
      <Box>
        <Typography variant="h6">Select a job to view details</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography variant="h4" color="text.secondary" gutterBottom>
            {job.company}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          container
          justifyContent="flex-end"
          alignItems="center"
        >
          <MoreIcon color="primary" />
        </Grid>
        <Grid
          item
          xs={1}
          container
          justifyContent="flex-end"
          alignItems="center"
        >
          <ShareIcon color="primary" />
        </Grid>
      </Grid>

      <Typography variant="h3" gutterBottom>
        {job.title}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography variant="body1">
            {" "}
            {job.location} . 2 days ago . 61 applicants
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          container
          justifyContent="flex-end"
          alignItems="center"
        ></Grid>
        <Grid
          item
          xs={1}
          container
          justifyContent="flex-end"
          alignItems="center"
        ></Grid>
      </Grid>

      <Grid container spacing={0}>
        <Grid item xs={1}>
          <WorkIcon color="primary" />
        </Grid>
        <Grid
          item
          xs={8}
          container
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="body1">
            Remote . Part-Time . Entry level
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          container
          justifyContent="flex-end"
          alignItems="center"
        ></Grid>
      </Grid>

      <Grid container spacing={0}>
        <Grid item xs={1}>
          <ListIcon color="primary" />
        </Grid>
        <Grid
          item
          xs={8}
          container
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="body1">
            Skills: Communication, Cultural Affairs, English writing, and Search
            Engines
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          container
          justifyContent="flex-end"
          alignItems="center"
        ></Grid>
      </Grid>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        About The Job :
      </Typography>

      <Typography variant="body2" sx={{ marginTop: 1 }}>
        {job.company} is looking for {job.title} <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod autem
        odio distinctio, esse, saepe culpa quos eos repudiandae suscipit
        reiciendis corporis ab dolores exercitationem sunt nam vel delectus
        voluptate non! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptatibus earum reiciendis eaque dignissimos, distinctio atque iste
        sed dolore placeat assumenda deleniti aliquam explicabo? Ut repudiandae
        veniam accusantium a, repellendus assumenda. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Sequi nobis possimus repellat consequatur
        eveniet deleniti nulla magni, earum dolorum accusamus voluptate nihil
        exercitationem optio nam delectus laudantium, similique maiores cum.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod autem
        odio distinctio, esse, saepe culpa quos eos repudiandae suscipit
        reiciendis corporis ab dolores exercitationem sunt nam vel delectus
        voluptate non! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptatibus earum reiciendis eaque dignissimos, distinctio atque iste
        sed dolore placeat assumenda deleniti aliquam explicabo? Ut repudiandae
        veniam accusantium a, repellendus assumenda. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Sequi nobis possimus repellat consequatur
        eveniet deleniti nulla magni, earum dolorum accusamus voluptate nihil
        exercitationem optio nam delectus laudantium, similique maiores cum.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod autem
        odio distinctio, esse, saepe culpa quos eos repudiandae suscipit
        reiciendis corporis ab dolores exercitationem sunt nam vel delectus
        voluptate non! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptatibus earum reiciendis eaque dignissimos, distinctio atque iste
        sed dolore placeat assumenda deleniti aliquam explicabo? Ut repudiandae
        veniam accusantium a, repellendus assumenda. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Sequi nobis possimus repellat consequatur
        eveniet deleniti nulla magni, earum dolorum accusamus voluptate nihil
        exercitationem optio nam delectus laudantium, similique maiores cum.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod autem
        odio distinctio, esse, saepe culpa quos eos repudiandae suscipit
        reiciendis corporis ab dolores exercitationem sunt nam vel delectus
        voluptate non! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptatibus earum reiciendis eaque dignissimos, distinctio atque iste
        sed dolore placeat assumenda deleniti aliquam explicabo? Ut repudiandae
        veniam accusantium a, repellendus assumenda. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Sequi nobis possimus repellat consequatur
        eveniet deleniti nulla magni, earum dolorum accusamus voluptate nihil
        exercitationem optio nam delectus laudantium, similique maiores cum.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod autem
        odio distinctio, esse, saepe culpa quos eos repudiandae suscipit
        reiciendis corporis ab dolores exercitationem sunt nam vel delectus
        voluptate non! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptatibus earum reiciendis eaque dignissimos, distinctio atque iste
        sed dolore placeat assumenda deleniti aliquam explicabo? Ut repudiandae
        veniam accusantium a, repellendus assumenda. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Sequi nobis possimus repellat consequatur
        eveniet deleniti nulla magni, earum dolorum accusamus voluptate nihil
        exercitationem optio nam delectus laudantium, similique maiores cum.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod autem
        odio distinctio, esse, saepe culpa quos eos repudiandae suscipit
        reiciendis corporis ab dolores exercitationem sunt nam vel delectus
        voluptate non! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptatibus earum reiciendis eaque dignissimos, distinctio atque iste
        sed dolore placeat assumenda deleniti aliquam explicabo? Ut repudiandae
        veniam accusantium a, repellendus assumenda. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Sequi nobis possimus repellat consequatur
        eveniet deleniti nulla magni, earum dolorum accusamus voluptate nihil
        exercitationem optio nam delectus laudantium, similique maiores cum.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod autem
        odio distinctio, esse, saepe culpa quos eos repudiandae suscipit
        reiciendis corporis ab dolores exercitationem sunt nam vel delectus
        voluptate non! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptatibus earum reiciendis eaque dignissimos, distinctio atque iste
        sed dolore placeat assumenda deleniti aliquam explicabo? Ut repudiandae
        veniam accusantium a, repellendus assumenda. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Sequi nobis possimus repellat consequatur
        eveniet deleniti nulla magni, earum dolorum accusamus voluptate nihil
        exercitationem optio nam delectus laudantium, similique maiores cum.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod autem
        odio distinctio, esse, saepe culpa quos eos repudiandae suscipit
        reiciendis corporis ab dolores exercitationem sunt nam vel delectus
        voluptate non! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptatibus earum reiciendis eaque dignissimos, distinctio atque iste
        sed dolore placeat assumenda deleniti aliquam explicabo? Ut repudiandae
        veniam accusantium a, repellendus assumenda. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Sequi nobis possimus repellat consequatur
        eveniet deleniti nulla magni, earum dolorum accusamus voluptate nihil
        exercitationem optio nam delectus laudantium, similique maiores cum.
      </Typography>
      <br />
      <br />
      <Button variant="contained" sx={{ marginRight: 2 }}>
        Drop CV
      </Button>
      <Button variant="contained">Download PDF</Button>
    </Box>
  );
}

export default IndividualJobDescription;
