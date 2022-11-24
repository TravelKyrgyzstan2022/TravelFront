import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z]).{5,}$/

export const basicSchema = yup.object().shape({
    first_name: yup.string().min(3, "Name must be at least 3 characters").matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40).required("Required"),
    last_name: yup.string().min(3, "Name must be at least 3 characters").matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40).required("Required"),
    email: yup.string().email("Please enter a valid email adress").required("Required"),
    password: yup.string().min(5).matches(passwordRules, {message: "Please create a stronger password"}).required("Required") 
})