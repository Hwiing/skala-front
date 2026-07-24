const gradeButton = document.querySelector("#grade-button");

gradeButton?.addEventListener("click", () => {
    const subjects = ["수학", "과학", "역사", "영어", "미술"];
    let total = 0;

    for (const subject of subjects) {
        while (true) {
            const answer = prompt(`${subject} 점수를 입력하세요. (0~100)`);

            if (answer === null) {
                return;
            }

            const score = Number(answer);

            if (Number.isFinite(score) && score >= 0 && score <= 100) {
                total += score;
                break;
            }

            alert("0부터 100 사이의 점수를 입력해주세요.");
        }
    }

    const average = total / subjects.length;
    let message;

    if (average >= 90) {
        message = "🎉 Excellent work!";
    } else if (average >= 80) {
        message = "🌟 Good job!";
    } else if (average >= 70) {
        message = "💪 You can do better!";
    } else {
        message = "Keep trying!";
    }

    alert(`결과: 평균 점수는 ${average.toFixed(1)}점입니다. ${message}`);
});
