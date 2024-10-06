import React, { FC } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import AuthForm from "../auth-form/AuthForm";
import styles from "./IconsRight.module.scss";
import { useAuth } from "@/app/hooks/useAuth";

const IconsRight: FC = () => {
	const { user } = useAuth();

	return (
		<div className={styles.icons}>
			{!!user && (
				<button className={styles.button}>
					<BsPlusCircleFill color="#cd3a42" />
				</button>
			)}
			{!user && <AuthForm />}
		</div>
	);
};

export default IconsRight;
