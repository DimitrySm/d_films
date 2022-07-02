import { Form, Formik } from 'formik';
import signUpValidation from '../../validations/signUpValidation';
import InputBlock from '../../components/InputBlock/InputBlock';
import ErrorBlock from '../../components/ErrorBlock/ErrorBlock';
import FullScreenWrapper from '../../components/FullScreenWrapper/FullScreenWrapper';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthApi from '../../api/auth-api';
import { setToken } from '../../helpers/AuthTokenHelper';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/user';
import s from './AuthPage.module.css'
import { RouteEnums } from '../../config/enums/routeEnums';
import { useState } from 'react';

type FormDataType = {
    email: string,
    password: string
}

export const AuthPage = () => {
    const location = useLocation();
    let pathname: string = location.pathname
    pathname = pathname.split("/")[1];

    const [error, setError] = useState<string>('')

    const formData = {
        email: "",
        password: ""
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const onSubmitHandler = async (data: FormDataType) => {
        try {
            const token = pathname === RouteEnums.Login ? await AuthApi.login(data) : await AuthApi.register(data)
            setToken(token)
            dispatch(setUser({email: data.email}))
            navigate('/films')
        } catch (error: any) {
            setError(error.response.data.message)
            console.log(error.response.data.message);
        }
    }

    return (
        <FullScreenWrapper>
            <div className="auth-form pt-0">
                <h4 className="text-center mb-4 text-dark">
                    {pathname === RouteEnums.Login ? 'Login your account' : 'Sign up your account'}
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
                            <ErrorBlock error={error} />
                            <Button variant="dark" type="submit" className="mb-3">
                                {pathname === RouteEnums.Login ? 'Login' : ' Sign me up'}
                            </Button>
                        </Form>
                    )}
                </Formik>
                {
                    pathname === RouteEnums.Login ? (
                        <Link to="/signUp" className={s.buttomLinks}>
                            Don't have an account?
                        </Link>
                    ) : (
                        <Link to="/login" className={s.buttomLinks}>
                            Login in application
                        </Link>
                    )
                }
            </div>
        </FullScreenWrapper>
    )
}