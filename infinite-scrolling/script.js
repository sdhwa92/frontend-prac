let currentPage = 1;
let loading = false;

const contentDiv = document.getElementById("content");
const loadingDiv = document.getElementById("loading");

const getPosts = async (page) => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );
    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }
    return await response.json();
  } catch (e) {
    throw new Error("Failed to fetch services: " + e.message);
  }
};

const appendData = (data) => {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
    contentDiv.appendChild(div);
  });
};

const observer = new IntersectionObserver(
  async (entries) => {
    if (entries[0].isIntersecting && !loading) {
      console.log("entries: ", entries);

      loading = true;
      currentPage++;

      try {
        const data = await getPosts(currentPage);
        appendData(data);
      } catch (error) {
        console.error("Error loading more posts: ", error);
      } finally {
        loading = false;
      }
    }
  },
  { threshold: 1.0 }
);

observer.observe(loadingDiv);

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const posts = await getPosts(currentPage);
    if (posts) {
      appendData(posts);
    } else {
      console.log("posts not found or undefined");
    }
  } catch (e) {
    console.error("Error loading initial posts: ", e.message);
  }
});
