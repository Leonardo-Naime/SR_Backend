import * as yup from "yup";

export const userValidation = yup.object({
    password: yup.string().required().min(6)
});