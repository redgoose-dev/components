# media-source

컴포넌트 하나에서 이미지나 비디오를 출력합니다.


## Using

이미지를 사용하는 느낌으로 사용할 수 있습니다.  
하지만 이 컴포넌트를 사용하는 이유는 같은 모습의 이미지와 비디오를 사용하는때가 알수없는 상태에서 유용합니다.

```html
<media-source src="filename.jpg"/>

<script type="module">
import MediaSource from '/src/projects/media-source';
customElements.define('media-source', MediaSource);
</script>
```


## Attributes

### src

- type: `string`
- value: `*.jpg|*.png|*.gif|*.svg|*.mp4`

이미지나 비디오 주소

### alt

- type: `string`

컴포넌트의 대체설명으로 사용하거나 제목으로 사용합니다.

### width

- type: `string`

컴포넌트의 가로 사이즈

### height

- type: `string`

컴포넌트의 높이 사이즈

### poster

- type: `string`

비디오가 나오기전에 잠깐 나오는 대체 이미지

### type

- type: `string`
- value: `video/mp4,video/webm`

비디오 타입


## Stylesheet

스타일시트 변수를 이용하여 일부 스타일 속성을 조절할 수 있습니다.

```
--media-display: block
--media-fit: object-fit
--media-width: width
--media-height: height
--media-max-width: max-width
--media-max-height: max-height
--media-min-width: min-width
--media-min-height: min-height
```
