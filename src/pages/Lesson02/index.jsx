import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart02";
import instruction from "./instruction.md?raw";

const convertData = (input) => {
  input.sort((x,y)=>y.count-x.count);
  //(item1, item2) => item2.count - item1.countは配列の要素を2つずつ取り出して、結果が負だったらitem1を前に、正だったらitem2を前に、0だったら順番そのままにする。つまり[11,31,-2]だったら31-11=20より[31,11,-2]、-2-11=-23より[31,11,-2]

  return input.slice(0,20); // ここを作りましょう！
  //slice(開始位置、終了位置)は開始位置から終了位置-1まで取り出す。今回はslice(0,20)より先頭20件を取り出す
};

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/qiita-tags.json"
      answerUrl="/answer02"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 02"
      Chart={Chart}
    />
  );
};

export default Lesson;
