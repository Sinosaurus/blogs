# Internal Server Error

```
Internal Server Error
The server encountered an internal error or misconfiguration and was unable to complete your request.

Please contact the server administrator at admin@example.com to inform them of the time this error occurred, and the actions you performed just before this error.

More information about this error may be available in the server error log.

Additionally, a 500 Internal Server Error error was encountered while trying to use an ErrorDocument to handle the request.
```

将 `wordpress` 从仓库中拉下来时，报了上述错误，尝试各种办法也找不到具体解决办法。

## 背景介绍

由于本地需要搭建一套 `wordpress` 环境，鉴于自己不太会服务器这块，只好利用 PHP 环境一键达成的软件 [phpStudy](https://www.xp.cn/)，并从仓库中落下代码，启动。首页进入，完全没问题，但是在通过菜单进入时，就各种问题。
使用 apache 和 nginx 代理时，报的错误还不同。

## 解决之路

目前网上主要偏向于， apache 配置问题

- apache 配置修改
  1. Find and open the file .http.conf. This will be located in your Apache install folder.
  2. Make a backup of http.conf which you can restore from, if anything were to go wrong
  3. Find the line #LoadModule rewrite_module modules/mod_rewrite.so and remove the hash ‘#’
  4. Locate the block within the directory tags as indicated below and change to:


      ```
        <directory />
          Options All
          AllowOverride All
        </directory>
      ```

5. Find any additional occurrences of the line “AllowOverride None” and change it to “AllowOverride All”.
   6.Finally, restart apache server and your browser. The .htaccess rewriting should now be working for any local website.

但是在尝试时，依旧没解决，最后在 `.htaccess` 这个地方思考良久，才发现自己的配置除了问题

> [.htaccess](https://cloud.tencent.com/developer/article/1176078)

- .htaccess

  在 wordpress 目录下，居然有该文件，内容如下

  ```
    # BEGIN WordPress
    <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.php$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.php [L]
    </IfModule>

    # END WordPress
  ```

  发现 `RewriteBase` 和 `RewriteRule` 路劲有问题，修改为当前目录下，便解决了

## 总结

由于自己的电脑有多种终端，而当一个问题出现时，在不同的终端下，报的错误还不相同，因而被迫去理解错误的具体含义，具体原因是什么。目前开发到后期，才发现很多错误需要自己去看其他功底，比如文件读取权限，linux 命令行，等等。趁着这段时间，不断鞭笞自己吧。
