'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Service = new Schema(
  {
    type: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    description: String
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

module.exports = mongoose.model('Service', Service);
