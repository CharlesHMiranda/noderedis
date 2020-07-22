import 'dotenv/config.js';
import express from 'express';
import BullBoard from 'bull-board';
// const express = require('express');
// require('dotenv').config();
import UserController from './app/controllers/UserController.js';
import Queue from './app/lib/Queue.js';

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());

app.post('/users', UserController.store);

app.use('/admin/queues', BullBoard.UI);

app.listen(process.env.PORT, () => {
    console.log(`Server running on the port ${process.env.PORT}`)
});

