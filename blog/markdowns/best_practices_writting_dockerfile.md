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

Trong quá trình build, nếu sơ ý để lẫn cả những files không cần thiết vào build context sẽ dẫn đến kích thước image lớn, thời gian build, pull, push chậm và kích cỡ của container cũng sẽ lớn theo. Để biết được kích cỡ của image, hãy xem message như dưới đây trong quá trình build image.

```
Sending build context to Docker daemon  187.8MB
```

#### Pipe dockerfile thông qua stdin

Docker có khả năng build images thông qua việc pipe các `Dockerfiles` bằng `stdin` với *local hoặc remote build context*.

Việc build thông qua piping sẽ khá hữu ích khi `Dockerfile` không có trong bộ nhớ, hoặc `Dockerfile` được generate chứ không được lưu trữ vĩnh viễn.

```shell
echo -e 'FROM busybox\nRUN echo "hello world"' | docker build -

docker build -<<EOF
FROM busybox
RUN echo "hello world"
EOF
```

#### Build docker image sử dụng Dockerfile từ stdin mà không cần build context

Kí hiệu hyphen(-) sẽ thay thế vị trí của PATH, docker sẽ đọc nội dung `Dockerfile` thông qua `stdin` thay vì build context directory.

```shell
docker build [OPTIONS] -
```

```shell
docker build -t myimage:latest -<<EOF
FROM busybox
RUN echo "hello world"
EOF
```