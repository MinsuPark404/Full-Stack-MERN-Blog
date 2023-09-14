// 필요한 모듈 불러오기
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const commentRoute = require('./routes/comments');

// 환경변수 포트 및 기본 포트 설정
const port = process.env.PORT || 3000;

const app = express();

// 필요한 미들웨어 불러오기
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/posts', commentRoute);

// 데이터베이스에 연결하는 비동기 함수
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('database is connected successfully!');
  } catch (err) {
    console.error(`Error connecting to the database: ${err.message}`);
    process.exit(1); // 실패 시 프로세스를 종료
  }
};

// 데이터베이스에 연결합니다.
connectDB()
  .then(() => {
    // 서버를 시작합니다.
    app.listen(port, () => {
      console.log(`App is running in ${process.env.NODE_ENV} mode on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(`Failed to start the app: ${err.message}`);
  });

// 서버 시작에 실패한 경우에 대한 에러 핸들링입니다.
app.on('error', (err) => {
  console.error(`Error starting server: ${err.message}`);
});
