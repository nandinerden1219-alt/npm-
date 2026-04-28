import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

const player_name = await inquirer.prompt({
  name: "player_name",
  type: "input",
  message: "ner?",
});
let q1 = await inquirer.prompt({
  name: "answer",
  type: "rawlist",
  message: chalk.red('"Harry Potter" номын цуврал хэдэн дэвтэртэй вэ?'),
  choices: ["5", "6", "7", "8"],
});
let q2 = await inquirer.prompt({
  name: "answer",
  type: "rawlist",
  message: "Дэлхийн хамгийн том тив аль вэ?",
  choices: ["Африк", "Ази", "Европ", "Америк"],
});
let q3 = await inquirer.prompt({
  name: "answer",
  type: "rawlist",
  message: "Монгол Улсын нийслэл аль вэ?",
  choices: ["Дархан", "Эрдэнэт", "Улаанбаатар", "Ховд"],
});
let q4 = await inquirer.prompt({
  name: "answer",
  type: "rawlist",
  message: "Дэлхийн хамгийн урт гол аль вэ?",
  choices: ["Амазон", "Нил", "Янцзы", "Миссисипи"],
});
let q5 = await inquirer.prompt({
  name: "answer",
  type: "rawlist",
  message: "Хүний биеийн хамгийн том эрхтэн юу вэ?",
  choices: ["Зүрх", "Элэг", "Арьс", "Уушиг"],
});
let q6 = await inquirer.prompt({
  name: "answer",
  type: "rawlist",
  message: "Монголын хамгийн өндөр уул?",
  choices: ["Богд хан", "Отгонтэнгэр", "Алтай Таван Богд (Хүйтэн)", "Сутай"],
});
let q7 = await inquirer.prompt({
  name: "answer",
  type: "rawlist",
  message: "Хамгийн хурдан амьтан?",
  choices: ["Арслан", "Чоно", "Гепард", "Морь"],
});
let q8 = await inquirer.prompt({
  name: "answer",
  type: "rawlist",
  message: "Хүн хэдэн яснаас бүрддэг вэ?",
  choices: ["200", "206", "210", "198"],
});

let ScoreCount = 0;
if (q1.answer === "7") {
  ScoreCount++;
}
if (q2.answer === "Ази") {
  ScoreCount++;
}
if (q3.answer === "Улаанбаатар") {
  ScoreCount++;
}
if (q4.answer === "Нил") {
  ScoreCount++;
}
if (q5.answer === "Арьс") {
  ScoreCount++;
}
if (q6.answer === "Алтай Таван Богд (Хүйтэн)") {
  ScoreCount++;
}
if (q7.answer === "Гепард") {
  ScoreCount++;
}
if (q8.answer === "206") {
  ScoreCount++;
}

chalkAnimation.rainbow(
  `${player_name.player_name}, ${ScoreCount} оноотой байна`,
);
