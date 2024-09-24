export default function Banner() {
	return (
		<section>
			<div className="hero bg-base-200 shadow-xl rounded-lg mt-2">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src="open-book.jpg"
						className="max-w-xl rounded-lg shadow-2xl"
					/>
					<div className="space-y-5">
						<h1 className="text-4xl font-bold">
							Unlock a World of Stories - Find Your Next Favorite
							Book at <br />
							<span className="text-5xl text-slate-700">
								Simple Book Shop
							</span>
						</h1>
						<button className="btn btn-neutral">
							<span className="">Buy Book</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
