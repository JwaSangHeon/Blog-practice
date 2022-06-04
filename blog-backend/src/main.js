require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api from './api';
// import createFakeData from './createFakeData'; //가상데이터를 만들기 위한 작업

// 비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
// eslint-disable-next-line no-undef
const { PORT, MONGO_URL } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

//라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

//라우터 적용 전에 bodyParse 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

// PORT가 지정되어 있지 않다면 4000을 사용
const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port %d', port);
});
