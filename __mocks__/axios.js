const get = () => {
  console.log("Hitting mock");
  return Promise.resolve({
    data: {
      title: "delectus aut autem"
    }
  });
};

module.exports.get = get;