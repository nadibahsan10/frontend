import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import useFetch from "../../CustomHooks/useFetch";

const Dashboard = () => {
  const { data, isLoading, isError, error } = useFetch({
    url: "http://localhost:3000/admin/stats",
    queryKey: ["stats"],
  });

  const { data: question } = useFetch({
    url: "http://localhost:3000/admin/pendingquestions",
    queryKey: ["unques"],
  });
  console.log(data);
  console.log(question);
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Users Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: "center" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Total Active Users
              </Typography>
              <Typography variant="h3" color="primary">
                {data?.approvedUsers}
              </Typography>
              <Typography variant="body2">
                Registered users in the system
              </Typography>
            </CardContent>
            <Button
              component={Link}
              to="/admin/users"
              variant="contained"
              sx={{ margin: 2 }}
            >
              Manage Users
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: "center" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Total Approval Request Pending
              </Typography>
              <Typography variant="h3" color="primary">
                {data?.unapprovedUsers}
              </Typography>
              <Typography variant="body2">
                Registered users in the system
              </Typography>
            </CardContent>
            <Button
              component={Link}
              to="/admin/users"
              variant="contained"
              sx={{ margin: 2 }}
            >
              Manage Users
            </Button>
          </Card>
        </Grid>

        {/* Pending Questions Approval Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: "center" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Pending Questions
              </Typography>
              <Typography variant="h3" color="primary">
                {question?.unapprovedQuestions}
              </Typography>
              <Typography variant="body2">
                Questions pending approval
              </Typography>
            </CardContent>
            <Button
              component={Link}
              to="/admin/questions"
              variant="contained"
              sx={{ margin: 2 }}
            >
              Approve Questions
            </Button>
          </Card>
        </Grid>

        {/* System Settings */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: "center" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                System Settings
              </Typography>
              <Typography variant="h3" color="primary">
                <i className="fas fa-cog"></i>
              </Typography>
              <Typography variant="body2">
                Manage system configurations
              </Typography>
            </CardContent>
            <Button
              component={Link}
              to="/admin/settings"
              variant="contained"
              sx={{ margin: 2 }}
            >
              Go to Settings
            </Button>
          </Card>
        </Grid>
      </Grid>

      {/* Additional Sections */}
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        {/* Analytics Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                User Activity Analytics
              </Typography>
              <Typography variant="body2">
                Detailed statistics about user activity, posts, and interaction.
              </Typography>
              {/* You can add graphs or charts here */}
            </CardContent>
          </Card>
        </Grid>

        {/* Notifications Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Admin Notifications
              </Typography>
              <Typography variant="body2">
                View recent notifications and system alerts.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
