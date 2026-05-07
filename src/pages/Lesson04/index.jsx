import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md?raw";

const convertData = (input) => {
  const species=Array.from(new Set(input.map(({species})=>species)))
  //input.map(({species})=>species)はspecieを配列中からすべて取り出す
  //Setは重複を消す
  //Array.fromは配列を作成する。(Setは配列を作ることが出来ないため)
  return species.map((species)=>{
    return {
      id: species,
      data: input
        .filter((item)=>item.species===species)
        //明確に一致させたいから===を使う？
        .map(({sepalLength: x, petalWidth: y})=>({x,y})),
    };
  }); // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer04"
      dataUrl="data/iris.json"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 04"
      Chart={Chart}
    />
  );
};

export default Lesson;
