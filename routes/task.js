// ====================================================
//      Routes API: Task
// ====================================================

const express = require('express');
const taskController = require('../controllers/task');
const api = express.Router();

// =================================
// Todas las tareas
// =================================
api.get('/all', taskController.getTasks);

// =================================
// Todas las tareas por estatus
// =================================
api.get('/all/:status', taskController.getTasksByStatus);

// ==============================
// Una tarea por id
// ==============================
api.get('/:id', taskController.getTaskById);

// ===============================
// Crear nueva tarea
// ===============================
api.post('/save', taskController.saveTask);

// ====================================
// Actualizar tarea
// ====================================
api.put('/:id', taskController.updateTask);

// ====================================
// Actualizar tarea
// ====================================
api.put('/:id/status', taskController.updateStatusTask);

// ====================================
// Actualizar tarea
// ====================================
api.delete('/:id', taskController.deleteTask);

module.exports = api;