/**
 * media source
 * print image or video
 */

class MediaSource extends HTMLElement {

  constructor()
  {
    super();
    this.name = 'comp-media';
    this.rendered = false;
    this.$root = this.attachShadow({ mode: 'open' });
    this.$body = undefined;
    this.$root.appendChild(this.template.content.cloneNode(true));
  }

  get props()
  {
    return {
      src: this.getAttribute('src'),
      alt: this.getAttribute('alt'),
      width: this.getAttribute('width'),
      height: this.getAttribute('height'),
    };
  }

  get template()
  {
    let template = document.createElement('template');
    template.innerHTML = `
<style>
.comp-media {
  display: var(--media-display, inline-block);
  object-fit: var(--media-fit, unset);
  width: var(--media-width, unset);
  height: var(--media-height, unset);
  max-width: var(--media-max-width, 100%);
  max-height: var(--media-max-height, unset);
}
</style>
`.trim();
    return template;
  }

  static get observedAttributes()
  {
    return [ 'src', 'alt', 'width', 'height' ];
  }

  /**
   * update attributes
   *
   * @param {string} name
   * @param {string} oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(name, oldValue, newValue)
  {
    if (!this.rendered) return;
    switch (name)
    {
      case 'src':
        this.clear();
        this.updateSource();
        break;
      case 'alt':
        this.updateAlt();
        break;
      case 'width':
      case 'height':
        this.updateSize();
        break;
    }
  }

  /**
   * mounted component
   */
  connectedCallback()
  {
    // set elements
    this.updateSource();
    this.updateAlt();
    this.updateSize();
    // mark rendered
    this.rendered = true;
  }

  /**
   * unmounted component
   */
  disconnectedCallback()
  {}

  updateSource()
  {
    const { src } = this.props;
    if (!src) return;
    let type = src.split('.')[src.split('.').length - 1];
    if (/^data:image/.test(src)) type = 'jpg';
    switch(type)
    {
      case 'mp4':
        this.$body = document.createElement('video');
        this.$body.src = src;
        if (this.getAttribute('poster'))
        {
          this.$body.poster = this.getAttribute('poster');
        }
        this.$body.autoplay = true;
        this.$body.playsInline = true;
        this.$body.muted = true;
        this.$body.loop = true;
        break;
      case 'jpg':
      case 'png':
      case 'gif':
      case 'svg':
        this.$body = document.createElement('img');
        this.$body.src = src;
        break;
      default:
        return;
    }
    this.$body.classList.add('comp-media');
    this.$root.appendChild(this.$body);
  }

  clear()
  {
    if (!this.$body) return;
    this.$root.removeChild(this.$body);
    this.$body = undefined;
  }

  updateAlt()
  {
    const { $body, props } = this;
    if (!$body) return;
    let attr = $body.tagName.toLowerCase() === 'img' ? 'alt' : 'title';
    $body[attr] = props.alt || '';
  }

  updateSize()
  {
    if (this.props.width) this.$body.width = this.props.width;
    if (this.props.height) this.$body.height = this.props.height;
  }

}

export default MediaSource;
