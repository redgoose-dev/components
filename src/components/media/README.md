# media

컴포넌트 하나에서 이미지나 비디오를 출력한다.


## Using

```html
<script type="module">
import Media from './index.js';
customElements.define('comp-media', Media);
</script>
```


## Attributes

### src

- value: `jpg,png,gif,svg,mp4`

이미지나 비디오 주소

### alt

컴포넌트의 대체설명으로 사용하거나 제목으로 사용한다.

### width

컴포넌트의 가로 사이즈

### height

컴포넌트의 높이 사이즈

### poster

비디오가 나오기전에 잠깐 나오는 데체 이미지
