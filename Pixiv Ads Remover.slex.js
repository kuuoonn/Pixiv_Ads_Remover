// ==UserScript==
// @name            Pixiv Ads Remover
// @author          kuon
// @description     Ads Remover for Pixiv.
// @description:ja  素人自作、自分用Pixivの広告削除エクステンション
// @include         https://www.pixiv.net/*
// @version         1.0
// @require         jquery
// ==/UserScript==

function removeAds() {
  $('div[id^="adsdk--"]').hide();
}

setTimeout(() => {
  removeAds();
  setInterval(removeAds, 1000);
}, 1000);
