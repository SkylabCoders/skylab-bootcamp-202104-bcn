async function createOne(req, res) {
    const data = new INFO.find(url)
    try {
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      res.send(error);
    }
  }