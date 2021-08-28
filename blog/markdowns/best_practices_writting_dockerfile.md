## Best practices khi viết Dockerfile

※ Dịch từ [nguồn](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

`Dockerfile` là file chứa các câu lệnh cần thiết để build một docker image

Một docker image bao gồm các read-only layers (mỗi 1 layer sẽ tương ứng với 1 câu lệnh trong `Dockerfile`). Các layers này sẽ được xếp lên nhau và chúng thể hiện sự khác biệt so với các layers xếp trước. Xét `Dockerfile` sau:

```dockerfile
# syntax=docker/dockerfile:1
FROM ubuntu:18.04
COPY . /app
RUN make /app
CMD python /app/app.py
```

Khi tiến hành khởi tạo container, ta sẽ tạo ra 1 writable-layer ở trên cùng của các layers thuộc về image. Mọi sự thay đổi (ghi, đọc file, ...) của container sẽ được ghi vào layer trên cùng này.

### Hướng dẫn tổng quan và các lời khuyên

#### Tạo các containers nhất thời

Image được định nghĩa bởi `Dockerfile` nên tạo ra các container "nhất thời". Từ "nhất thời" ở đây sẽ được hiểu theo nghĩa, container có thể được tạo, huỷ, khởi tạo lại, thay thế với số lượng các câu lệnh configure ít nhất có thể.

#### Hiểu build context

Khi chạy câu lệnh `docker build` thì thư mục hiện tại sẽ được gọi là `build context`. Mặc định thì `Dockerfile` sẽ được coi là đang được lưu trữ ở thư mục hiện tại, nhưng với tuỳ chọn `-f` thì bất kể `Dockerfile` ở đâu thì mọi files, folder tại build context đều được gửi tới docker daemon.