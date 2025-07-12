let tasks = [];

const addTask = () => {
  const taskInput = document.getElementById('task-input');
  const dateInput = document.getElementById('date-input');

  // Validasi input
  if (taskInput.value === '' || dateInput.value === '') {
    alert('Please fill in both fields.');
  } else {

    // Buat objek task baru
    const newTask = {
      task: taskInput.value,
      date: dateInput.value,
      completed: false,
    };

    // Tambah task baru ke array tasks 
    tasks.push(newTask);
    
    // Jadikan input kosong
    taskInput.value = '';
    dateInput.value = '';

    // Log task baru ke konsol (atau bisa ditambahkan ke tabel)
    console.log('Task added:', newTask);
    displayTasks();
  };
};

const displayTasks = () => {
  const taskRow = document.getElementById('task-row');

  // Kosongkan tabel sebelum menampilkan ulang
  taskRow.innerHTML = '';

  if (tasks.length === 0) {
    const noTaskRow = document.createElement('tr');
    noTaskRow.innerHTML = '<td colspan="4" style="text-align: center;">No task found</td>';
    taskRow.appendChild(noTaskRow);
  } else {
    tasks.forEach((task, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${task.task}</td>
        <td>${task.date}</td>
        <td>${task.completed ? 'Completed' : 'Pending'}</td>
        <td>
          <button onclick="toggleStatus(${index})">Toggle Status</button>
          <button onclick="deleteTask(${index})">Delete</button>
        </td>
      `;
      taskRow.appendChild(row);
    });
  }
};

displayTasks();