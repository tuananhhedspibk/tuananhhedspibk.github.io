## Distributed System Design Pattern

Nội dung được dịch từ cuốn [分散システムデザインパータン](https://www.amazon.co.jp/%E5%88%86%E6%95%A3%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3-%E2%80%95%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%A9%E3%83%96%E3%83%AB%E3%81%AA%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%81%AE%E8%A8%AD%E8%A8%88-Brendan-Burns/dp/4873118751/ref=sr_1_1?adgrpid=65059292346&gclid=Cj0KCQjw9pDpBRCkARIsAOzRzitnKPZZ98HsDze__t1PI_LgajZjVQMe50h_XYi4eflf6TztiFzeewoaAjxHEALw_wcB&hvadid=338568615101&hvdev=c&hvlocphy=1009309&hvnetw=g&hvpos=1t1&hvqmt=b&hvrand=18383670850358265229&hvtargid=aud-762433167318%3Akwd-723632982637&hydadcr=27267_11561158&jp-ad-ap=0&keywords=%E5%88%86%E6%95%A3%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3&qid=1562730481&s=gateway&sr=8-1)

### Chương 1: Single Node Pattern

Nội dung chính của cuốn sách là về **Hệ thống phân tán** tức là hệ thống hoạt động trên nhiều máy tính khác nhau, cũng như được cấu thành từ các components khác nhau. Nhưng trong chương này sẽ trình bày về pattern hoạt động trên một máy tính duy nhất. Lí do rất đơn giản. Trong cuốn sách này các **container** sẽ được nhóm thành các **group**, nó là cấu thành nguyên tử **(atomic)** của một pattern hệ thống phân tán

#### 1.1 Lí do sử dụng pattern single node

Mỗi một ứng dụng đều cần phải được thiết lập 1 lượng tài nguyên sử dụng nhất định (VD: ứng dụng cần sử dụng 2CPU, 8GB RAM). Việc sử dụng pattern single node ở đây cũng là để thiết lập **team ownership** - nghĩa là team này sẽ quản lí container image nào. Ngoài ra cũng để phân chia nhiệm vụ cho từng container (container này sẽ chỉ đảm nhận 1 nhiệm vụ nhất định)

Đầu tiên hãy nghĩ đến việc phân tách tài nguyên. Ta xét ví dụ một hệ thống gồm 2 server:
- Server application hướng người dùng
- Server đọc các files config

Ưu tiên đầu tiên luôn là đối với độ trễ request nên đối với server hướng người dùng thì thông thường phải đảm bảo sự đầy đủ của tài nguyên. Ngược lại, khi request từ người dùng đến nhiều thì việc chậm trễ nhưng hệ thống vẫn hoạt động tốt thì server đọc các files config vẫn được coi là hoạt động tốt. Ngoài ra thì server này cũng không nên làm giảm chất lượng của service đối với người dùng cuối.

Từ những lí do này, ta cần thiết phải tách 2 servers này thành 2 containers riêng lẻ. Để qua đó vừa có thể gán thứ tự ưu tiên, điều kiện đối với tài nguyên cho chúng. Cũng như khi server app hướng người dùng rảnh rỗi thì server đọc files có thể sử dụng tài nguyên mà cản trở gì cả.

Ngoài ra khi gặp những vấn đề về tràn hoặc rò rỉ bộ nhớ dẫn đến việc conflict tài nguyên thì ta có thể tắt server đọc files trước server hướng người dùng
