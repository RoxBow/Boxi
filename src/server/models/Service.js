'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Information schema Service
 * type -> example (newspaper, fruit, parcel)
 * category -> example for newspaper: sport, beauty, science...
 */

const Service = new Schema(
  {
    type: {
      type: String,
      enum: ['newspaper', 'fruit', 'parcel'],
      required: true
    },
    category: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    price: Number,
    description: String,
    productId: String
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

module.exports = mongoose.model('Service', Service);
