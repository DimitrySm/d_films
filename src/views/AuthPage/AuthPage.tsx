import { Form, Formik } from 'formik';
import signUpValidation from '../../validations/signUpValidation';
import InputBlock from '../../components/InputBlock/InputBlock';
import ErrorBlock from '../../components/ErrorBlock/ErrorBlock';
import FullScreenWrapper from '../../components/FullScreenWrapper/FullScreenWrapper';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

type FormDataType = {
    email: string,
    password: string
}

export const AuthPage = () => {
    const location = useLocation();
    let pathname: string = location.pathname
    pathname = pathname.split("/")[1];

    console.log(pathname);

    const formData = {
        email: "",
        password: ""
    }

    const onSubmitHandler = (data: FormDataType) => {
    }

    return (
        <FullScreenWrapper>
            <div className="auth-form pt-0">
                <h4 className="text-center mb-4 text-dark">
                    {pathname === 'login' ? 'Login your account' : 'Sign up your account'}
                </h4>
                <Formik
                    validateOnChange={true}
                    initialValues={formData}
                    validationSchema={signUpValidation}
                    onSubmit={onSubmitHandler}
                >
                    {({ values, errors, handleChange }) => (
                        <Form>
                            <InputBlock
                                label="Email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                isFullWidth={true}
                            >
                                <ErrorBlock error={errors.email ?? null} />
                            </InputBlock>
                            <InputBlock
                                label="Password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                isFullWidth={true}
                            >
                                <ErrorBlock error={errors.password ?? null} />
                            </InputBlock>
                            <Button variant="dark">Sign me up</Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </FullScreenWrapper>
    )
}