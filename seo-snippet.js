// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.survivorsofsiblingsuicide.org",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.survivorsofsiblingsuicide.org/","title_tag":"Survivors of Sibling Suicide Support Group | SOSS","meta_description":"Sanctuary for grieving siblings with peer support for grief after sibling suicide. Nonprofit sibling support offering comfort for sibling survivors worldwide."},{"page_url":"https://www.survivorsofsiblingsuicide.org/our-mission","title_tag":"Healing After Sibling Loss Support | Survivors of Sibling Suicide","meta_description":"Our mission is grief support for siblings after suicide loss. A sanctuary for grieving siblings offering emotional support for siblings and sibling grief resources."},{"page_url":"https://www.survivorsofsiblingsuicide.org/messageforyou","title_tag":"Comfort for Sibling Survivors | Survivors of Sibling Suicide","meta_description":"A message of hope, love, and comfort for sibling survivors coping with sibling suicide. Emotional support for siblings walking through deep grief and loss."},{"page_url":"https://www.survivorsofsiblingsuicide.org/inmemoryofjustin","title_tag":"Healing After Sibling Loss | In Memory of Justin | SOSS","meta_description":"Justin’s sister shares her journey of healing after sibling loss to suicide, offering grief support for siblings and comfort for sibling survivors worldwide."},{"page_url":"https://www.survivorsofsiblingsuicide.org/note-to-self-4-4-22","title_tag":"Grief Support for Siblings | Note to Self 4/4/22 | SOSS","meta_description":"Reflections on healing after sibling loss and moving through grief at your own pace. Gentle peer support for grief and emotional support for siblings."},{"page_url":"https://www.survivorsofsiblingsuicide.org/note-to-self-3-12-22","title_tag":"Healing After Sibling Loss | Note to Self 3/12/22 | SOSS","meta_description":"Guidance on walking with grief after sibling suicide. Find grief support for siblings, peer support for grief, and hope for healing after sibling loss."},{"page_url":"https://www.survivorsofsiblingsuicide.org/note-to-self-2-16-22","title_tag":"Grief Support for Siblings | Note to Self 2/16/22 | SOSS","meta_description":"A sibling’s note to self on living with loss and love after suicide. Gentle comfort for sibling survivors and emotional support for siblings in grief."},{"page_url":"https://www.survivorsofsiblingsuicide.org/note-to-self-2-14-22","title_tag":"Emotional Support for Siblings | Note to Self 2/14/22 | SOSS","meta_description":"Tender reflections on grief, self‑care, and healing after sibling loss. Emotional support for siblings navigating sorrow at their own pace."},{"page_url":"https://www.survivorsofsiblingsuicide.org/our-siblings-forever-loved","title_tag":"Sibling Grief Resources | Our Siblings Forever Loved | SOSS","meta_description":"Tribute pages honoring siblings gone too soon. A sanctuary for grieving siblings and comfort for sibling survivors keeping their memories alive."}],"keywords":["survivors of sibling suicide","sibling suicide support group","grief support for siblings","peer support for grief","sibling grief resources","nonprofit sibling support","healing after sibling loss","emotional support for siblings","sanctuary for grieving siblings","comfort for sibling survivors"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.survivorsofsiblingsuicide.org/#organization",
  "name": "Survivors of Sibling Suicide Inc.",
  "url": "https://www.survivorsofsiblingsuicide.org/",
  "description": "Survivors of Sibling Suicide (SOSS) is a sibling-to-sibling nonprofit peer support group that offers a sanctuary of support, hope, and comfort for survivors of sibling suicide. Support is provided via Zoom meetings, private Facebook groups, a phone support line, email, and resources on the website.",
  "image": "https://static.wixstatic.com/media/fa8364_72c54278887c4e37b9caf4054ef1392c%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/fa8364_72c54278887c4e37b9caf4054ef1392c%7Emv2.jpg",
  "sameAs": [
    "https://www.facebook.com/groups/survivorsofsiblingsuicide/",
    "https://www.facebook.com/groups/sossletterstomysibling"
  ],
  "email": "mailto:survivorsofsiblingsuicide@gmail.com",
  "telephone": "+1-763-415-0252",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-763-415-0252",
      "contactType": "customer support",
      "areaServed": "US",
      "availableLanguage": [
        "en"
      ]
    },
    {
      "@type": "ContactPoint",
      "email": "mailto:survivorsofsiblingsuicide@gmail.com",
      "contactType": "customer support",
      "availableLanguage": [
        "en"
      ]
    }
  ],
  "nonprofitStatus": "https://schema.org/Nonprofit501c3",
  "founder": {
    "@type": "Person",
    "name": "Justin's Sister"
  },
  "keywords": [
    "sibling suicide support",
    "survivors of sibling suicide",
    "suicide grief support group",
    "peer-to-peer grief support",
    "sibling grief resources"
  ],
  "knowsAbout": [
    "grief after sibling suicide",
    "peer-to-peer support groups",
    "sibling bereavement",
    "suicide loss support",
    "online grief support meetings"
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Survivors of Sibling Suicide Support Group",
      "url": "https://www.facebook.com/groups/survivorsofsiblingsuicide/"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Survivors of Sibling Suicide Support Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Peer-to-Peer Zoom Support Meetings",
          "description": "Online peer-to-peer support group meetings for survivors of sibling suicide, held every Saturday and Wednesday via Zoom.",
          "provider": {
            "@id": "https://www.survivorsofsiblingsuicide.org/#organization"
          },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "Audience",
            "audienceType": "Surviving siblings of those who died by suicide"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Private Facebook Support Group",
          "description": "Private Facebook peer support community for siblings grieving the loss of a brother or sister to suicide.",
          "url": "https://www.facebook.com/groups/survivorsofsiblingsuicide/",
          "provider": {
            "@id": "https://www.survivorsofsiblingsuicide.org/#organization"
          },
          "audience": {
            "@type": "Audience",
            "audienceType": "Surviving siblings of those who died by suicide"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Private Facebook Grief Writing Group",
          "description": "Private Facebook grief-writing group, 'Survivors of Sibling Suicide – Letters To My Sibling', for sharing letters and reflections.",
          "url": "https://www.facebook.com/groups/sossletterstomysibling",
          "provider": {
            "@id": "https://www.survivorsofsiblingsuicide.org/#organization"
          },
          "audience": {
            "@type": "Audience",
            "audienceType": "Surviving siblings of those who died by suicide"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Phone Support Line",
          "description": "Peer-to-peer phone, text, and WhatsApp support line for sibling survivors of suicide loss.",
          "provider": {
            "@id": "https://www.survivorsofsiblingsuicide.org/#organization"
          },
          "serviceArea": {
            "@type": "AdministrativeArea",
            "name": "United States"
          },
          "audience": {
            "@type": "Audience",
            "audienceType": "Surviving siblings of those who died by suicide"
          },
          "areaServed": "US"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Email Support",
          "description": "Peer email support and connection for siblings grieving the death of a brother or sister to suicide.",
          "provider": {
            "@id": "https://www.survivorsofsiblingsuicide.org/#organization"
          },
          "audience": {
            "@type": "Audience",
            "audienceType": "Surviving siblings of those who died by suicide"
          }
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
