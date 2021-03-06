import React, { useState } from "react";
export function Home() {
	const [select, setSelect] = useState("red");
	return (
		<div className="text-center mt-5">
			<div className="semaforo text-center mt-5">
				<div
					onClick={() => setSelect("red")}
					className={
						"red select " + (select === "red" ? "brillo" : "")
					}></div>
				<div
					onClick={() => setSelect("yellow")}
					className={
						"select yellow " + (select === "yellow" ? "brillo" : "")
					}></div>
				<div
					onClick={() => setSelect("green")}
					className={
						"select green " + (select === "green" ? "brillo" : "")
					}></div>
			</div>
		</div>
	);
}
