const Link = require('../models/linkModel');
const mongoose = require('mongoose');

const getLinks = async (req, res) => {
  const links = await Link.find({}).sort({createdAt: -1});

  res.status(200).json(links);
}

const getLink = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such link' });
  }

  const link = await Link.findById(id);

  if (!link) {
    return res.status(404).json({ error: 'no such link' });
  }

  res.status(200).json(link);
}

const postLink = async (req, res) => {
  const { title, url, icon } = req.body;

  try {
    const link = await Link.create({ title, url, icon });
    res.status(200).json(link);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const deleteLink = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such link' });
  }

  const link = await Link.findOneAndDelete({_id: id});

  if (!link) {
    return res.status(404).json({ error: 'no such link' });
  }

  res.status(200).json(link)
}

const updateLink = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such link' });
  }

  const link = await Link.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!link) {
    return res.status(404).json({ error: 'no such link' });
  }

  res.status(200).json(link);
}

module.exports = {
  getLinks,
  getLink,
  postLink,
  deleteLink,
  updateLink
}