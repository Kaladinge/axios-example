import axios from "axios";

async function postRequest() {
	const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
			title: "foo",
			body: "bar",
			userId: 1,
		})

	console.log(response.data);
}

postRequest();

async function putRequest() {
	const response = await axios.put("https://jsonplaceholder.typicode.com/posts/1", {
			id: 1,
			title: "foot",
			body: "bart",
			userId: 1,
		})
	console.log(response.data);
}

putRequest();

function deleteRequest() {
	axios.delete("https://jsonplaceholder.typicode.com/posts/1");
}

deleteRequest();