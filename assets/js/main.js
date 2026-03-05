(function () {
  const form = document.getElementById("quoteForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value?.trim() || "";
    const phone = document.getElementById("phone")?.value?.trim() || "";
    const tvsize = document.getElementById("tvsize")?.value?.trim() || "";
    const address = document.getElementById("address")?.value?.trim() || "";
    const details = document.getElementById("details")?.value?.trim() || "";

    const subject = encodeURIComponent("Quote Request — Precision Mount & Media");
    const body = encodeURIComponent(
`Hi Billy,

I'd like a quote for TV mounting.

Name: ${name}
Phone: ${phone}
TV size: ${tvsize}
City/Neighborhood: ${address}

Details:
${details}

Thanks!`
    );

    // mailto draft (free + simple)
    window.location.href = `mailto:wseroyer@gmail.com?subject=${subject}&body=${body}`;
  });
})();
