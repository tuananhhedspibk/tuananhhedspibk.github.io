## Grid cho layout, Flexbox cho components

> Bài viết được dịch từ [nguồn](https://ishadeed.com/article/grid-layout-flexbox-components/)

※ Ảnh banner được lấy từ [nguồn](https://medium.com/youstart-labs/beginners-guide-to-choose-between-css-grid-and-flexbox-783005dd2412)

※ Bài viết chủ động giữ nguyên các thuật ngữ bằng tiếng Anh

Em trai tôi mới tốt nghiệp ngành kĩ thuật máy tính, cậu ta hiện tại đang hoàn thành quá trình thực tập của mình với công việc front-end development. Cậu ấy đã học được về CSS grid và flexbox, nhưng tôi nhận thấy một vấn đề mà cậu ấy đang gặp phải (vấn đề này cũng đã được đề cập trên nhiều trang web). Cậu ta không thể quyết định khi nào sử dụng grid, khi nào sử dụng flexbox. Một ví dụ là khi cậu ấy sử dụng CSS grid để layout cho header của trang web và thấy rằng nó trông không "mượt" như khi cậu ấy sử dụng `grid-column` và cố gẳng chỉnh sửa cho đến khi trông giống với thiết kế mẫu.

Thực sự thì tôi không thích điều đó, và tôi cũng cố tìm các tài liệu để cậu ấy có thể thấy được những sự khác biệt giữa grid và flexbox với ví dụ kèm theo, nhưng thật tiếc là tôi không thể. Nên tôi quyết định viết một blog nói về mọi thứ liên quan đến chủ đề đó. Hi vọng các bãn cũng sẽ thấy nó hữu ích!

### Giới thiệu

Trước khi đi sâu vào các khái niệm và các ví dụ, tôi muốn các bạn hiểu được sự khác biệt chính giữa CSS grid và flexbox. CSS Grid là một multi-dimension layout module, nghĩa là nó có cả hàng và cột. Flexbox có thể trải các phần tử con của nó hoặc là theo hàng hoặc là theo cột, nhưng KHÔNG THỂ CẢ HAI.


