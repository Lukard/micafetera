var articleCache = new Map();

async function getArticleInfo(productUrl) {
  if (articleCache.get(productUrl) != null) return articleCache.get(productUrl);
  else {
    const url = `https://osm-web-cors-proxy.herokuapp.com/${productUrl}`;
    const html = await (await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36' } })).text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const title =
      doc.getElementById("productTitle")?.textContent?.trim() ??
      doc.getElementById("title")?.textContent?.trim();
    const image =
      doc.getElementById("landingImage")?.getAttribute("data-old-hires") ??
      doc.getElementById("main-image")?.getAttribute("data-a-hires");
    const isPrime =
      doc
        .getElementById("priceBadging_feature_div")
        ?.getElementsByClassName("a-icon-prime") !== undefined;
    const previousPrice = doc.getElementsByClassName(
      "priceBlockStrikePriceString"
    )[0]?.textContent;
    const price =
      doc.getElementById("priceblock_ourprice")?.textContent ??
      doc.getElementById("priceblock_dealprice")?.textContent;
    var article = {
      title: title,
      image: image,
      isPrime: isPrime,
      previousPrice: previousPrice,
      price: price,
    };
    articleCache.set(productUrl, article);
    return article;
  }
}

export { getArticleInfo }