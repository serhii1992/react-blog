export const getPagesCount = (totalPosts, limit) => {
  return Math.ceil(totalPosts / limit);
};

export const getPagesArray = (totalPages) => {
  const result = [];
  for (let i = 1; i <= totalPages; i++) {
    result.push(i);
  }
  return result;
};
