import TemplateModel from '../Models/TemplateModel.js';

export const home = async (req, res) => {
  res.render('index', {title: 'Node Template'});
};