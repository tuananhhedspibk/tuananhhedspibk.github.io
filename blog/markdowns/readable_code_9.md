# Phần 3: Tái cấu trúc code

Trong phần này chúng ta sẽ cùng nhau bàn về việc thay đổi code ở function level.
Cụ thể là chúng ta sẽ cùng nhau bàn về 3 cách chính để tái cấu trúc code:
- Bóc tách ra được "các vấn đề con không liên quan" đến chương trình chính.
- Sắp xếp lại code để chúng chỉ thực hiện 1 task ở 1 thời điểm nhất định.
- Mô tả code bằng từ ngữ trước, sau đó dùng mô tả này để đưa ra những giải pháp tốt hơn.

## Chương 10: Bóc tách các vấn đề không liên quan

Công việc của các kĩ sư đó là chia nhỏ vấn đề to thành các vấn đề nhỏ hơn để từ đó đi tìm cách giải quyết cho các vấn đề nhỏ đó.

Lời khuyên ở đây đó là **hãy tích cực tìm và bóc tách các vấn đề con không liên quan**. Ý chúng tôi ở đây là:
1. Xem xét một đoạn code hoặc một chương trình và tự đặt ra cho mình một câu hỏi "Mục đích của đoạn code, chương trình này là gì?"
2. Vỡi mỗi dòng code hãy hỏi "Nó có *phục vụ* cho mục đích chính của chương trình hay không? Hoặc nó có đang giải quyết các vấn đề con?"
3. Nếu thấy một số lượng các dòng codes nhất định đang giải quyết **các vấn đề con không liên quan** thì hãy tách chúng thành một hàm riêng.

### Ví dụ mở đầu: findClosetLocation()

Nhiệm vụ của hàm này đó là: *tìm địa điểm gần nhất với điểm đầu vào*


```JS
// Return which element of 'array' is closest to the given latitude/longitude.
// Models the Earth as a perfect sphere.
var findClosestLocation = function (lat, lng, array) {
    var closest;
    var closest_dist = Number.MAX_VALUE;
    for (var i = 0; i < array.length; i += 1) {
        // Convert both points to radians.
        var lat_rad = radians(lat);
        var lng_rad = radians(lng);
        var lat2_rad = radians(array[i].latitude);
        var lng2_rad = radians(array[i].longitude);
        // Use the "Spherical Law of Cosines" formula.
        var dist = Math.acos(Math.sin(lat_rad) * Math.sin(lat2_rad) +
                             Math.cos(lat_rad) * Math.cos(lat2_rad) *
                             Math.cos(lng2_rad - lng_rad));
        if (dist < closest_dist) {
            closest = array[i];
          closest_dist = dist;
        }
    }
    return closest;
};
```

Đa phần đoạn code trên đều tập trung vào việc *tính khoảng cách giữa 2 điểm* - điều này không liên quan nhiều đến chức năng chính của hàm. Vậy nên ta có thể tách nó ra thành một hàm riêng `spherical_distance()`.

```JS
var spherical_distance = function (lat1, lng1, lat2, lng2) {
  var lat1_rad = radians(lat1);
  var lng1_rad = radians(lng1);
  var lat2_rad = radians(lat2);
  var lng2_rad = radians(lng2);
  
  // Use the "Spherical Law of Cosines" formula.
  return Math.acos(Math.sin(lat1_rad) * Math.sin(lat2_rad) +
         Math.cos(lat1_rad) * Math.cos(lat2_rad) *
         Math.cos(lng2_rad - lng1_rad));
};
```

Bây giờ đoạn code của hàm `findClosetLocation` sẽ như sau:

```JS
var findClosestLocation = function (lat, lng, array) {
    var closest;
    var closest_dist = Number.MAX_VALUE;
    for (var i = 0; i < array.length; i += 1) {
        var dist = spherical_distance(lat, lng, array[i].latitude, array[i].longitude);
        if (dist < closest_dist) {
            closest = array[i];
            closest_dist = dist;
        }
    }
    return closest;
};
```

Đoạn code này dễ đọc hơn nhiều vì người đọc chỉ cần tập trung vào phần code thực hiện chức năng chính của hàm.

