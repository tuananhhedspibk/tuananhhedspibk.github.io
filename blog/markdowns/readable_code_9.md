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
