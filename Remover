// ==UserScript==
// @name            Pixiv Ads Remover
// @author          kuon
// @description     Ads Remover for Pixiv.
// @description     素人が自分用に作ったPixivの広告削除エクステンションです。
// @version         0.1
// @include         https://www.pixiv.net/*
// @require         jquery
// ==/UserScript==

function removeAds() {
  $('div[id^="adsdk--"]').remove();
}

removeAds();
setInterval(removeAds, 1000);
