// Generate unique ID
exports.generateId = () => {
  const randomStr = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return (
    randomStr() +
    randomStr() +
    randomStr() +
    randomStr() +
    randomStr() +
    randomStr() +
    randomStr()
  );
};
