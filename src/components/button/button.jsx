import scss from "./button.module.scss";
import { Link } from "react-router-dom";
export default function Button({ btnTitle, btnClassName, link }) {
	return (
		<Link to={link}>
			<button
				className={
					btnClassName === "buttonDenger" ? (scss.button && scss.buttonDenger) : scss.button
				}
			>
				{btnTitle}
			</button>
		</Link>
	);
}
