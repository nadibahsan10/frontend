import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import useFetch from "../../CustomHooks/useFetch";
import Approve from "../components/Approve";
import Reject from "../components/Reject";
import Popup from "../../Shared/Popup";

const AdminQuestion = () => {
  const { data, isLoading, isError, error } = useFetch({
    url: "http://localhost:3000/admin/getquestions",
    queryKey: ["getQuestions"],
  });

  // Handle loading state
  if (isLoading) return <CircularProgress />;

  // Handle error state
  if (isError) {
    return <Typography>Error: {error.message}</Typography>;
  }

  // If there's no data
  if (!data || data.length === 0) {
    return (
      <Typography variant="h4" textAlign="center">
        No unapproved questions found.
      </Typography>
    );
  }

  return (
    <>
      {isError && (
        <Popup
          open={isError}
          onClose={() => {
            refetch();
            if (error.response.status === 403) {
              navigate("/");
            }
          }} // Reset mutation state on close
          errorMessage={error.response.data.message}
          status={error.response.status}
        />
      )}
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          Unapproved Questions List
        </Typography>

        <Grid container spacing={3}>
          {data.map((question) => (
            <Grid item xs={12} sm={6} md={4} key={question.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {question.course} ({question.code})
                  </Typography>
                  <Typography variant="body2">
                    <strong>Trimester:</strong> {question.trimester}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Year:</strong> {question.year}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Department:</strong> {question.department}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Exam Type:</strong> {question.exam_type}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to={"http://localhost:3000/" + question.pdf}
                    target="_blank"
                    rel="noopener"
                    variant="outlined"
                    color="primary"
                  >
                    View PDF
                  </Button>
                  <Approve question={true} userId={question.id} />
                  <Reject question={true} userId={question.id} />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default AdminQuestion;
