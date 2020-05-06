# 记录 wordpress 的 api 使用

## API

- [get template part](https://codex.wordpress.org/zh-cn:%E8%B0%83%E7%94%A8%E6%A8%A1%E6%9D%BF%E9%83%A8%E5%88%86/get_template_part)

  > 用法

  ```
  <?php get_template_part( $slug, $name ); ?>
  ```

  > 参数

  |  参数  |  类型  | 是否必填 | 默认值 |           说明           |
  | :----: | :----: | :------: | :----: | :----------------------: |
  | \$slug | string |    Y     |   -    | 表示一般性模板的 slug 名 |
  | \$name | string | optional |   -    |     特别的模板的名字     |

- [get_the_category](https://developer.wordpress.org/reference/functions/get_the_category/)

> 用法

```
<?php $category = get_the_category() ;?>
```

> 参数

| 参数 | 类型 | 是否必填 | 默认值 |    说明     |          返回值          |
| :--: | :--: | :------: | :----: | :---------: | :----------------------: |
| \$id | int  | Optional |   -    | The post ID | Array of WP_Term objects |
