import React, {
	createContext,
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction
} from "react";

export interface IData {
	user: {
		_id: string;
		email: string;
	} | null;
	accessToken: string;
}

export interface IAuthContext extends IData {
	setData: Dispatch<SetStateAction<IData>>;
}

const defaultData: IData = {
	user: null,
	accessToken: ""
};

const defaultContext: IAuthContext = {
	...defaultData,
	setData: () => {}
};

export const AuthContext = createContext<IAuthContext>(defaultContext);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [data, setData] = React.useState<IData>(defaultData);

	return (
		<AuthContext.Provider value={{ ...data, setData }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
