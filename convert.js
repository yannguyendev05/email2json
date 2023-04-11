// Lấy tham chiếu đến các phần tử HTML
const emailListTextarea = document.getElementById('emailList');
const convertBtn = document.getElementById('convertBtn');

// Thêm sự kiện click vào nút Convert to JSON
// Thêm sự kiện click vào nút Convert to JSON
convertBtn.addEventListener('click', () => {
    // Lấy tham chiếu đến phần tử HTML chứa kết quả
    const resultContainer = document.getElementById('resultContainer');

    // Xóa kết quả cũ nếu có
    while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
    }

    // Lấy danh sách email và mật khẩu từ textarea
    const emailList = emailListTextarea.value.trim().split('\n');

  
    // Tạo danh sách EmailAccount
    const emailAccounts = emailList.map((line) => {
        const [username, password] = line.trim().split('|');
        return { Username: username, Password: password };
    });

    // Tạo đối tượng chứa danh sách EmailAccount
    const resultObject = { Accounts: emailAccounts };

    // Chuyển đổi đối tượng thành chuỗi JSON
    const json = JSON.stringify(resultObject);

    // Tạo một TextBox mới để hiển thị kết quả
    const resultTextbox = document.createElement('textarea');
    resultTextbox.id = 'resultTextbox';
    resultTextbox.rows = '10';
    resultTextbox.value = json;
    resultContainer.appendChild(resultTextbox);

    // Tạo một nút Copy để sao chép kết quả
    const copyBtn = document.createElement('button');
    copyBtn.id = 'copyBtn';
    copyBtn.textContent = 'Copy';
    resultContainer.appendChild(copyBtn);

    // Thêm sự kiện click vào nút Copy
    copyBtn.addEventListener('click', () => {
        // Sao chép chuỗi JSON vào Clipboard
        resultTextbox.select();
        document.execCommand('copy');
    });
});
