import HeroService from '../services/index.js';

export const getAll = async (req, res) => {
  const heroes = await HeroService().getAll();
  res.json(heroes);
}

export const createOne = async (req, res) => {
  const { body } = req;
  console.log(body);
  const hero = await HeroService().create({ name: 'sdfdsf' });
  res.json(hero);
}

export const getById = async (req, res) => {
  const { params: { id } } = req;
  const hero = await HeroService().getById(id);
  res.json(hero);
}

export const updateById = async (req, res) => {
  const { body, params: { id } } = req;
  const hero = await HeroService().updateById(body);
  res.json(hero);
}

export const deleteById = async (req, res) => {
  const { params: { id } } = req;
  await HeroService().deleteById(body);
  res.status(200).send();
}

