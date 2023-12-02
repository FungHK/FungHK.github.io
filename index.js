trueFalseQuestions(
    [
        "當與對方對到眼的時候會有與其他人產生不同的感覺",
        "會翻過一遍對方的精選動態",
        "會對於對方還沒讀訊息感到焦",
        "承上題，會一直檢查通知跟手機訊息有沒有對方的回覆",
        "會把對方的動態設通知",
        "會嘗試尋找對方在其他社群軟體的帳號",
        "在跟對方不經意的肢體碰觸時會放在心上",
        "記住對方的喜好、星座、生日 等",
        "對於在做出任何事情前擔心對方的反應或怕導致反感",
        "在小帳或跟朋友嚎跟對方的對話截圖",
    ],
    "quiz-container1"
);
trueFalseQuestions(
    ["乾等對方主動找你(但還是一直看訊息)", "「你是被蓮蓬頭綁架是不是」", "分享可愛貓貓reels給他", "回覆他的新限動嘗試開啟話題", "放著跟其他人聊天"],
    "quiz-container2"
);
trueFalseQuestions(["每天跟你分享他的生活發生什麼", "每天主動早安晚安", "主動約你出去", "對你的語氣特別寵溺", "聊擦邊球話題"], "quiz-container3");

function trueFalseQuestions(questionArray, containerId) {
    let questionsContainer = document.getElementById(containerId);
    let form = document.createElement("form");
    for (let i = 0; i < questionArray.length; i++) {
        let question = questionArray[i];
        form.appendChild(trueFalseQuestion(question, i));
    }
    questionsContainer.appendChild(form);
}

function trueFalseQuestion(question, i) {
    let container = document.createElement("div");

    let label = document.createElement("label");
    label.textContent = i + 1 + ". " + question;
    container.appendChild(label);
    container.appendChild(option("是", "yes", "quz" + i));
    container.appendChild(option("否", "no", "quz" + i));

    return container;
}

function option(optionText, optionId, id) {
    let container = document.createElement("div");
    let input = document.createElement("input");
    input.type = "radio";
    input.id = optionId;
    input.name = id;

    container.appendChild(input);
    let label = document.createElement("label");
    label.textContent = optionText;
    container.appendChild(label);

    return container;
}
