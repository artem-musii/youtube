import React, { FC, forwardRef } from "react";
import { IInput } from "./input.interface";
import styles from "./Input.module.scss";

const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
	({ error, type = "text", style, ...rest }, ref) => {
		return (
			<div className={styles.input} style={style}>
				<input ref={ref} type={type} {...rest} />
				{!!error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);

Input.displayName = "Input";

export default Input;