Hơn nữa việc tách hàm như thế này sẽ giúp cho việc test dễ dàng hơn và tái sử dụng dễ dàng hơn. Bản thân hàm `spherical_distance` cũng có thể được tái sử dụng trong tương lai. Vậy nên ta mới nói đây là "vấn dề không liên quan" bởi bản thân hàm này là độc lập và nó không quan tâm đến việc mình được sử dụng như thế nào.

### Utility code thuần tuý

Sẽ có các task mà mọi chương trình đều thực hiện (đọc - ghi file, chỉnh sửa xâu).

Thông thường các hàm utility này đều đã được triển khai sẵn bởi ngôn ngữ lập trình. Ví dụ:
- PHP: có hàm đọc nội dung file `file_get_contents("filename")`
- Python: `open("filename").read()`

Nhưng có những trường hợp ta phải tự mình triển khai các hàm này. Nếu thư viện chưa có sẵn các hàm utility, hãy viết nó. Dần dần bạn sẽ có một tập hợp các hàm utilities của riêng mình.

### Code có mục đích chung khác

Như ví dụ dưới đây, sử dụng hàm `alert` trong Javascript để hiển thị pop-up message sau khi gọi `ajax` để lấy dữ liệu từ server.

```JS
ajax_post({
    url: 'http://example.com/submit',
    data: data,
    on_success: function (response_data) {
        var str = "{\n";
        for (var key in response_data) {
            str += "  " + key + " = " + response_data[key] + "\n";
        }
        alert(str + "}");
        // Continue handling 'response_data' ...
    }
});
```

Mục đích của `ajax_post()` là gửi request đến server, nhận và xử lí dữ liệu trả về. Bản thân nội dung của hàm `on_success` có thể tách thành một hàm riêng đó là `format_pretty` để hiển thị kết quả theo một format lên alert của trình duyệt.

```JS
var format_pretty = function (obj) {
    var str = "{\n";
    for (var key in obj) {
        str += "  " + key + " = " + obj[key] + "\n";
    }
    return str + "}";
};
```

### Lợi ích ngoài mong đợi

Ngoài lợi ích tái sử dụng thì việc tách hàm `format_pretty` còn cho phép chúng ta dễ dàng cải thiện hàm. Khi làm việc với những hàm con sẽ dễ dàng cho chúng ta:
- Xử lí các trường hợp đặc biệt
- Thêm tính năng

Ví dụ hàm `format_pretty` chỉ xử lí:
- Trường hợp đầu vào là object chứ không xử lí khi đầu vào là string, ...
- Trường hợp đầu vào là nested-object thì hàm chỉ in ra `[object Object]`

Hơn nữa việc in object một cách đệ quy sẽ rất khó thực hiện nếu không tách hàm.

Code cải thiện sẽ như sau:

```JS
var format_pretty = function (obj, indent) {
    // Handle null, undefined, strings, and non-objects.

    if (obj === null) return "null";
    if (obj === undefined) return "undefined";
    if (typeof obj === "string") return '"' + obj + '"';
    if (typeof obj !== "object") return String(obj);
    if (indent === undefined) indent = "";

    // Handle (non-null) objects.
    var str = "{\n";
    for (var key in obj) {
        str += indent + "  " + key + " = ";
        str += format_pretty(obj[key], indent + " ") + "\n";
    }
    return str + indent + "}";
};
```

### Tạo thật nhiều đoạn code có thể tái sử dụng

Hàm `format_pretty` có thể tái sử dụng lại ở nhiều nơi. Trên thực tế các hàm như vậy thường được đưa vào thư mục `util/`.

Càng tạo ra nhiều các hàm như vậy thì sẽ càng tốt vì:
- Dự án của bạn sẽ nhỏ vì không phải code lại những hàm hỗ trợ như vậy
- Có thể yên tâm sử dụng chúng (thư viện, template, ...) mà không cần quan tâm đến bên trong

> Có 2 hướng tiếp cận trong lập trình
> Top-down: thiết kế và triển khai các hàm ở mức cao trước, sau đó mới triển khai các hàm cấp thấp để hỗ trợ các hàm cấp cao
> Bottom-up: giải quyết các vấn đề ở cấp thấp bằng cách triển khai các hàm ở cấp thấp trước, sau đó sẽ kết hợp chúng lại để giải quyết vấn đề ở cấp cao hơn
> Trên thực tế, 2 hướng tiếp cận này thường được sử dụng cùng lúc với nhau

