# Emmet StudyBook

## Basic Syntax
* Child: >
* Sibling: +
* Climb-up: ^
* Grouping: ()
* Multiplication: *
* Item numbering: $
* ID and CLASS attributes
* Custom attributes
* Text: {}
* Implicit tag names
  

```html
<div></div>
<div>
    <p><span></span><em></em></p>
    <blockquote></blockquote>
</div>
```
<details>
<summary></summary>
<span>
div+div>p>span+em^bq
</span>
</details>

```html
<div></div>
<div>
    <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```
<details>
<summary></summary>
<span>
div+div>p>span+em^^bq
</span>
</details>

```html
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```
<details>
<summary></summary>
<span>
div>(header>ul>li*2>a)+footer>p
</span>
</details>

```html
<div>
    <dl>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
    </dl>
</div>
<footer>
    <p></p>
</footer>
```
<details>
<summary></summary>
<span>
(div>dl>(dt+dd)*3)+footer>p
</span>
</details>

```html
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>
```
<details>
<summary></summary>
<span>
ul>li.item$*5
</span>
</details>

```html
<h1 title="item1">Header 1</h1>
<h2 title="item2">Header 2</h2>
<h3 title="item3">Header 3</h3>
```
<details>
<summary></summary>
<span style='color: red;'>
h$[title=item$]{Header $}*3
</span>
</details>

```html
<ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
    <li class="item004"></li>
    <li class="item005"></li>
</ul>
```
<details>
<summary></summary>
<span>
ul>li.item$$$*5
</span>
</details>

```html
<ul>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul>
```
<details>
<summary></summary>
<span style='color: red;'>
ul>li.item$@-*5
</span>
</details>

```html
<ul>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
    <li class="item6"></li>
    <li class="item7"></li>
</ul>
```
<details>
<summary></summary>
<span style='color: red;'>
ul>li.item$@3*5
</span>
</details>

```html
<form id="search" class="wide"></form>
```
<details>
<summary></summary>
<span>
form#search.wide
</span>
</details>

```html
<p class="class1 class2 class3"></p>
```
<details>
<summary></summary>
<span>
p.class1.class2.class3
</span>
</details>

```html
<p title="Hello world"></p>
```
<details>
<summary></summary>
<span>
p[title="Hello world"]
</span>
</details>

```html
<td rowspan="2" colspan="3" title=""></td>
```
<details>
<summary></summary>
<span>
td[rowspan=2 colspan=3 title]
</span>
</details>

```html
<div a="value1" b="value2"></div>
```
<details>
<summary></summary>
<span>
[a='value1' b="value2"]
</span>
</details>

```html
<a href="">Click me</a>
```
<details>
<summary></summary>
<span>
a{Click me}
</span>
</details>

```html
<p>Click <a href="">here</a> to continue</p>
```
<details>
<summary></summary>
<span>
p>{Click }+a{here}+{ to continue}
</span>
</details>

```html
<em><span class="class"></span></em>
```
<details>
<summary></summary>
<span>
em>.class
</span>
</details>

```html
<ul>
    <li class="class"></li>
</ul>
```
<details>
<summary></summary>
<span>
ul>.class
</span>
</details>

```html
<table>
    <tr class="row">
        <td class="col"></td>
    </tr>
</table>
```
<details>
<summary></summary>
<span>
table>.row>.col
</span>
</details>


## HTML
## CSS

