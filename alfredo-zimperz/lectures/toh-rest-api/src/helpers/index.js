function helpers() {
  const actualId = 30;

  function getNextIdAndUpdateOld(id = actualId) {
    const nextId = id + 1;
    return nextId;
  }
  function getNextId(id = actualId) {
    return id + 1;
  }

  return { getNextIdAndUpdateOld, getNextId };
}

module.exports = helpers();
