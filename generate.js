function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateObject() {
  const obj = {};
  for (let i = 1; i <= 60; i++) {
      obj[`property${i}`] = "Hello I am a test property"
  }
  return obj;
}

export function generateJsonArray(size) {
  const jsonArray = [];
  for (let i = 0; i < size; i++) {
      jsonArray.push(generateObject());
  }
  return jsonArray;
}

