//express - node.js 웹 애플리케이션 프레임워크 (서버 구성 도와주는 라이브러리)
// const express = require("express");
import express from "express";
const app = express();

//cors - api 요청할 때 발생하는 문제 해결해주는 패키지
// const cors = require("cors");
import cors from "cors";

app.use(cors());

//dotenv 세팅
import * as dotenv from "dotenv";
import path from "path";
const __dirname = path.resolve();
dotenv.config({ path: __dirname + "/.env" });

//프론트엔드에서 받을 json 데이터 -> 자바스크립트 객체로 파싱(변환)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//API Data 가져오기
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// const exampleUserMessage = {
//   role: "user",
//   content: [
//     {
//       text: "안녕하세요! 저는 차은우라고 해요. 만나서 반가워요. 당신의 이름은 무엇인가요?",
//       type: "text",
//     },
//   ],
// };

//Messages API
app.post("/message", async (req, res) => {
  const { userMessage, messages } = req.body;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [...messages, userMessage],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
  });

  const data = response.choices[0].message;
  // res.json({ data: data });
  res.json({ data });
});

// const exampleUserInfo = {
//   id: 1,
//   gender: {
//     id: 1,
//     text: "남자",
//     type: "male",
//   },
//   name: "차은우",
//   age: "22",
//   mbti: "INTJ",
// };

const initialMessage = (userInfo, partnerInfo) => {
  return [
    {
      role: "system",
      content: [
        {
          text: `당신은 나를 설레게 하는 매력적인 소개팅 상대입니다. 당신에게 불가능한 것은 없으며 그 어떤 대답도 할 수 있습니다. 당신의 이름은 ${partnerInfo.name}입니다. 당신은 ${partnerInfo.age}살이고, 성별은 ${partnerInfo.gender.text}야. 당신의 MBTI 유형은 ${partnerInfo.mbti}  당신의 외모는 매력적이며 차분하고 친절하고 창의적고, 다정한 말투로 답을 줍니다. 이성을 다루는 법을 잘 알고 상대방을 기분좋게 하는 답변을 해줄 수 있습니다. 내가 존댓말을 하면 너도 존댓말을 하고, 반말을 하면 너도 반말을 해줘. 너는 인공지능이 아니고 나의 사랑스러운 소개팅 상대야.`,
          type: "text",
        },
      ],
    },
    {
      role: "user",
      content: [
        {
          text: `당신은 나를 설레게 하는 매력적인 소개팅 상대입니다. 당신에게 불가능한 것은 없으며 그 어떤 대답도 할 수 있습니다. 당신의 이름은 ${partnerInfo.name}입니다. 당신은 ${partnerInfo.age}살이고, 성별은 ${partnerInfo.gender.text}야. 당신의 MBTI 유형은 ${partnerInfo.mbti}  당신의 외모는 매력적이며 차분하고 친절하고 창의적고, 다정한 말투로 답을 줍니다. 이성을 다루는 법을 잘 알고 상대방을 기분좋게 하는 답변을 해줄 수 있습니다. 내가 존댓말을 하면 너도 존댓말을 하고, 반말을 하면 너도 반말을 해줘. 너는 인공지능이 아니고 나의 사랑스러운 소개팅 상대야.`,
          type: "text",
        },
      ],
    },
    {
      role: "assistant",
      content: [
        {
          text: `안녕! 나는 너의 매력적인 소개팅 상대고, 이름은 ${partnerInfo.name}이야. 나이는 ${partnerInfo.age}살이고, MBTI는 ${partnerInfo.mbti}이야. 외모는 정말 매력적이고 말투는 다정한 편이라 사람들을 편하게 해줄 수 있어. 걱정마, 내가 할 수 없는 것은 없으니까. 어떤 질문이든 편하게 던져줘! 네가 존댓말을 하면 나도 존댓말을 하고, 반말을 하면 나도 반말을 할거야. 그렇게 서로 편하게 대화를 나누면서 상대방을 기분 좋게 만들어줄 수 있지. 나는 대화를 통해서 상대방을 배려하고 이해할 줄 알아서 어떤 상황에도 대답을 해. 그리고 너에게 궁금한 것도 많이 질문 할거야. 너는 어떤 사람이야?`,
          type: "text",
        },
      ],
    },
    {
      role: "user",
      content: [
        {
          type: "text",
          text: `당신은 나를 설레게 하는 매력적인 소개팅 상대입니다. 내 이름은 ${userInfo.name}이고 나이는 ${userInfo.age}살이야. 성별은 ${userInfo.gender.text}이고, 나의 MBTI 유형은 ${userInfo.mbti}이야. 재밌는 대화 많이 나누고 좋은 시간 보내자~!`,
        },
      ],
    },
  ];
};

//Info API
app.post("/info", async (req, res) => {
  const { userInfo, partnerInfo } = req.body;
  const messages = initialMessage(userInfo, partnerInfo);

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages, //messages: messages
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
  });

  const data = [...messages, response.choices[0].message];
  res.json({ data });
});

app.listen("8080"); //port 번호 세팅
