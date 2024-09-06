import React, { useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, MenuItem, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setFormData } from "../redux/formSlice.ts";
import FormModal from "./FormModal.tsx";
import countryList from "react-select-country-list";
import logo from "../images/logo.webp";

interface countriesOptionsProps {
  value: string;
  label: string;
}

const UserForm = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const countriesOptions = useMemo(() => countryList()?.getData(), []);

  const countries = countriesOptions?.map(
    (countriesOptions: countriesOptionsProps) => {
      return countriesOptions.label;
    }
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      country: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      age: Yup.number()
        .required("Age is required")
        .test(
          "age-greater-than-name",
          "Age must be greater than name length",
          function (value) {
            const { name } = this.parent;
            return value > (name ? name.length : 0);
          }
        ),
      country: Yup.string().required("Country is required"),
    }),
    onSubmit: (values) => {
      console.log("Form values on submit: ", values);
      dispatch(setFormData(values));
      setOpen(true);
    },
  });

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box mb={3}>
        <img src={logo} alt="logo" width={180} />
      </Box>
      <Box width={300} mb={3}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      </Box>
      <Box width={300} mb={3}>
        <TextField
          fullWidth
          label="Age"
          name="age"
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
        />
      </Box>
      <Box width={300} mb={3}>
        <TextField
          fullWidth
          select
          label="Country"
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
        >
          {countries?.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          formik.handleSubmit();
        }}
      >
        Submit
      </Button>
      <FormModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </Box>
  );
};

export default UserForm;
