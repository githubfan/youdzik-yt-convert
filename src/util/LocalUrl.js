export default class LocalUrl {

  static saveUrl(newVal) {
    let urls = this.getUrls();
    
    if(!urls.includes(newVal)) {
      urls.push(newVal);
      localStorage.setItem('yd-urls', JSON.stringify(urls));
    }
    
    return urls;
  }

  static getUrls() {
    let localSt = localStorage.getItem('yd-urls');
    return localSt ? JSON.parse(localSt) : [];
  }

  static removeOne(url) {
    let newUrls = this.getUrls().filter(u => !u.includes(url));
    localStorage.setItem('yd-urls', JSON.stringify(newUrls));
    return newUrls;
  }
}