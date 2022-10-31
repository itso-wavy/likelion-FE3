# 9/19(월)

`이호준 강사님` 
> float, flex, grid는 실습의 영역, 자동으로 코드가 나오도록 훈련이 필요

## 1. CSS(6)
### (12) Grid: 레이아웃④
> https://cssgridgarden.com/#ko
* **2차원 레이아웃** 모델
#### 1) grid-container에 사용하는 속성
```css
display: grid;
grid-template: 50px repeat(3, minmax(50px, 150px)) / 2fr 1fr 1fr;
```
* **트랙 개수**: grid-template-rows(너비) / grid-template-columns(높이)
* **셀의 크기**: 
  * px / fr(fraction): 비율 단위
  * 열(column)을 pixel, percentage, 혹은 ems로 설정시, fr로 설정된 다른 열(column)의 남은 공간으로 나뉘어집니다.
  * repeat 함수(반복@, 크기@)
  * minmax 함수(최소@, 최대@)
  *  auto-fill / auto-fit: 자동으로 필요한 트랙을 만들어 배치, fill은 공간을 채우고, fit은 크기를 맞춘다. 
  ![](https://velog.velcdn.com/images%2Fiandr0805%2Fpost%2F7401c6cd-06cd-4919-9d82-8617f255e383%2F%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C.png)
* **간격**: gap(IE 지원 X)

#### 2) grid-item에 사용하는 속성
```css
grid-area: 1/1/span 2/span 2; 
/* span=채우다(cf. colspan, rowspan), 음수 사용 불가 */
```
* **트랙 영역**: 
  * grid-(row/column)-(start/end)
  * grid-area: row-start/column-start/row-end/column-end (속기법)
  * 각 아이템에 grid-area로 이름을 붙여 grid-template-areas로 직관적인 영역 지정을 할 수 있음
```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
        'header header'
        'aside main'
        'footer footer'
}
.header {
    grid-area: header;
}
``` 
*  **순서**: order(음수 가능)
*  **우선순위**: z-index

### (13) Transition(전이)
Transition: <span style="color: palevioletred">`property` `duration` `timing-function` `delay(ms/s)`</span> (속성/소요시간/시간함수/지체시간)
* transition-property: all/none/property
* transition-timing-function: ease/linear/ease-(in, out, in-out)/step-(start, end, (int/start|end))/cubic-bezier(n/n/n/n)
> https://cubic-bezier.com/#.17,.67,.83,.67


### (14) Transform(변형)
* <span style="color: palevioletred">`scale(x, y)`/`rotate(@deg), (@turn)`/`translate(x, y)`/`skew(@deg)`/`origin`</span> (비율/회전/이동/비틀기/중점 변경)
* scale의 기준은 요소의 중심 ➩ (변경) origin: left/right/top/bottom/center
* transform vs position: transform이 그래픽 가속능력을 사용할 수 있으므로 움직임이 더 부드러움. 동적페이지, 애니메이션 등에 사용하기에 훨씬 유리함

### (15) Animation
* @keyframes: 
* <span style="color: palevioletred">`name`/`duration`/`iteration-count`/`direction`/`timing-function`/`delay`/`play-state`</span> (애니메이션 이름/소요시간/반복횟수/재생방향/시간함수/지체시간/재생여부)
* iteration-count: 1, 2, 3, ..., infinite
* direction: normal/reverse/alternate(-reverse) ~~*왔다갔다*~~
* play-state: running, paused