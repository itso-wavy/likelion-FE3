const generateRandomPin = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // 대문자 알파벳과 숫자
  let result = '';

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
};

module.exports = { generateRandomPin };
