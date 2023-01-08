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

export { changeStatus };
