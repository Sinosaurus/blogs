# wordpress 攒知识点

记录开发 `wordpress` 的一些技能点，以备不时之需

- 短代码 [Shortcode](https://blog.wpjam.com/article/wordpress-shortcode/)

虽然很多插件都是提供，直接在代码中插入类似`[Shortcode]` 便可以生效，但是很多时候需要通过处理一下才会生效`do_shortcode`

```
<?php
    echo do_shortcode('[插件信息]');
?>
```

- 模板

通过在新建的`php`文件头部添加`<?php /* Template Name: 模板名称 */ ?>`，便可以在后台编辑页选中指定的模板，进行关联开发

- 后台编辑页面中写的数据，如何在代码中渲染

  - 方式一
    ```
      <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
          <?php the_content(); ?>
      <?php endwhile; endif; ?>
    ```
  - 方式二
    ```
      <?php the_content(); ?>
    ```
  - **方式三**
    ```
      <?php
        $post=get_post(get_the_ID());
        echo $post->post_content;
      ?>
    ```
    > 上述三种方式，推荐使用**方式三**， 这样可以减少生成很多空的 `p` 标签，以免影响样式

- 函数 [查询地址](https://blog.wpjam.com/article/wp-template-cheatsheet/)
  - [the_post_thumbnail](https://developer.wordpress.org/reference/functions/the_post_thumbnail/)
    - [缩略图](https://blog.wpjam.com/function_reference/the_post_thumbnail/)
  - [get_post_meta](https://blog.wpjam.com/function_reference/get_post_meta/)
  - get_post(get_the_ID())->post_title 标题
  - get_post(get_the_ID())->post_excerpt 简介
  - \$getThumbnail = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), 'full') [link](https://blog.wpjam.com/m/get_post_thumbnail_url/)
  - get_stylesheet_directory_uri 获取样式文件绝对地址 （http...)，这样写文件地址，前面加这个函数，后面写当前文件下的地址即可
    ```
      <?= get_stylesheet_directory_uri() . '/imgs/***.png' ?>
    ```
  - the_permalink()
- bloginfo [link](https://blog.wpjam.com/article/wp-template-cheatsheet/)
- get_template_part
- [get_posts](https://blog.wpjam.com/m/speed-up-wordpress-wp_query-and-query_posts-functions/)
- foreach( $posts as $post ) : setup_postdata( \$post )
  ```
  <?php $posts = get_posts( "category=1&numberposts=" ); ?>
    <?php if( $posts ) : ?>
        <ul>
          <?php foreach( $posts as $post ) : setup_postdata( $post ); ?>
          <li>
            <div class="box">
              <?php
                $getThumbnail = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), 'full');
              ?>
              <figure style="background-image: url(<?php echo $getThumbnail[0]; ?>)">
                <a href="<?php the_permalink() ?>"></a>
              </figure>
              <div class="content">
                <h3><a href="<?php the_permalink() ?>" title="<?php the_title(); ?>"><?php the_title(); ?> IT…</a></h3>
                <span class="line"></span>
                <p>
                <?php echo get_the_time('Y年Mj日'); ?></p>
                <a class="btn-more" href="<?php the_permalink() ?>">了解更多</a>
              </div>
            </div>
          </li>
          <?php endforeach; ?>
        </ul>
    <?php endif; ?>
  ```

### 总结

- 后期再进行慢慢补充，目前是自己开发，很多不是很 `php` 慢慢改了
