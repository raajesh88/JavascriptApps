const getdetails = async () => {
  //request data gathering logic
  let userid = document.getElementById("userid").value;
  let parag = document.getElementById("para");
  let result = document.getElementById("sample");
  //validation logic
  if (userid == "") {
    alert("please enter user id");
    return;
  }
  parag.style.display = "block";
  //business logic
  try {
    const [userres, postres] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userid}`),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`),
    ]);
    const userdata = await userres.json();
    const postdata = await postres.json();
    result.innerHTML = `
    <h3>${userdata.name}</h3>
    <p>${userdata.email}</p>`;
    <h3>Posts</h3>;
    <ul>
        ${postdata.map((item) => `<li>${item.title}</li>`).join("")}
    </ul>

  } catch (error) {
    result.innerHTML = "<h3> Something went worng</h3>";
  }
};
