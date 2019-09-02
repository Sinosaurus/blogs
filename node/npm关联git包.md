# npm 关联 git包
由于现在项目越做越多，很多公共的部分相互公用，需要尽可能早地提炼出来，这样便可以在其他项目进行引用，而不是每次建一个项目就需要进行拷贝，这样太痛苦了，因而想通过类似npm包管理来进行处理

## npm 包

+ 初始化一个项目
+ 定义 `package.json`
  - version 版本（注意书写格式，若是报 invalid version， 便需要审查下了)
  - main 用来定义文件地址，用来对外公开的

## 其他项目关联包
+ package-name: git地址
  - git地址定位具体的分支或者标签 `# + 具体的分支/标签`

基本上就可以了

## 目前github推出了对应的包管理系统[link](https://help.github.com/cn/articles/configuring-npm-for-use-with-github-package-registry)


## 注意
+ 使用git关联包，迭代不是很方便
