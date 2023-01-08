const textClamp = (str, numChars) => {
  if (str.length < numChars) {
    return str;
  }
  const newStr = str.substring(0, numChars) + "...";
  return newStr;
};

const changeStatus = (arr, id, newStatus) => {
  const newArr = [];
  arr.forEach((n) => {
    if (n.id === id) {
      newArr.push({ ...n, ["status"]: newStatus });
    } else {
      newArr.push(n);
    }
  });
  return newArr;
};

export { changeStatus, textClamp };
