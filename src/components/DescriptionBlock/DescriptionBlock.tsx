import React from 'react'
import s from './DescriptionBlock.module.css'

type DescriptionBlockPropsType = {
	title: string,
	value: string | number | string[]
}

export const DescriptionBlock = (props: DescriptionBlockPropsType) => {
	const { title, value } = props;

	return (
		<p className={s.text}>
			{title}: <span>{value} {title === 'runtime' && 'minutes'}</span>
		</p>
	)
}