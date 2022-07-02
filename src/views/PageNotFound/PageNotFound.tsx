import React from 'react'
import { Link } from 'react-router-dom'
import s from './PageNotFound.module.css'

const PageNotFound = () => {
    return (
        <div className={s.container}>
            <div className="authincation vh-100">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-md-7">
                            <div className="form-input-content text-center error-page">
                                <h1 className="text-white fw-bold">404</h1>
                                <h4 className="text-white fw-bold mb-3">The page you were looking for is not found!</h4>
                                <div>
                                    <Link to="/films" className="btn btn-danger">Back to Films</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
