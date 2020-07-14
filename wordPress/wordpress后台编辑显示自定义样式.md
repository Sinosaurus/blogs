# wordpress 后台编辑如何显示定义的`style.css`样式

由于公司官网采用 wordpress 进行搭建，但是却又自己设计页面，无奈主题只能自行构建了，直接修改 wordpress 自带的主题进行修改。

## 问题

如何能够在**可视化**界面编辑时，直接显示需要展示的样式，而不是 wordpress 那一套呢？

## 解决

无意间在后台界面的**设置**中看到`TinyMCE Advanced`的`创建CSS样式菜单`时，才能得以解决

- 在主题页面新建一个文件 `editor-style.css`
- 在`editor-style.css`中引入 `style.css`
  ```
    @import "style.css";
  ```
- functions.php 文件

  ```
    // Add support for editor styles.
  ;

  .
    // TODO: 需要修改为上面定义的文件名 editor-style.css
  ;
  ```

- 刷新页面，这样就能够在**可视化界面**中关联到了自定义的样式

## 解决页面总是被无形添加了 `p/br`标签

> 在`TinyMCE Advanced`中不勾选`保留段落标签`，就可以解决了
