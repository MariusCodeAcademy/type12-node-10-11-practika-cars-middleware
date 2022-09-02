const express = require('express');
const mysql = require('mysql2/promise');
const dbConfig = require('../config');

const carRouter = express.Router();

// parsisiusti visus 2 automobilius

const columsArr = ['id', 'title', 'image', 'price', 'numberPlates'];
const selectedColumns = columsArr.join(', ');

// GET /api/cars
carRouter.get('/', async (req, res) => {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `SELECT ${selectedColumns} FROM cars WHERE deleted = 0`;
    console.log('sql ===', sql);
    const [rows] = await conn.query(sql);
    res.status(200).json(rows);
    conn.end();
  } catch (error) {
    console.log('error ', error);
    res.status(500).json({
      msg: 'Something went wrong',
    });
  }
});

module.exports = carRouter;
