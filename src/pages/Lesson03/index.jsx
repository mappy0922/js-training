import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart03";
import instruction from "./instruction.md?raw";

const convertData = (input) => {
  return input.filter((item)=>item.gender=="男性"); // ここを作りましょう！
  //filterは条件に合う要素だけを取り出して、新しい配列を作成する
  //==は等価演算子(自動的に型変換を行う。1=="1"はtrue)、===は厳密等価演算子(自動的に型変換を行う。1=="1"はfalse)
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer03"
      dataUrl="data/size-and-weight.json"
      convertData={(input) => {
        return [
          {
            id: "男性",
            data: convertData(input),
          },
        ];
      }}
      instruction={instruction}
      title="Lesson 03"
      Chart={Chart}
    />
  );
};

export default Lesson;
