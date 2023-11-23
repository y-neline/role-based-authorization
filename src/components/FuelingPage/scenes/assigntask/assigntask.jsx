import { Box, Button, InputLabel, MenuItem, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { mockDataTeam as data } from "../../data/mockData";
const initialValues = {
  firstName: "",
  lastName: "",
  role: "",
  email: "",
  date: "",
  taskDetails: "",
  address2: "",
  driverName: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const validRoles = ["maintenance", "fueling", "admin", "driver"];
const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  driverName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  role: yup.string().oneOf(validRoles, "invalid role").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valied")
    .required("required"),
  date: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Task = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  /*const [role, setRole] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };*/

  const [driverName, setdriverName] = useState("");

  const handleChange = (event) => {
    setdriverName(event.target.value);
  };

  return (
    <Box m="20px">
      <Header title="ASSIGN TASK" subtitle="Create a New Task for a Driver" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <Box display="flex" flexDirection="column" mb="30px">
              <InputLabel id="driverName">Driver Name</InputLabel>
              <Select
                labelId="driverName"
                variant="filled"
                id="driverName"
                value={values.driverName} // Set the selected value from the formik values
                name="driverName"
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.driverName && !!errors.driverName}
              >
                {data.map((driver) => (
                  <MenuItem key={driver.id} value={driver.name}>
                    {driver.name}
                  </MenuItem>
                ))}
              </Select>
              {touched.driverName && errors.driverName && (
                <p style={{ color: "red" }}>{errors.driverName}</p>
              )}
            </Box>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                placeholder="From"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                id="firstName" // Add an id attribute
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                placeholder="To where"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                id="lastName" // Add an id attribute
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 4" }}
              />
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                placeholder="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                id="email" // Add an id attribute
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              /> */}
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                placeholder="Role"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.role}
                name="role"
                id="role" // Add an id attribute
                error={!!touched.role && !!errors.role}
                helperText={touched.role && errors.role}
                sx={{ gridColumn: "span 4" }}
              /> */}
              
                
                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  placeholder="Date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.date}
                  name="date"
                  id="date" // Add an id attribute
                  error={!!touched.date && !!errors.date}
                  helperText={touched.date && errors.date}
                  sx={{ gridColumn: "span 4" }}
                />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                placeholder="Task Details"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.taskDetails}
                name="taskDetails"
                id="taskDetails" // Add an id attribute
                error={!!touched.taskDetails && !!errors.taskDetails}
                helperText={touched.taskDetails && errors.taskDetails}
                sx={{ gridColumn: "span 4" }}
              />
             
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Task
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Task;
