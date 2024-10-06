import React, { FC } from "react";
import { FaUserCircle } from "react-icons/fa";
import stylesIcon from "../icons/IconsRight.module.scss";
import styles from "./AuthForm.module.scss";

const AuthForm: FC = () => {
	return (
		<div className={styles.wrapper}>
			<button className={stylesIcon.button}>
				<FaUserCircle fill="#a4a4a4" />
			</button>
		</div>
	);
};

export default AuthForm;
