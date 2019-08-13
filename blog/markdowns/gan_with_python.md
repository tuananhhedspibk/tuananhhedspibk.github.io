## GAN With Python

Dịch tóm tắt nội dung cuốn sách [Generative Adversarial Networks with Python](https://machinelearningmastery.com/generative_adversarial_networks/)

Nguồn ảnh banner: https://ainow.ai/2017/04/18/110994/

### Chương I: GAN là gì

**Generative modeling** là một **unsupervised learning** task trong machine learning, học các pattern từ input image để từ đó tạo ra các bức ảnh output mới

**GAN** là một cách khá hay trong việc huấn luyện **generative model** bằng cách định hình vấn đề như một **supervised learning** task với 2 **sub-models**
- Generate model: tạo ra những bức ảnh mới
- Discriminator model: cố gắng phân loại xem bức ảnh được tạo ra là đúng (cùng domain) hay là fake

Mô hình sẽ được train cho đến khi **discriminator** bị lừa 1 nửa thời gian tức là **generator** tạo ra được những bức ảnh hợp lí
