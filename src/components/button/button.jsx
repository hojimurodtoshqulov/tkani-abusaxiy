import "./button.scss";
import { Link } from "react-router-dom";
export default function Button({ btnTitle, btnClassName, link }) {
	const classNames = ["button", "buttonDenger", "buttonBuy"];
	return (
		<Link to={link}>
			<button
				className={
					(classNames.filter((item) => btnClassName === item).join(""))
					// btnClassName === "buttonDenger"
					// 	? scss.button && scss.buttonDenger
					// 	: scss.button
				}
			>
				{console.log("btnClassName >>> 15", btnClassName)}
				{console.log("16>>>",classNames.filter((item) => item === btnClassName).join(""))}
				{btnTitle}
			</button>
		</Link>
	);
}
