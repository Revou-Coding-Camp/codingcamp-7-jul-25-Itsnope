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
  };
};