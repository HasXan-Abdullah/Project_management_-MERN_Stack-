import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getProjects } from "../../actions/project";
import {
  Container,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Box,
  Divider,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const AssignedTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { projects, loading } = useSelector((state) => state.project);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getProjects());
    }
  }, [dispatch, navigate]);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  // Helper function to slice the description text
  const sliceText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Container maxWidth="md">
      {projects &&
        projects.map((data, index) => (
          <Card key={data.id} variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom sx={{ color: "#64c5b1" }}>
                Project Name: {data.project_name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Project Description: {sliceText(data.project_description, 100)}
              </Typography>
      

              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" component="div" gutterBottom sx={{ color: "#64c5b1" }}>
                  Members:
                </Typography>
                <List dense>
                  {data.members.map((el) => (
                    <ListItem key={el._id} sx={{ py: 0 }}>
                      <ListItemText primary={el.email} />
                    </ListItem>
                  )) }
                </List>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" component="div" gutterBottom sx={{ color: "#64c5b1" }}>
                  Tasks:
                </Typography>
                <List dense>
                  {data.tasks.map((el) => (
                    <ListItem key={el._id} sx={{ py: 2 }}>
                      <ListItemText
                        primaryTypographyProps={{ variant: "subtitle1", sx: { color: "#64c5b1" } }}
                        secondaryTypographyProps={{ variant: "body2" }}
                        primary={`Task: ${el.taskname}`}
                        secondary={`Description: ${sliceText(el.taskdescription, 100)}`}
                      />
                      {el.taskinstructionfile ? (
                        <ListItemIcon>
                          <Button
                            href={el.taskinstructionfile}
                            download
                            startIcon={<FileDownloadIcon />}
                            variant="outlined"
                            size="small"
                          >
                            Download File
                          </Button>
                        </ListItemIcon>
                      ) : (
                        null
                      )}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </CardContent>
          </Card>
        ))}
    </Container>
  );
};

export default AssignedTask;
