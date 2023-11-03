import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valied")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

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
                "& > div" : { gridColumn: isNonMobile ? undefined : "span 4"},

              }}
            >
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    placeholder="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    id="firstName" // Add an id attribute
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{gridColumn: "span 2"}}
                />
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    placeholder="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    id="lastName" // Add an id attribute
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{gridColumn: "span 2"}}
                />
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    placeholder="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    id="lastName" // Add an id attribute
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{gridColumn: "span 4"}}
                />
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    placeholder="Contact Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contact}
                    name="contact"
                    id="contact" // Add an id attribute
                    error={!!touched.contact && !!errors.contact}
                    helperText={touched.contact && errors.contact}
                    sx={{gridColumn: "span 4"}}
                />
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    placeholder="Address 1"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address1}
                    name="address1"
                    id="address1" // Add an id attribute
                    error={!!touched.address1 && !!errors.address1}
                    helperText={touched.address1 && errors.address1}
                    sx={{gridColumn: "span 4"}}
                />
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    placeholder="Address 2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address2}
                    name="address2"
                    //id="address2" // Add an id attribute
                    error={!!touched.address2 && !!errors.address2}
                    helperText={touched.address2 && errors.address2}
                    sx={{gridColumn: "span 4"}}
                />

            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
