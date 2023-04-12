import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../../../actions/project";
const columns = [
  { id: 'projectname', label: 'Project Name', minWidth: 170 },
  { id: 'givento', label: 'Member', minWidth: 170 },
  { id: 'task', label: 'Task', minWidth: 100 },
  {
    id: 'status',
    label: 'Status',
    minWidth: 'fit-content',
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(projectname,givento, task, status) {
  
  return { projectname,givento, task, status };
}



export default function StickyHeadTable() {
  const dispatch = useDispatch();
  const { projects, loading } = useSelector((state) => state.project);

  useEffect(() => {
    let user = window.localStorage.getItem("user");
    dispatch(getProjects());
  }, [dispatch]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Use optional chaining to ensure that projects is defined before trying to access its properties
 const rows = projects?.reduce((acc, project) => {
    if (project && project.tasks && Array.isArray(project.tasks)) {
      return [
        ...acc,
        ...project.tasks.map((task) => {
          console.log(task.givento.label)
          return createData(project.project_name,task.givento.label, task.taskname, task.taskstatus);
        }) 
      ];
    } else {
      return acc;
    }
  }, []);

  return (
    <Paper sx={{ width: '50%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                
                return (
                  
                  <TableRow hover role="checkbox" tabIndex={-1} key={`${row.name}-${row.task}`}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} 
                         style={{
                    textAlign:'right',
                
                 }}
    >
                  <div style={{
                    display:"flex",
                    justifyContent:'right',
                width:'fit-content', 
                padding:'3px',
                color:column.id === 'status'?'white':'inherit',
                borderRadius:"5px",   
                backgroundColor: column.id === 'status' && value === 'Active' ? 'teal' : 
                 column.id === 'status' && value === 'Completed' ? 'green' :
                 column.id === 'status' && value === 'Pending' ? 'red' : 'inherit',
                 
                 }}>

                 
    {column.format && typeof value === 'number'
        ? column.format(value)
        : value} 
        </div>
</TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
