window.addEventListener("wheel", e => {
    if (e.target.className.includes("cib-serp-main")) e.stopPropagation();
});
