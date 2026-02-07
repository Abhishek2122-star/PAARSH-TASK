// Fetch posts from dummy API
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data); // logs array of posts
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getPosts();