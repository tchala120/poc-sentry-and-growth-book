'use client'

const HomePage = () => {
	return (
		<div className="mx-auto flex max-w-xl flex-col gap-2 py-8 text-center">
			<h1>This is home page</h1>

			<button
				className="w-full rounded-xl border border-sky-400 px-4 py-2"
				onClick={() => {
					throw Error(`Unexpected error from yoyoyo`)
				}}
			>
				Click to send error to sentry
			</button>

			<button
				className="w-full rounded-xl border border-sky-400 px-4 py-2"
				onClick={() => {
					throw Error(`This is another error yoyoyo`)
				}}
			>
				Another error
			</button>

			<button
				className="w-full rounded-xl border border-sky-400 px-4 py-2"
				onClick={() => {
					throw Error(`Here the final error`)
				}}
			>
				Final error
			</button>
		</div>
	)
}

export default HomePage
