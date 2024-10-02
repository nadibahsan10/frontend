import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

function JobList({ onSelectJob }) {
  const jobs = [
    { id: 1, title: "Software Engineer", company: "Google", location: "California" },
    { id: 2, title: "Data Analyst", company: "Amazon", location: "Seattle" },
    { id: 3, title: "Project Manager", company: "Microsoft", location: "New York" },
    { id: 4, title: "Software Engineer", company: "Google", location: "California" },
    { id: 5, title: "Data Analyst", company: "Amazon", location: "Seattle" },
    { id: 6, title: "Project Manager", company: "Microsoft", location: "New York" },
    { id: 7, title: "Software Engineer", company: "Google", location: "California" },
    { id: 8, title: "Data Analyst", company: "Amazon", location: "Seattle" },
    { id: 9, title: "Project Manager", company: "Microsoft", location: "New York" },
    { id: 10, title: "Software Engineer", company: "Google", location: "California" },
    { id: 11, title: "Data Analyst", company: "Amazon", location: "Seattle" },
    { id: 12, title: "Project Manager", company: "Microsoft", location: "New York" },
  ];

  return (
    <List>
      {jobs.map((job) => (
        <ListItem
          button
          key={job.id}
          onClick={() => onSelectJob(job)} // Call onSelectJob with the selected job
        >
          <ListItemText primary={job.title} secondary={job.company} />
        </ListItem>
      ))}
    </List>
  );
}

export default JobList;
