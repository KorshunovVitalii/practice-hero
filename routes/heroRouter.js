 const {Router} = require('express');
 const HeroController = require('../controllers/Hero.controller');
 
 const heroRouter = Router();

 heroRouter.post('/', HeroController.createHero);


 module.exports = heroRouter;
