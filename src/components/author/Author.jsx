import { toast, ToastContainer } from "react-toastify";
import { ROUTES } from "../../routes";
import { Link } from "react-router-dom";

export default function Author(props) {
	const { author } = props;
	return (
		<div>
			<div className="card card-compact bg-base-100 shadow-lg border">
				<figure>
					<img
						className="w-36 mt-2"
						src={author?.image || "/user-2.png"}
						alt={author.username + "'s image"}
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">Name: {author.name}</h2>
					<p>Email: {author.email}</p>
					<p>Phone: {author.phone}</p>
					<p>Website: {author.website}</p>
					<p>
						Address: {author.address.street}, {author.address.suite}
						, {author.address.city}
					</p>
					<div className="card-actions justify-end">
						<button
							onClick={() =>
								document
									.getElementById("message_modal")
									.showModal()
							}
							className="btn btn-neutral"
						>
							Message
						</button>
                        <Link to={ROUTES.SINGLE_AUTHOR.DYNAMIC(author.id)}>
							<button className="btn btn-neutral">
								Details
							</button>
						</Link>
					</div>
				</div>
			</div>

			<dialog id="message_modal" className="modal">
				<div className="modal-box">
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
							✕
						</button>
					</form>

					<div className="card-body">
						<h1 className="text-3xl font-bold text-center">
							Your opinion matters!
						</h1>
						<h1 className="text-xl font-semibold text-center">
							Leave a message
						</h1>
						<p className="text-center mb-2">
							How was your experience?
						</p>
						<div className="rating gap-1 justify-center">
							<input
								type="radio"
								name="rating-3"
								className="mask mask-heart bg-red-400"
							/>
							<input
								type="radio"
								name="rating-3"
								className="mask mask-heart bg-orange-400"
								defaultChecked
							/>
							<input
								type="radio"
								name="rating-3"
								className="mask mask-heart bg-yellow-400"
							/>
							<input
								type="radio"
								name="rating-3"
								className="mask mask-heart bg-lime-400"
							/>
							<input
								type="radio"
								name="rating-3"
								className="mask mask-heart bg-green-400"
							/>
						</div>
						<textarea
							className="textarea textarea-primary"
							placeholder="Message Me..."
						></textarea>
						<form method="dialog" className="form-control mt-6">
							<button
								onClick={()=>toast.success("Feedback sent successfully!")}
								className="btn btn-primary"
							>
								Leave Feedback
							</button>
							<button className="btn  btn-ghost mt-2">
								Maybe Later
							</button>
                            
						</form>
					</div>
				</div>
			</dialog>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
		</div>
	);
}
