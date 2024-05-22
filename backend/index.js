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

console.log(process.env.OPENAI_API_KEY);

//프론트엔드에서 받을 json 데이터 -> 자바스크립트 객체로 파싱(변환)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen("8080"); //port 번호 세팅
