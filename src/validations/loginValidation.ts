import * as yup from "yup";

export default function loginValidation() {
    const validationSchema = yup.object({
        email: yup.string().required().email().trim(),
        password: yup.string().required().min(8)
    });

    return validationSchema;
}