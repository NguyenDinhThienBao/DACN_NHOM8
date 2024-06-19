// Lấy nút "Thêm nhân viên" và form
const addEmployeeBtn = document.querySelector('.add-employee');
const addEmployeeForm = document.querySelector('.form-addEmployee');

// Thêm sự kiện click cho nút "Thêm nhân viên"
addEmployeeBtn.addEventListener('click', () => {
  addEmployeeForm.classList.add('show');
  overlay.classList.add('show');
});

// Thêm sự kiện click bên ngoài form và overlay để ẩn form
window.addEventListener('click', (event) => {
  if (event.target === addEmployeeForm || event.target === overlay) {
    addEmployeeForm.classList.remove('show');
    overlay.classList.remove('show');
  }
});
