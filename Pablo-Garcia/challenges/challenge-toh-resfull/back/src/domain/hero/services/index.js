import getHeroModel from '../model/index.js';

const HeroService = () => {
  const HeroModel = getHeroModel();
  return ({
    getAll() {
      return HeroModel.getAll();
    },
    getById(id) {
      return HeroModel.getById(id);
    },
    deleteById(id) {
      return HeroModel.deleteById(id);
    },
    updateById(id, data) {
      return HeroModel.updateById(id, data);
    },
    create(data) {
      return HeroModel.create(data);
    },
  });
};

export default HeroService;
