const upDownButton = document.querySelector("#updown-button");

upDownButton?.addEventListener("click", () => {
    const computerNumber = Math.floor(Math.random() * 100) + 1;
    let tries = 0;

    while (true) {
        const answer = prompt("1과 100 사이의 숫자를 맞춰보세요!");

        if (answer === null) {
            return;
        }

        const input = Number(answer);

        if (!Number.isInteger(input) || input < 1 || input > 100) {
            alert("1부터 100 사이의 정수를 입력해주세요.");
            continue;
        }

        tries++;

        if (input === computerNumber) {
            alert(`와우! ${tries}번 만에 맞췄어요!`);
            return;
        }

        if (input < computerNumber) {
            alert("Too low! 더 큰 숫자입니다.");
        } else {
            alert("Too high! 더 작은 숫자입니다.");
        }
    }
});
