import React, { Suspense } from "react"
import CommentsList from "/components/CommentsList.server.jsx"

const PostPage = (props) => {
	return <div>
		<Suspense fallback={<div>Loading...</div>}>
			<CommentsList />
    </Suspense>
	</div>
}

export default PostPage
