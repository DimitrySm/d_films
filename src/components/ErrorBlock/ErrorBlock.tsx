import React from 'react'

type ErrorBlockPropsType = {
    error: string | null
}

const ErrorBlock = (props: ErrorBlockPropsType) => {
    const { error } = props;

    return (
        <div className="w-100 mt-3 mb-3 fs-12 text-danger text-capitalize">
            {error}
        </div>
    )
}

export default ErrorBlock
