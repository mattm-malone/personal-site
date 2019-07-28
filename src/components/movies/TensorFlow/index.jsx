import React from 'react'
import * as tf from '@tensorflow/tfjs'
import WordIndex from '../model/word-index.json'

const labels = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Romance',
  'Thriller',
]

const getFeatures = movie => {
  const movieName = movie
    .replace(/[\W_]+/g, ' ')
    .toLowerCase()
    .trim()
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const words = movieName.split(/\s+/)
  let i = arr.length - words.length
  if (i < 0) i = 0
  for (let j = 0; j < words.length; j++) {
    arr[i] = WordIndex['word_index'][words[j]]
    if (arr[i] == null) arr[i] = 0
    i++
  }
  return [arr]
}

function array_flip(trans) {
  var key,
    tmp_ar = {}
  for (key in trans) {
    if (trans.hasOwnProperty(key)) {
      tmp_ar[trans[key]] = key
    }
  }

  return tmp_ar
}

const prediction_to_probabilities = prediction => {
  let label_pred = []
  for (let i = 0; i < prediction.length; i++) {
    let pred = {}
    pred['genre'] = labels[i]
    pred['pred'] = prediction[i]
    label_pred.push(pred)
  }
  label_pred = label_pred.sort((a, b) => a.pred - b.pred).reverse()
  return label_pred
}

const formatPredictions = predictions => {
  const preds = predictions
  for (let k in preds) {
    preds[k].pred = (predictions[k].pred * 100).toFixed(2)
  }
  return preds
}

export async function getPrediction(input) {
  const model = await tf.loadLayersModel('../model/model.json')
  const features = getFeatures(input)
  const output = model.predict(tf.stack(features))
  const prediction = Array.from(output.dataSync())
  const preds = prediction_to_probabilities(prediction)
  return formatPredictions(preds)
}
