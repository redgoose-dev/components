/**
 * sleep (delay tool)
 *
 * @param {number} delay
 * @return {Promise}
 */
export const sleep = (delay = 3000) => {
  return new Promise(resolve => setTimeout(resolve, delay));
};

/**
 * initial custom event
 * 중복되는 `dom`에다 여러 이벤트를 넣고 싶을때(특히 window) 유니크한 이름으로 이벤트를 만들 수 있도록 커스텀 이벤트를 만들어서 사용할때 사용한다.
 * https://gist.github.com/yairEO/cb60592476a4204b27e83048949dbb45
 */
export function initCustomEvent()
{
  if (!window) return;
  const events = {
    on(event, cb, opts)
    {
      if (!this.namespaces) this.namespaces = {};
      if (this.namespaces[event]) this.off(event);
      this.namespaces[event] = cb;
      const options = opts || false;
      this.addEventListener(event.split('.')[0], cb, options);
      return this;
    },
    off(event)
    {
      if (!(this.namespaces && this.namespaces[event])) return;
      this.removeEventListener(event.split('.')[0], this.namespaces[event]);
      delete this.namespaces[event];
      return this;
    },
  };
  window.on = document.on = Element.prototype.on = events.on;
  window.off = document.off = Element.prototype.off = events.off;
}

/**
 * convert pure object
 * `proxy`, `observable`객체를 순수한 객체로 변환해준다.
 *
 * @param {Object|Array} src
 * @return
 */
export function pureObject(src)
{
  if (!src) return null;
  try
  {
    return JSON.parse(JSON.stringify(src));
  }
  catch(_)
  {
    return null;
  }
}

/**
 * object to query string
 *
 * @param {object} src
 * @return {string}
 */
export function convertQueryString(src)
{
  return Object.keys(src).map(key => `${key}=${src[key]}`).filter(Boolean).join('&');
}
