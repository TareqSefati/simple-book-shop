import { useLoaderData } from "react-router-dom";
import Author from "./Author";

export default function AuthorList() {
	const authors = useLoaderData();
	return (
		<div className="container mx-auto">
			<div className="mb-5 mt-10">
				<h1
					id="category-name"
					className="text-center font-bold text-5xl mb-5"
				>
					All Authors
				</h1>
				<hr className="w-3/4 mx-auto" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{authors?.map((author) => (
					<Author key={author.id} author={author} />
				))}
			</div>
		</div>

        
	);
}
