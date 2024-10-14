import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface UseOutSide {
	isShow: boolean;
	setIsShow: Dispatch<SetStateAction<boolean>>;
	ref: any;
}

export const useOutSide = (initialShow: boolean): UseOutSide => {
	const [isShow, setIsShow] = useState(initialShow);

	const ref = useRef<HTMLElement>();

	const handleClick = (e: MouseEvent) => {
		if (ref.current && !ref.current.contains(e.target as Node)) {
			setIsShow(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	return { ref, isShow, setIsShow };
};
