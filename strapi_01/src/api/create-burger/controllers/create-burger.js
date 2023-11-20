'use strict';

/**
 * create-burger controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::create-burger.create-burger');
