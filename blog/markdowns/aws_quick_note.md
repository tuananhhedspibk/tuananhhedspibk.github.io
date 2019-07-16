## AWS Quick Note

### 1. Amazon Cognito

Cung cấp **authentication**, **authorization** và **user management** với web, mobile app

Gồm 2 phần:
- User pool - là các **user directories** cung cấp **signin**, **signup** options cho users.
  - Bản chất là user directory, mỗi member sẽ có 1 profile directory mà ta có thể truy cập thông qua SDK
- Identity pool - cho phép phân quyền access của user đối với các AWS services
  - Có thể được sử dụng để lấy về **temporary AWS credential** cho mục đích access các AWS services khác
  - Cần tích hợp với **User pool** để lưu trữ **user profile information**

Cơ chế hoạt động
1. Đăng nhập thông qua **user pool**, **user pool** sẽ cung cấp **user pool token** (bản chất là JSON web tokens - JWT) cho phía user nếu đăng nhập thành công
2. Tiếp theo, hoán đổi giữa **token** và **AWS credentials** thông qua **identity pool**
3. Sử dụng **AWS credential** này để truy cập vào các **AWS Services**
