### Chương 7: Chia nhỏ các biểu thức cồng kềnh

Loài mực ống là một loài động vật thông minh và khá thú vị, chúng có một cơ thể hoàn chỉnh ngoại trừ một điểm yếu duy nhất: bộ não có hình bánh rán bao quanh thực quản, khiến chúng mỗi khi nuốt thức ăn sẽ làm ảnh hưởng đến bộ não của mình.

Liên hệ với code, một "đoạn" code quá dài sẽ gây ra những hiệu ứng không đáng có. Nghiên cứu chỉ ra rằng bộ não chỉ có thể xử lí 3, 4 yếu tố cùng một lúc. Vậy nên code càng dài sẽ càng khó cho người đọc có thể hiểu được nội dung của đoạn code đó.

> Hãy chia nhỏ đoạn code của bạn thành những đoạn code nhỏ, dễ đọc hơn

#### Explaining variables

Cách đơn giản nhất đó là sử dụng các biến để gán cho các biểu thức con.
Các biến này còn được gọi là "explaining variable" vì chúng giúp giải thích ý nghĩa của biểu thức con.

VD:

```ts
// before

if (line.split(':')[0].strip() === 'root') {}

// after
const userName = line.split(':')[0].strip();

if (userName === 'root') {}
```

#### Summary variables

Ngay cả khi không cần thiết phải giải thích ý nghĩa của biểu thức con (vì bạn có thể hiểu được ngay ý nghĩa của nó) thì việc thay thế biểu thức con bằng các biến số giúp cho việc quản lí code dễ dàng hơn, lúc này các biến thay thế sẽ được gọi là **Summary variable**

VD:

```ts
if (request.user.id === document.owner_id) {
  // user can edit this document...
}

if (request.user.id !== document.owner_id) {
  // document is read-only...
}
```

Biểu thức `request.user.id != document.owner_id` không dài nhưng lại có tới 5 biến số, điều này sẽ làm cho người đọc tốn một chút thời gian để nghĩ về nó.

Mục đích chính của biểu thức này là "kiểm tra xem, liệu user có phải là chủ nhân của document" hay không?

Mục đích trên có thể được thể hiện một cách rõ ràng hơn thông qua một **summary variable** như sau:

```ts
const userOwnsDocument = request.user.id === document.owner_id

if (userOwnsDocument) {
  // user can edit this document...
}

if (!userOwnsDocument) {
  // document is read-only...
}
```

Việc đọc biểu thức điều kiện `if(userOwnsDocument)` như trên sẽ dễ dàng hơn rất nhiều.

#### Sử dụng luật De-Morgan

Với luật này ta có thể biến đổi các biểu thức logic sao cho dễ đọc hơn như sau:

```ts
// before
if (!(file_exists && !is_protected)) Error("Sorry, could not read file.");

// after
if (!file_exists ||!is_protected) Error("Sorry, could not read file.");
```

#### Lạm dụng các biểu thức logic ngắn

Trong các ngôn ngữ lập trình, toán tử logic sẽ thực thi các đáng giá logic ngắn. Ví dụ với biểu thức `if(a | b)` thì giá trị của `b` sẽ không được xem xét nếu giá trị của `a` là `true`. Điều này khá hữu ích tuy nhiên nó cũng hay bị lạm dụng trong các biểu thức phức tạp hơn.

VD:

```c#
assert((!(bucket = FindBucket(key))) || !bucket->IsOccupied());
```

Đoạn code trên có ý nghĩa như sau: tìm `bucket` ứng với `key`, nếu có thì kiểm tra xem nó có bị chiếm giữ (`!bucket->IsOccupied()`) hay không.

Tuy chỉ có một dòng nhưng việc đọc biểu thức này lại khá tốn thời gian. Trái lại, nếu viết như sau:

```c#
bucket = FindBucket(key);
if (bucket != NULL) assert(!bucket->IsOccupied());
```

Với ý nghĩa hoàn toàn tương tự, dù được viết trên 2 dòng thế nhưng đoạn code này lại dễ hiểu hơn rất nhiều.

Vậy tại sao lại có những "đoạn code 1 dòng" như vậy? Viết như vậy trông "ngầu" hơn rất nhiều, đồng thời khiến cho việc đọc code cũng cần "dùng đến não" nhiều hơn. Thế nhưng nó lại khiến cho tốc độ đọc code bị ảnh hưởng đáng kể.

> Cảnh giác với những đoạn code thông minh - Chúng có thể khiến người đọc cảm thấy khó hiểu

