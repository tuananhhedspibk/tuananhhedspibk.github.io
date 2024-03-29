## Chương 11: Một tác vụ tại một thời điểm

Những đoạn code làm nhiều việc cùng một lúc thường khá khó để đọc hiểu, ví dụ như thực hiện
- Parse input
- Convert object
- Trả ra output

cùng một lúc sẽ khó theo dõi hơn nhiều so với việc thực hiện từng task riêng.

> Code nên được tổ chức để chúng chỉ thực hiện một tác vụ tại một thời điểm. Hình vẽ dưới đây sẽ minh hoạ cho quá trình "defragment" code của bạn

![スクリーンショット 2021-09-10 19 02 51](https://user-images.githubusercontent.com/15076665/132837206-4b7dcd37-ef50-489b-a1e3-3d652d22a22f.png)

Bạn thường nhận được lời khuyên đó là "một hàm chỉ làm một nhiệm vụ duy nhất". Ở đây cũng vậy, việc chia nhỏ một hàm là rất tốt tuy nhiên nếu trong một hàm lớn mà ta biết cách tổ chức, phân tách code thì việc giữ nguyên một hàm lớn cũng không phải là một điều gì đó quá tệ.

Dưới đây là cách chúng tôi thường làm để phân tách code trong một hàm:

1. Liệt kê các tasks mà hàm thực hiện. Sử dụng từ task ở đây cũng không hẳn đã đúng vì nó có thể nhỏ tới mức "validate object" hoặc lớn đến mức "duyệt toàn bộ node của một cây".
2. Chia các tasks này ra nhiều nhất có thể thành các hàm riêng hoặc thành các sections code khác nhau.

### Các task có thể nhỏ

Giả sử ta có một hệ thống vote các comment với "Up Vote" tương đương với +1 điểm, "Down Vote" tương đương với -1 điểm.

![Screen Shot 2021-09-12 at 15 41 19](https://user-images.githubusercontent.com/15076665/132976548-a5a3dfed-9cea-409f-b6d7-477ec9bcf9d5.png)

Khi user click vào một trong số các button thì hàm sau sẽ được gọi

```JS
vote_changed(old_vote, new_vote);  // each vote is "Up", "Down", or ""
```

Hàm này sẽ update score và làm việc với mọi trường hợp của `old_vote/new_vote`

```JS
var vote_changed = function (old_vote, new_vote) {
  var score = get_score();
  if (new_vote !== old_vote) {
    if (new_vote === 'Up') {
      score += (old_vote === 'Down' ? 2 : 1);
    } else if (new_vote === 'Down') {
      score -= (old_vote === 'Up' ? 2 : 1);
    } else if (new_vote === '') {
      score += (old_vote === 'Up' ? -1 : 1);
    }
  }
  set_score(score);
};
```

Hàm này khá là gọn nhưng nó lại thực hiện quá nhiều tasks một lúc. Sẽ rất khó để phát hiện bug, lỗi typo khi chỉ nhìn lướt qua.

Code tưởng chừng như chỉ làm một việc đó là cập nhật score nhưng trên thực tế nó thực hiện 2 công việc như sau:
- Parse giá trị của `old_value` & `new_value` thành các giá trị số
- Cập nhật score

Chúng ta có thể giúp cho đoạn code trở nên dễ hiểu hơn bằng việc viết solution cho từng task một cách riêng rẽ. Ví dụ với task đầu tiên "Parse giá trị của `new_value` & `old_value`".

```JS
var vote_value = function (vote) {
  if (vote === 'Up') {
    return +1;
  }
  if (vote === 'Down') {
    return -1;
  }
  return 0;
};
```

Và phần còn lại của code sẽ giải quyết task thứ 2:

```JS
var vote_changed = function (old_vote, new_vote) {
  var score = get_score();
  score -= vote_value(old_vote);  // remove the old vote
  score += vote_value(new_vote);  // add the new vote
  set_score(score);
};
```

### Bóc tách các giá trị từ Object

Giả sử chúng ta có một task đó là bóc tách các thông tin từ dữ liệu địa chỉ và đưa ra dưới dạng xâu "Thành Phố, Đất nước". Minh hoạ như hình dưới đây: 

<img src="https://user-images.githubusercontent.com/15076665/133739683-51550c0d-bd1e-4eb3-9328-6b4f413a9260.png" width="720">

Tuy nhiên trong trường hợp thiếu dữ liệu
- Nếu `LocalityName` không có thì `SubAdministrativeAreaName` sẽ được sử dụng.
- Nếu `SubAdministrativeAreaName` không có thì `AdministrativeAreaName` sẽ được sử dụng.
- Nếu `AdministrativeAreaName` không có thì sẽ đưa ra "Middle-of-NoWhere" để thay thế.
- Nếu `CountryName` không có thì sẽ đưa ra `Planet Earth` để thay thế.

<img src="https://user-images.githubusercontent.com/15076665/133740007-1952fb54-8ff3-4048-b1d9-fdb8c0d378dc.png" width="720">

Đoạn code triển khai sẽ như sau:

```JS
var place = location_info["LocalityName"];  // e.g. "Santa Monica"

if (!place) {
  place = location_info["SubAdministrativeAreaName"];  // e.g. "Los Angeles"
}
if (!place) {
  place = location_info["AdministrativeAreaName"];  // e.g. "California"
}
if (!place) {
  place = "Middle-of-Nowhere";
}
if (location_info["CountryName"]) {
    place += ", " + location_info["CountryName"];  // e.g. "USA"
} else {
   place += ", Planet Earth";
}
return place;
```

Hơi rối một chút nhưng nó hoạt động tốt, giả sử nếu với địa điểm ở Mỹ thay vì đưa ra tên đất nước, sẽ đưa ra tên của bang.
VD: "Santa Monica, USA" -> "Santa Monica, Carlifornia"

Nếu thêm tính năng trên thì **chắc chắn** code sẽ rối hơn rất nhiều

### Áp dụng "Một task tại Một thời điểm"

Để ý một chútt chúng ta sẽ thấy đoạn code phía trên thực hiện nhiều tasks cùng một lúc:
- Tách dữ liệu ra từ `location_info` dictionary
- Đưa ra dữ liệu cho "City", đặt giá trị mặc định cho nó là "Middle-Of-Nowhere"
- Đựa ra dữ liệu cho "Country", đặt giá trị mặc định cho nó là "Planet Earth"
- Cập nhật giá trị cho place

Ta sẽ chia nhỏ thành 4 tasks con thực hiện các nhiệm vụ một cách độc lập:

```JS
var town    = location_info["LocalityName"];               // e.g. "Santa Monica"
var city    = location_info["SubAdministrativeAreaName"];  // e.g. "Los Angeles"
var state   = location_info["AdministrativeAreaName"];     // e.g. "CA"
var country = location_info["CountryName"];                // e.g. "USA"
```

Lúc này ta đã xong nhiệm vụ với `location_info` và có thể sử dụng 4 biến thay vì phải nhớ từng `key` của `location_info`.

Bây giờ sẽ tiến hành thiết lập giá trị cho "hai nửa".

1. Nửa thứ 1:

```JS
var first_half = "Middle-of-Nowhere";

if (state && country !== "USA") {
  first_half = state;
}

if (city) {
  first_half = city;
}

if (town) {
  first_half = town;
}
```

2. Nửa thứ 2:

```JS
var second_half = "Planet Earth";

if (country) {
  second_half = country;
}

if (state && country === "USA") {
  second_half = state;
}
```

Cuối cùng là "ghép" hai nửa lại với nhau:

```JS
return first_half + ", " + second_half;
```

Dưới đây là hình mình hoạ cho quá trình refactor lại code.

<img src="https://user-images.githubusercontent.com/15076665/133785416-7d2289ff-ad86-4b36-8d5b-fc9c4bda4cca.png" width="720">

### Cách tiếp cận khác

Có nhiều cách tiếp cận khi tiến hành refactor code, việc chia nhỏ task sẽ giúp việc đọc code dễ dàng hơn. Ở đoạn code đã được refactor ở trên, nếu để ý kĩ vẫn có đoạn có thể chia thành 2 tasks con:
1. Duyệt qua một danh sách các biến và chọn ra biến phù hợp
2. Sử dụng một danh sách khác với điều kiện riêng cho trường hợp `country` là "USA"

Ta có thể chia trường hợp với giá trị "USA" như sau:

```JS
var first_half, second_half;

if (country === "USA") {
  first_half = town || city || "Middle-of-Nowhere";
  second_half = state || "USA";
} else {
  first_half = town || city || state || "Middle-of-Nowhere";
  second_half = country || "Planet Earth";
}

return first_half + ", " + second_half;
```

### Một ví dụ rộng hơn

Trong hệ thống web crawling mà chúng tôi mới xây dựng, có một hàm gọi là `UpdateCounts()` được gọi để update các chỉ số thống kê mỗi khi một trang web được tải xuống.

```C#
void UpdateCounts(HttpDownload hd) {
  counts["Exit State" ][hd.exit_state()]++;       // e.g. "SUCCESS" or "FAILURE"
  counts["Http Response"][hd.http_response()]++;  // e.g. "404 NOT FOUND"
  counts["Content-Type" ][hd.content_type()]++;   // e.g. "text/html"
}
```

Đây là những gì mà chúng tôi *muốn*.

Tuy nhiên trong thực tế thì `HttpDownload` object không hề có các method như trên, thay vào đó nó là một class phức tạp với nhiều class lồng ở bên trong, ngoài ra trong một số trường hợp các giá trị trên có thể không có và khi đó chúng tôi phải thay bằng giá trị mặc định "unknown".

Vì thế code hiện tại trông khá là lộn xộn:

```C#
// WARNING: DO NOT STARE DIRECTLY AT THIS CODE FOR EXTENDED PERIODS OF TIME.
void UpdateCounts(HttpDownload hd) {
  // Figure out the Exit State, if available.
  if (!hd.has_event_log() || !hd.event_log().has_exit_state()) {
    counts["Exit State"]["unknown"]++;
  } else {
    string state_str = ExitStateTypeName(hd.event_log().exit_state());
    counts["Exit State"][state_str]++;
  }

  // If there are no HTTP headers at all, use "unknown" for the remaining elements.
  if (!hd.has_http_headers()) {
    counts["Http Response"]["unknown"]++;
    counts["Content-Type"]["unknown"]++;
    return;
  }
    
  HttpHeaders headers = hd.http_headers();
  // Log the HTTP response, if known, otherwise log "unknown"
  if (!headers.has_response_code()) {
    counts["Http Response"]["unknown"]++;
  } else {
    string code = StringPrintf("%d", headers.response_code());
    counts["Http Response"][code]++;
  }

  // Log the Content-Type if known, otherwise log "unknown"
  if (!headers.has_content_type()) {
    counts["Content-Type"]["unknown"]++;
  } else {
    string content_type = ContentTypeMime(headers.content_type());
    counts["Content-Type"][content_type]++;
  }
}
```

Code trên thực hiện khá nhiều tasks cùng một lúc:
1. Sử dụng "unknown" như là giá trị mặc định cho các key.
2. Kiểm tra xem khi nào member của HttpDownload không tồn tại.
3. Bóc tách giá trị, chuyển thành dạng `string`
4. Cập nhật `counts[]`.

Chúng ta có thể cải thiện đoạn code trên để phân chia code theo task như sau:

```C#
void UpdateCounts(HttpDownload hd) {
  // Task: define default values for each of the values we want to extract
  string exit_state = "unknown";
  string http_response = "unknown";
  string content_type = "unknown";
  // Task: try to extract each value from HttpDownload, one by one
  if (hd.has_event_log() && hd.event_log().has_exit_state()) {
    exit_state = ExitStateTypeName(hd.event_log().exit_state());
  }
  if (hd.has_http_headers() && hd.http_headers().has_response_code()) {
    http_response = StringPrintf("%d", hd.http_headers().response_code());
  }
  if (hd.has_http_headers() && hd.http_headers().has_content_type()) {
    content_type = ContentTypeMime(hd.http_headers().content_type());
  }
  // Task: update counts[]
  counts["Exit State"][exit_state]++;
  counts["Http Response"][http_response]++;
  counts["Content-Type"][content_type]++;
}
```

Có thể thấy rằng 3 đoạn code trong hàm thực hiện lần lượt 3 tasks sau:
1. Định nghĩa giá trị mặc định
2. Bóc tách giá trị từ `HttpDownload` object
3. Update counts.

Một ưu điểm có thể thấy rõ ở cách viết này đó là khi đọc mỗi đoạn code ta không cần quan tâm đến các đoạn code khác.

### Cải thiện hơn nữa

Chúng ta cũng có thể viết các hàm helper để cải thiện code như sau

```C#
void UpdateCounts(HttpDownload hd) {
  counts["Exit State"][ExitState(hd)]++;
  counts["Http Response"][HttpResponse(hd)]++;
  counts["Content-Type"][ContentType(hd)]++;
}
```

Các hàm này sẽ bóc tách giá trị tương ứng từ các object hoặc trả về giá trị mặc định là "unknown"

```C#
string ExitState(HttpDownload hd) {
  if (hd.has_event_log() && hd.event_log().has_exit_state()) {
    return ExitStateTypeName(hd.event_log().exit_state());
  } else {
    return "unknown";
  }
}
```

Việc tách function như trên sẽ giúp giảm đi các biến trung gian.

### Tổng kết

Nếu cảm thấy code khó đọc, hãy liệt kê các tasks mà code đang thực hiện. Xem xét việc chia ra thành các functions.
