'use strict';

/**
 * create-burger service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::create-burger.create-burger');
