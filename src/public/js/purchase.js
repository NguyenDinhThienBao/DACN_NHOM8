// Lấy các phần tử cần sử dụng
const priceProductElement = document.querySelector('.priceProduct');
const priceElement = document.querySelector('.price');
const taxMoneyElement = document.querySelector('.tax-money');
const totalPriceElement = document.querySelector('.total-price');
const quantityInput = document.querySelector('.quantity');


function updateCurrentDate() {
    const currentDate = new Date().toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    document.getElementById('current-time').textContent = currentDate;
  }
  // Gọi hàm để cập nhật ngày mỗi giây
  setInterval(updateCurrentDate, 1000);


// Hàm tính toán giá sản phẩm
function calculatePrice() {
  const priceProduct = parseFloat(priceProductElement.textContent.replace(/,/g, ''));
  const quantity = parseInt(quantityInput.value);
  const totalPrice = priceProduct * quantity;
  const taxMoney = totalPrice * 0.15;

  // Định dạng giá trị theo tiền tệ
  const formattedProductPrice = totalPrice.toLocaleString('vi-VN', 
    { style: 'currency', 
      currency: 'VND' 
    }
  );
  const formattedTaxMoney = taxMoney.toLocaleString('vi-VN', 
    { style: 'currency', 
      currency: 'VND' 
    }
  );
  const formattedTotalPrice = (totalPrice + taxMoney).toLocaleString('vi-VN', 
    { style: 'currency',
     currency: 'VND' 
    }
  );
  priceElement.textContent = formattedProductPrice;
  taxMoneyElement.textContent = formattedTaxMoney;
  totalPriceElement.textContent = formattedTotalPrice;
}

// Gắn sự kiện thay đổi số lượng để tính toán lại giá
quantityInput.addEventListener('input', calculatePrice);

// Tính toán giá ban đầu
calculatePrice();

const updateButton = document.querySelector('.price-info-wrapper button');
updateButton.addEventListener('click', calculatePrice);

