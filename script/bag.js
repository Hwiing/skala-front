const bagButton = document.querySelector("#bag-button");
const bagItems = [];

bagButton?.addEventListener("click", () => {
  const answer = prompt(
    "가방에 넣을 물건을 입력하세요.\n여러 개라면 쉼표로 구분할 수 있어요."
  );

  if (answer === null) {
    return;
  }

  const newItems = answer
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (newItems.length === 0) {
    alert("추가할 물건을 입력해주세요.");
    return;
  }

  newItems.forEach((item) => {
    if (!bagItems.includes(item)) {
      bagItems.push(item);
    }
  });

  alert(`현재 가방 속 물건\n${bagItems.join(", ")}`);
});
