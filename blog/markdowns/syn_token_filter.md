# Synonym Token Filter

Tham khảo từ [nguồn 1](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-synonym-tokenfilter.html#analysis-synonym-tokenfilter) và [nguồn 2](https://medium.com/@lucasmagnum/elasticsearch-setting-up-a-synonyms-search-facea907ef92)

## Định nghĩa cơ bản

Cho phép xử lí các từ đồng nghĩa trong quá trình phân tích

Có thể configure để thiết lập cho **synonym** như sau

```javascript
PUT /bank
{
  "settings": {
    "index" : {
      "analysis" : {
        "analyzer" : {
          "my_analyzer" : {
            "tokenizer" : "standard",
            "filter" : ["my_synonym_filter"]
          }
        },
        "filter" : {
          "my_synonym_filter" : {
            "type" : "synonym",
            "synonyms" : ["laptop", "notebook"]
          }
        }
      }
    }
  }
}
```

Sử dụng **synonyms_path** với file synonyms riêng, **synonyms** nếu muốn định nghĩa trực tiếp khi định nghĩa index

## Các tuỳ chọn khác

- **lenient** - mặc định là **false**, nếu **true** thì sẽ bỏ qua các ngoại lệ khi parsing synonym config
- **expand** - mặc định là **true**

Xét ví dụ

```javascript
"synonym" : {
    "type" : "synonym",
    "lenient": true,
    "synonyms" : ["foo, bar => baz"]
}
```
Từ *bar* bị bỏ qua nhưng mapping **foo => baz** vẫn được thêm vào
Nếu **synonyms** là **"foo, bar, baz"**　và expand = **false** (target word sẽ là từ đầu tiên)　nếu là **true** thì mappings sẽ là **foo, baz => foo, baz**

Chú ý nếu mapping là **foo, baz => bar** (target word cho mapping là **bar** - từ này là 1 stop-word)

## Các loại synonyms format

Có hai **synonym formats** được hỗ trợ: Solr, WordNet

**Solr synonyms**

- **Explicit mappings**: (Loại này sẽ bỏ qua tham số expand parameter trong schema)
  - i-pod, i pod => ipod
  - sea biscuit, sea biscit => seabiscuit

- **Equivalent synonyms**: chia cách bằng dấu phẩy, mapping behavior sẽ được lấy từ expand param, cho phép dùng 1 file synonym cho nhiều cách thức xử lí synonym khác nhau
  - ipod, i-pod, i pod
  - universe, cosmos

- Nếu **expand==true** => sẽ tương đương với **Explicit mappings**
  - ipod, i-pod, i pod => ipod, i-pod, i pod

- Nếu **expand==false** => sẽ tương đương với **Explicit mappings** tuy nhiên **target word** sẽ là **từ đầu tiên**
  - ipod, i-pod, i pod => ipod

- Các synonym mappings có thể bị merged
  - foo => foo bar, foo => baz ====(merge)====> foo => foo bar, baz


## WordNet synonyms

Có thể định nghĩa thông qua tham số **format**

```javascript
PUT /test_index
{
    "settings": {
        "index" : {
            "analysis" : {
                "filter" : {
                    "my_synonym" : {
                        "type" : "synonym",
                        "format" : "wordnet",
                        "synonyms" : [
                            "s(100000001,1,'abstain',v,1,0).",
                            "s(100000001,2,'refrain',v,1,0).",
                            "s(100000001,3,'desist',v,1,0)."
                        ]
                    }
                }
            }
        }
    }
}
```
