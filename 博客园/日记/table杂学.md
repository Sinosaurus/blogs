# table
 - 使用table时总是有各种细节问题
 - 对td设置宽度时，会无效，只能通过padding来撑开 
 - 若是在table外套一层div 给其固定宽度，则table宽度固定，td的宽度则等分table宽度，设置的width就无效了
 - 目前解决 
   - 通过padding挤开
   - 对table设置 `white-space: nowrap; 	word-break:keep-all;` 不知道为什么没有效果
   - 还有的对table 设置 `table-layout:fixed`
   - 在td中添加div盒子
> 但是就目前而言 只有 `padding` `套div`靠谱
> 表格过大 超出父盒子的宽度时，可以一来就对table进行缩小显示，鼠标经过回原等
```
//css
table, td {
			border: 1px solid #ccc;
		}
		table {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			border-collapse: collapse;
			/*table-layout:fixed;*/
		}
		td {
           padding: 0 50px;
			/*width: 200px;*/
			height: 30px;
			text-align: center;
			vertical-align: middle;

			white-space: nowrap;
			word-break:keep-all;
			
		}
		.box {
		   margin: 10px auto;
			width: 500px;
			height: 200px;
			overflow: auto;
			background-color: skyblue;
			position: relative;
		}
// js
const box = document.querySelector('.box'),
	      table = document.querySelector('table')
    const boxwidth = box.offsetWidth,
          tablewidth = table.offsetWidth

    const scalenum = boxwidth / tablewidth   
    table.style.transform = 'scale('+scalenum+') translateX(-50%)' 
    table.style.transformOrigin = '0 center'

    box.onmouseenter = function() {
       table.style.transform = 'translateX(-50%)'
    }
    box.onmouseleave = function() {
       table.style.transform = 'scale('+scalenum+') translateX(-50%)' 
       table.style.transformOrigin = '0 center'
    }
```