import * as yup from "yup";

export default function signUpValidation() {
    const validationSchema = yup.object({
        email: yup.string().required().email().max(100).trim(),
        password: yup.string().required().min(4).max(16)
    });

    return validationSchema;
}