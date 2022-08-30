# Middleware

### Ý nghĩa

-   Là phần mềm trung gian (đứng giữa các thành phần trong mô hình phần mềm)

Browse (client) ========= Request ============> Server (Node)
Browse (client) <========== Response =========== Server (Node)

### Vai trò

-   Giống như "Bác bảo vệ"

Nhà =============================> Bác bảo vệ (middleware):Sự kiện(soát vé)
Nhà <============================= Sự kiện

1. Soát vé (kiểm soát -> validation)
2. Không cho vào
3. Cho phép vào (validation passed => cho vào )
4. Chỉnh sửa/ thay đổi

### Ứng dụng

-   Dựng chức năng xác thực (Authentication)
-   Chức năng phân quyền (Authorization)
-   Để chia sẻ các giá trị của biến tới tất cả các views (BE)
