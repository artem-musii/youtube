import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import { useOutSide } from "@/hooks/useOutside";
import stylesIcon from "../icons/IconsRight.module.scss";
import styles from "./AuthForm.module.scss";
import { EMAIL_REGEX } from "./auth-form.constants";
import { IAuthInputs } from "./auth-form.interface";

const AuthForm: FC = () => {
	const { ref, isShow, setIsShow } = useOutSide(false);
	const [type, setType] = React.useState<"login" | "register">("login");

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IAuthInputs>({
		mode: "onChange"
	});

	const onSubmit: SubmitHandler<IAuthInputs> = (data) => {
		if (type === "login") {
			alert("Login" + JSON.stringify(data));
		}

		if (type === "register") {
			alert("Register" + JSON.stringify(data));
		}
	};

	return (
		<div ref={ref} className={styles.wrapper}>
			<button
				onClick={() => setIsShow((prev) => !prev)}
				className={stylesIcon.button}
			>
				<FaUserCircle fill="#a4a4a4" />
			</button>
			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Input
						className="bg-solidWhite"
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: EMAIL_REGEX,
								message: "Entered value does not match email format"
							}
						})}
						placeholder="Email"
						error={errors.email}
					/>
					<Input
						className="bg-solidWhite"
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 6,
								message: "Password must have at least 6 characters"
							}
						})}
						type="password"
						placeholder="Password"
						error={errors.password}
					/>
					<div className={styles.buttons_wrapper}>
						<Button onClick={() => setType("login")}>Login</Button>
						<button
							className={styles.register}
							onClick={() => setType("register")}
						>
							Register
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default AuthForm;
