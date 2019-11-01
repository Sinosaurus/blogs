# [semantic-ui](https://semantic-ui.com/) 的表单使用

最近找了一款ui库，jquery可以使用的。可以进行个性化定制，感觉还不错。

## 现状
简单阐述下该ui的现状吧，目前止步于2.4的版本，github商讨了一波。大致是死掉了，很久没有再接着更新了，留下了一些问题。接着便有人基于该库进行继续迭代[link](https://fomantic-ui.com/introduction/getting-started.html)，赞一个

基于上述说法，个人推荐直接使用网友接着开发的，之前的功能保留，而且还在持续添加新的组件。同时历史遗留的bug也得以解决

## form使用 [demo](https://sinosaurus.github.io/example/semantic-ui/)
+ form表单使用，一般涉及到如下几个
  - 校验规则
  - 你有我无
  - 跳转到指定的错误位置
  - 获取值
  - 同一个意思涉及到多种表单类型（eg: 有其他时，输入，于是上面的单选框就不用进行校验)

> 现针对上面的一一进行处理

+ 校验规则
  ```
    $('.ui.form').form({
      on: 'blur',
      fields: {}
    })
  ```
  目前有两种显示错误方式
    - 当前表单下方，需要添加
      ```
        <div class="ui error message"></div>
      ```
    - 设置`inline: true`

  + 校验规则两种写法

    - 简单方法
      ```
        fields: {
          name     : 'empty',
          skills   : ['minCount[2]', 'empty'],
          terms    : 'checked'
        }
      ```
    - 复杂点【可以进行自定义】
      ```
        fields: {
          name: {
            identifier: 'name',
            rules: [
              {
                type   : 'empty',
                prompt : 'Please enter your name'
              }
            ]
          },
          skills: {
            identifier: 'skills',
            rules: [
              {
                type   : 'minCount[2]',
                prompt : 'Please select at least two skills'
              }
            ]
          },
          terms: {
            identifier: 'terms',
            rules: [
              {
                type   : 'checked',
                prompt : 'You must agree to the terms and conditions'
              }
            ]
          }
        }  
      ```  

+ 你有我无【动态添加校验规则】
    
    目前直接通过值的判断，来进行控制是否显示
    ```
      $('#input').on('input', (e) => {
        const value = e.target.value
        if (value) {
          $('.ui.form').form('remove rule', 'language')
          /**
           * 有点版本还需要手动去清除样式
           * 有些可以使用 validate field 进行单独校验即可
           */
        } else {
          $('.ui.form').form('add rule', 'language', {
            rules: [
              {
                type: 'checked',
                prompt: '选择一门你喜欢的语言'
              }
            ]
          })
          $('.ui.form').form('validate field', 'language')
        }
      })
    ```

+ 跳转到指定的错误位置

  由于使用了该库的样式，导致获取错误信息的位置`scrollTop`为`0`,主要原因是对`html`设置了`height: 100%`
  因而需要尝试其他方式
  > 在`onFailure`中进行处理
  ```
    setTimeout(function() {
      // 获取第一个错误位置
      var res = $('.field.error')[0].getBoundingClientRect()
      var top = document.scrollingElement.scrollTop + res.y
      // 此处有一个疑惑点 为何需要 -120 目前没有深入研究
      $(document.scrollingElement).scrollTop(top - 120)
    }, 16)
  ```


+ 获取值
  一般的都可以通过在 `onSuccess`中的`fields`可以拿到所有`name`的值，但是针对`checkbox`多选时，一直拿到的是最后一个值，按道理是数组，多个值才对，因而需要注意其使用规范
 
  > html
  ```
    <input type="checkbox" name="books[]" value="自传">
  ```
  > 校验
  ```
    books: {
      identifier: 'books[]',
      rules: [{
        type: 'checked',
        prompt: '选择喜欢的书籍'
      }]
    }
  ```
  之后通过上面的`fields`便可以拿到值，只是需要过滤一下`false`情况即可


+ 同一个意思涉及到多种表单类型
  > 类似`你有我无`的处理方式，只是在获取值时，需要有一个侧重点，是否是输入了其他，上面的单选框就失效，还是怎么的。反正两个值都可以拿到，只是在传给后台时，稍微处理一下即可

> 细节处理
  
  针对 `type=radio` 和 `type=checkbox` 校验，若是需要显示错误信息，目前尽可能使用第二种方式，不然提示信息会默认选择第一个**值**作为错误信息显示，这样明显有问题，只有采用第二种才可以进行自定义错误信息显示


### 总结
+ [code](https://github.com/Sinosaurus/example/tree/master/semantic-ui)
+ 版本不同会有细微区别（特别是checkbox，校验时，明明选择了，还是变红，需要更换版本）[link](https://stackoverflow.com/questions/37029048/semantic-ui-checkbox-validation)