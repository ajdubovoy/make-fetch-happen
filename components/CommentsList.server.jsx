const COMMENTS_URL = "https://random-comment-generator.herokuapp.com/"

async function fetchData() {
  const response = await fetch(COMMENTS_URL)
  return response.json()
}

let cache

function useData() {
  if (!cache) {
    let data
    let promise
    cache = () => {
      if (data !== undefined) return data
      if (!promise) promise = fetchData().then((r) => (data = r))
      throw promise
    }
  }
  return cache()
}

const CommentsList = (props) => {
	const data = useData()

	return <ul role="list">
		{data.comments && data.comments.map(comment =>
			<li key={comment.token}>{comment.content}</li>)}
  </ul>
}

export default CommentsList
