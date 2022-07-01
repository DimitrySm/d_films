import React from 'react'
import s from './FullScreenWrapper.module.css';

type FullScreenWrapperPropsType = {
    children: JSX.Element
}

const FullScreenWrapper = (props: FullScreenWrapperPropsType) => {
    const { children } = props;

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                {children}
            </div>
        </div>
    )
}

export default FullScreenWrapper
