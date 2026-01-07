//request data gathering logic
let btn = document.getElementById("demo");
let clickResult = document.getElementById("simple");
let triggers = document.getElementById("sample");
//business logic
let clickcount = 0;
let triggercount = 0;
// debounce method logic
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}
const debounceResult = debounce(() => {
  triggercount++;
  triggers.innerHTML = ` triggered ${triggercount}`;
}, 1000);
btn.addEventListener("click", () => {
  clickcount++;
  clickResult.innerHTML = `user entered characters ${clickcount}`;
  debounceResult();
});
