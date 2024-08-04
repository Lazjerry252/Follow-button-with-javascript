const follow_btn = document.querySelector('.js-follow');

follow_btn.addEventListener("click", () => {
  if (follow_btn.innerText === "FOLLOW") {
    follow_btn.innerHTML = "UNFOLLOW";
  } else if (follow_btn.innerText === "UNFOLLOW") {
    follow_btn.innerHTML = "FOLLOW";
  }
})
