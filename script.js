const content = {
  en: {
    lang: "en",
    brandName: "Paper Page",
    icon: "icon-en.png",
    screenshot: "screenshot-en.png",
    title: 'Your digital<br />paper <span>page.</span>',
    lead: "As simple as a sheet of paper.",
    line1: "No calendars.",
    line2: "No reminders.",
    line3: "No due dates.",
    line4: "Just a place for your thoughts.",
    badgeSmall: "Download on the",
    badgeBig: "App Store",
    privacyTitle: "Privacy Policy",
    updatedLabel: "Last updated:",
    privacyH1: "Information We Collect",
    privacyP1: "Paper Page does not collect, store, transmit, or share any personal information. Tasks, notes and other information created in the app are stored locally on your device.",
    privacyH2: "Data Sharing",
    privacyP2: "The app does not share any information with third parties.",
    privacyH3: "Analytics and Tracking",
    privacyP3: "The app does not use analytics, advertising networks, tracking technologies, or profiling.",
    privacyH4: "Data Storage",
    privacyP4: "All content created by the user remains on the user’s device unless the user chooses to back up or transfer their device using Apple services.",
    privacyH5: "Children’s Privacy",
    privacyP5: "The app does not knowingly collect personal information from children.",
    privacyH6: "Contact",
    privacyP6: 'If you have any questions about this Privacy Policy, contact the developer at: <strong>abc@icloud.com</strong>',
    privacyH7: "Changes",
    privacyP7: "This Privacy Policy may be updated from time to time. Any changes will be reflected on this page.",
    footer1: "© 2026 Paper Page.",
    footer2: "Designed with simplicity in mind."
  },

  pl: {
    lang: "pl",
    brandName: "Kartka Papieru",
    icon: "icon-pl.png",
    screenshot: "screenshot-pl.png",
    title: 'Twoja cyfrowa<br />kartka <span>papieru.</span>',
    lead: "Tak prosta jak kartka papieru.",
    line1: "Bez kalendarzy.",
    line2: "Bez przypomnień.",
    line3: "Bez terminów.",
    line4: "Po prostu miejsce na Twoje myśli.",
    badgeSmall: "Pobierz z",
    badgeBig: "App Store",
    privacyTitle: "Polityka prywatności",
    updatedLabel: "Ostatnia aktualizacja:",
    privacyH1: "Informacje, które zbieramy",
    privacyP1: "Kartka Papieru nie zbiera, nie przechowuje, nie przesyła ani nie udostępnia żadnych danych osobowych. Zadania, notatki i inne treści tworzone w aplikacji są przechowywane lokalnie na urządzeniu użytkownika.",
    privacyH2: "Udostępnianie danych",
    privacyP2: "Aplikacja nie udostępnia żadnych informacji podmiotom trzecim.",
    privacyH3: "Analityka i śledzenie",
    privacyP3: "Aplikacja nie korzysta z analityki, sieci reklamowych, technologii śledzących ani profilowania.",
    privacyH4: "Przechowywanie danych",
    privacyP4: "Wszystkie treści tworzone przez użytkownika pozostają na urządzeniu użytkownika, chyba że użytkownik zdecyduje się wykonać kopię zapasową lub przenieść urządzenie za pomocą usług Apple.",
    privacyH5: "Prywatność dzieci",
    privacyP5: "Aplikacja nie zbiera świadomie danych osobowych dzieci.",
    privacyH6: "Kontakt",
    privacyP6: 'W przypadku pytań dotyczących tej Polityki prywatności można skontaktować się z deweloperem pod adresem: <strong>abc@icloud.com</strong>',
    privacyH7: "Zmiany",
    privacyP7: "Ta Polityka prywatności może być od czasu do czasu aktualizowana. Wszelkie zmiany będą widoczne na tej stronie.",
    footer1: "© 2026 Kartka Papieru.",
    footer2: "Zaprojektowana z myślą o prostocie."
  }
};

const appStoreUrl = "https://apps.apple.com/pl/app/kartka-papieru/id6783930297?l=pl";

function setLang(lang) {
  const t = content[lang];

  document.documentElement.lang = t.lang;

  document.getElementById("brandName").textContent = t.brandName;
  document.getElementById("brandIcon").src = t.icon;
  document.getElementById("appIcon").src = t.icon;
  document.getElementById("preview").src = t.screenshot;

  document.getElementById("title").innerHTML = t.title;
  document.getElementById("lead").textContent = t.lead;
  document.getElementById("line1").textContent = t.line1;
  document.getElementById("line2").textContent = t.line2;
  document.getElementById("line3").textContent = t.line3;
  document.getElementById("line4").textContent = t.line4;

  document.getElementById("appStoreButton").href = appStoreUrl;
  document.getElementById("badgeSmall").textContent = t.badgeSmall;
  document.getElementById("badgeBig").textContent = t.badgeBig;

  document.getElementById("privacyTitle").textContent = t.privacyTitle;
  document.getElementById("updatedLabel").textContent = t.updatedLabel;
  document.getElementById("privacyH1").textContent = t.privacyH1;
  document.getElementById("privacyP1").textContent = t.privacyP1;
  document.getElementById("privacyH2").textContent = t.privacyH2;
  document.getElementById("privacyP2").textContent = t.privacyP2;
  document.getElementById("privacyH3").textContent = t.privacyH3;
  document.getElementById("privacyP3").textContent = t.privacyP3;
  document.getElementById("privacyH4").textContent = t.privacyH4;
  document.getElementById("privacyP4").textContent = t.privacyP4;
  document.getElementById("privacyH5").textContent = t.privacyH5;
  document.getElementById("privacyP5").textContent = t.privacyP5;
  document.getElementById("privacyH6").textContent = t.privacyH6;
  document.getElementById("privacyP6").innerHTML = t.privacyP6;
  document.getElementById("privacyH7").textContent = t.privacyH7;
  document.getElementById("privacyP7").textContent = t.privacyP7;

  document.getElementById("footer1").textContent = t.footer1;
  document.getElementById("footer2").textContent = t.footer2;

  document.getElementById("enBtn").classList.toggle("active", lang === "en");
  document.getElementById("plBtn").classList.toggle("active", lang === "pl");

  localStorage.setItem("paperPageLang", lang);
}

const savedLang = localStorage.getItem("paperPageLang");
const browserLang = navigator.language && navigator.language.toLowerCase().startsWith("pl") ? "pl" : "en";

setLang(savedLang || browserLang);
