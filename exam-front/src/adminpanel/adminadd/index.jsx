import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function addNewProduct(values) {
  fetch("http://localhost:3000/aranoz/",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(values)
})
}

const AdminAdd = () => {
  return (
    <>
      <Helmet>
        <title>AdminAdd</title>
      </Helmet>

      <Formik
        initialValues={{ name: "", image: "", price: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Required"),
          image: Yup.string()
            .required("Required"),
          price: Yup.number().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            addNewProduct(values) 
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="admin_form">
          
          <Field name="name" type="text" placeholder='Name' />
          <div className="error_msg">
            <ErrorMessage name="name" />
          </div>

         
          <Field name="image" type="text" placeholder='Image URL' />
          <div className="error_msg">
        
            <ErrorMessage name="image" />
          </div>

          
          <Field name="price" type="number" placeholder='Price'/>
          <div className="error_msg">
    
            <ErrorMessage name="price" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default AdminAdd;
