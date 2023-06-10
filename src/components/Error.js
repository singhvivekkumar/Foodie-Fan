import { useRouteError } from "react-router-dom";

const Error = () => {

	const err = useRouteError();
	// console.log(err);
	return (
		<div className="flex flex-col text-slate-500 text-2xl ">
			<div className=" flex justify-center pt-10 m-2 shadow-inner">
				<div className=" font-mono text-8xl font-extrabold px-4">{err?.status}:</div>
				<div className=" font-mono text-8xl font-extrabold">{err?.statusText}</div>
			</div>
			<div className=" flex text-4xl text-red-500 font-bold justify-center p-4 m-4">{err?.data}</div>
		</div>
	)
}

export default Error;