import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IInputProps {
	error?: FieldError | undefined;
}

type TypeInputProps = IInputProps & InputHTMLAttributes<HTMLInputElement>;

export interface IInput extends TypeInputProps {}
