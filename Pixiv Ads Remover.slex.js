// ==UserScript==
// @name            Pixiv Ads Remover
// @author          kuon
// @description     Ads Remover for Pixiv.
// @description     素人自作、自分用Pixivの広告削除エクステンション
// @version         1
// @include         https://www.pixiv.net/*
// @require         jquery
// ==/UserScript==

function removeAds() {
  $('div[id^="adsdk--"]').remove();
}

setTimeout(() => {
  removeAds();
  setInterval(removeAds, 1000);
}, 10000);