### Chức năng đặc trưng của dự án

Lấy ví dụ về một đoạn code chuyển tên người thành business URL

```Python
business = Business()
business.name = request.POST["name"]

url_path_name = business.name.lower()
url_path_name = re.sub(r"['\.]", "", url_path_name) url_path_name = re.sub(r"[^a-z0-9]+", "-", url_path_name) url_path_name = url_path_name.strip("-")

business.url = "/biz/" + url_path_name
business.date_created = datetime.datetime.utcnow() business.save_to_database()
```

Đoạn code trên đang "làm sạch URL" và chuyển nó thành một URL hợp lệ (VD: My Name -> /biz/my-name).

Có thể tách đoạn xử lí "Chuyển tên thành một URL hợp lệ" thành một hàm riêng như sau:

```Python
CHARS_TO_REMOVE = re.compile(r"['\.]+")
CHARS_TO_DASH = re.compile(r"[^a-z0-9]+")

def make_url_friendly(text):
    text = text.lower()
    text = CHARS_TO_REMOVE.sub('', text) text = CHARS_TO_DASH.sub('-', text) return text.strip("-")
```

Bây giờ thì đoạn code ban đầu sẽ trở nên dễ đọc hơn rất nhiều

```Python
business = Business()
business.name = request.POST["name"]
business.url = "/biz/" + make_url_friendly(business.name) business.date_created = datetime.datetime.utcnow() business.save_to_database()
```

Hàm `make_url_friendly` có thể coi là hàm dùng chung, nó có thể được đưa vào `util/` hoặc để tại folder hiện tại cũng được nhưng điều quan trọng ở đây là ta đã bóc tách được một vấn đề không liên quan đến chức năng chính của chương trình ra thành một hàm riêng.

### Đơn giản hoá interface hiện có

Mọi người đều thích một thư viện có interface "sạch":
- Có ít tham số đầu vào
- Dễ dàng sử dụng
- Không cần cài đặt quá nhiều

Sử dụng một interface "sạch" cũng giúp code của bạn đơn giản và hiệu quả hơn.

Tuy nhiên nếu interface đang dùng không được "sạch" cho lắm, bạn vẫn có thể viết các hàm bao cho nó.

Lấy ví dụ: khi bạn cần truy cập thông tin cookie của trình duyệt, trình duyệt chỉ cung cấp dữ liệu cookie dưới dạng xâu `document.cookie` trong khi bản chất của cookie lại là các cặp `key/value`. Vậy nên khi cần truy xuất một cặp `key/value` nào đó trong cookie bạn cần phải duyệt qua rất nhiều thông tin chứa trong nó. Ví dụ như đoạn code sau dùng để đọc ra thông tin về `max_results` có trong cookie

```JS
var max_results;
var cookies = document.cookie.split(';');

for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i];
    c = c.replace(/^[ ]+/, '');  // remove leading spaces
    if (c.indexOf("max_results=") === 0)
    max_results = Number(c.substring(12, c.length));
}
```

Một đoạn code khá loằng ngoằng phải không. Chúng ta có thể tạo và sử dụng hàm `get_cookie` như sau:

```JS
var max_results = Number(get_cookie("max_results"));
```

Việc set giá trị cho cookie lại càng trông "lạ hơn".

```JS
document.cookie = "max_results=50; expires=Wed, 1 Jan 2020 20:53:47 UTC; path=/";
```

Cảm giác như thể chúng ta đang overwrite toàn bộ giá trị của cookie vậy. Nhưng không, "bằng một cách nào đó" chỉ có `max_results` là được set giá trị. Sẽ tốt hơn nếu chúng ta có một hàm như sau:

```JS
set_cookie(name, value, days_to_expire);
```

Bài học ở đây đó là **bạn không nhất thiết phải chịu đựng việc sử dụng một interface "bẩn" như vậy**. Bạn hoàn toàn có thể tạo các wrapper functions để che dấu đi các khuyết điểm của interface mà bạn đang gặp phải.
