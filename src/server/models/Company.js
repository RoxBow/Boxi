'use strict';

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const Company = new Schema(
  {
    email: {
      type: String,
      required: [true, "can't be blank"],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
      unique: true,
      trim: true
    },
    name: {
      type: String,
      required: [true, "can't be blank"],
      unique: true,
      trim: true
    },
    director: {
      type: String,
      required: [true, "can't be blank"],
      trim: true
    },
    employees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    isVerified: {
      type: Boolean,
      default: true
    },
    avatar: { type: Schema.Types.ObjectId, ref: 'Image' }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

Company.plugin(passportLocalMongoose, { usernameField: 'email', usernameQueryFields: ['email'] });

module.exports = mongoose.model('Company', Company);
