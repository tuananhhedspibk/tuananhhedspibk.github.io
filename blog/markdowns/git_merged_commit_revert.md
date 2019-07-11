## Tiến hành revert các commits đã merged trong git

Bài viết được dịch từ [nguồn](https://qiita.com/awakia/items/5fad0c454ddc7b478ff1)

### Revert là gì

Dùng khi muốn xoá đi commit hoặc quay trở lại trạng thái trước khi thay đổi. Nhưng thực chất **git revert** thường được sử dụng với các commits đã được đưa lên **remote** (Không thể dùng **git reset**, **git reflog**)

### Sử dụng revert với các commits bình thường

Với các commits bình thường chỉ cần chỉ ra id của commit mà ta muốn revert là xong

```shell
git revert commit_id
```

### Sử dụng revert với merge commit

Tuy nhiên với merge commit thì nếu sử dụng câu lệnh như trên thì sẽ gặp lỗi như sau

```shell
git revert commit_id
fatal: Commit commid_id is a merge but no -m option was given.
```

Trong trường hợp này ta sẽ thêm tuỳ chọn **-m** để giải quyết

```shell
git revert -m 1 commid_id
```

### Giải thích thêm

Tuỳ chọn **-m** có nghĩa là **mainline** và số đằng sau chính là **parent-number**. Thông thường **parent-number** có giá trị là 1, 2. Hai gía trị này sẽ tương ứng với **commit id** xuất hiện lần lượt trong câu lệnh **git show** dưới đây

Câu lệnh **git show**
- Với commit thông thường sẽ show ra các thông tin như **người commit**, **commit message**, **git diff**
- Với commit merge thì sẽ show ra thêm **2 commit**
  - 1 commit merge liền trước nó
  - 1 commit ngay trước đó (có thể là commit thường)


Ví dụ:

```shell
git show f60f24d                            
commit f60f24d34845fba4e038b3e165f74973b3a19580
Merge: 049d32b ebbcb6a
```

thì 1 chính là **049d32b**, 2 chính là **ebbcb6a**
