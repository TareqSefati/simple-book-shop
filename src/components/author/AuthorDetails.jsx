import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAuthorById } from "../../utils/Authors";

export default function AuthorDetails() {
	const { id } = useParams();
	const [author, setAuthor] = useState({});
	const getSingleAuthor = async (id) => {
		const value = await getAuthorById(id);
		setAuthor(value);
		console.log(author);
	};
	useEffect(() => {
		getSingleAuthor(id);
	}, []);
	return (
		<section className="container mx-auto border rounded-lg mt-5">
			<div className="hero bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src={author?.image || "/user-1.png"}
						alt={author.username + "'s image"}
						className="max-w-sm w-52 rounded-lg shadow-2xl"
					/>
					<div className="ml-10">
						<h1 className="text-5xl font-bold">{author.name}</h1>
						<p>Email: {author.email}</p>
						<p>Phone: {author.phone}</p>
						<p>Website: {author.website}</p>
						<p>
							Address: {author.address?.street},
							{author.address?.suite}, {author.address?.city}
						</p>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</section>
	);
}
