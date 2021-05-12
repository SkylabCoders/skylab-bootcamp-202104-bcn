/**
 * Generic Model CRUD Operations
 */
const GenericRepository = Model => ({
  getAll() {
    return Model.find();
  },
  getById(id) {
    return Model.findById(id);
  },
  deleteById(id) {
    return Model.findByIdAndRemove(id);
  },
  updateById(id, data) {
    return Model.findOneAndUpdate(id, data);
  },
  create(data) {
    return Model.create(data);
  },
});

export default GenericRepository;
