//Tìm kiếm
const searchForm = document.getElementById('employee-search');
searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchResult = document.getElementById('search-text').value;
    const response = await fetch(`/nhan-vien/tim-kiem?search-query=${searchResult}`,{method: 'GET',});
    const data = await response.json();
});

//Bộ lọc
const filterForm = document.getElementById('filter');
filterForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const ViTriLamViec = document.getElementById('ViTriLamViec').value;
  const ChuyenMonLamViec = document.getElementById('ChuyenMonLamViec').value;
  const GioiTinh = document.getElementById('GioiTinh').value;
  const minExperience = document.getElementById('minExperience').value;
  const maxExperience = document.getElementById('maxExperience').value;
  
  const response = await fetch(`/nhan-vien/bo-loc?ViTriLamViec=${ViTriLamViec}&ChuyenMonLamViec=${ChuyenMonLamViec}&GioiTinh=${GioiTinh}&minExperience=${minExperience}&maxExperience=${maxExperience}`, {
    method: 'GET',
  });

  const data = await response.json();
  // Xử lý dữ liệu trả về và hiển thị kết quả lọc
});


