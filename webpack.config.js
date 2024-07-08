const path = require('path');

module.exports = {
  entry: './src/app.js', // 진입점 파일 설정
  output: {
    filename: 'bundle.js', // 번들링된 파일 이름
    path: path.resolve(__dirname, 'dist') // 번들링된 파일이 저장될 경로
  },
  mode: 'development' // 개발 모드 설정
};
