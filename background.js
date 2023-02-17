const youtubeUrls = ["https://bing.com/*", "https://*.bing.com/*"];
const desiredUA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.41";

chrome.webRequest.onBeforeSendHeaders.addListener(
  function (reqInfo) {
    reqInfo.requestHeaders.push({ name:"User-Agent", value:desiredUA });
    return { requestHeaders: reqInfo.requestHeaders };
  }, { urls: youtubeUrls }, ['blocking', 'requestHeaders']);
