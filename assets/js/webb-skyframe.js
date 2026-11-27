(() => {
  document.querySelectorAll("[data-webb-card]").forEach((root) => {
    const button = root.querySelector("[data-webb-next]");
    const image = root.querySelector("[data-webb-image]");
    const status = root.querySelector("[data-webb-status]");
    const workerBaseURL = root.dataset.workerUrl?.replace(/\/+$/, "");
    if (!button || !image || !status || !workerBaseURL) return;

    let currentId = root.dataset.initialId || "";
    root.dataset.currentId = currentId;
    let latestRequest = 0;

    const selectCard = async (exclude, requestNumber, retry = true) => {
      const endpoint = new URL(`${workerBaseURL}/api/random`);
      if (exclude) endpoint.searchParams.set("exclude", exclude);
      const response = await fetch(endpoint, { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`selection_failed_${response.status}`);

      const selection = await response.json();
      if (typeof selection.id !== "string" || typeof selection.alt !== "string" || typeof selection.imageUrl !== "string") {
        throw new Error("invalid_selection");
      }
      if (requestNumber !== latestRequest) return;

      const cardURL = new URL(selection.imageUrl, `${workerBaseURL}/`);
      const workerOrigin = new URL(workerBaseURL).origin;
      if (cardURL.origin !== workerOrigin || !/^\/cards\/[a-f0-9]{64}\/[a-z0-9][a-z0-9_-]{0,99}\.svg$/.test(cardURL.pathname)) {
        throw new Error("invalid_card_url");
      }

      try {
        await new Promise((resolve, reject) => {
          const preload = new Image();
          preload.onload = resolve;
          preload.onerror = reject;
          preload.src = cardURL.href;
        });
      } catch {
        if (requestNumber !== latestRequest) return;
        if (retry) return selectCard(selection.id, requestNumber, false);
        throw new Error("card_unavailable");
      }

      if (requestNumber !== latestRequest) return;
      image.src = cardURL.href;
      image.alt = selection.alt;
      currentId = selection.id;
      root.dataset.currentId = selection.id;
    };

    const requestCard = async (exclude) => {
      const requestNumber = ++latestRequest;
      root.setAttribute("aria-busy", "true");
      status.textContent = root.dataset.loadingMessage || "";
      try {
        await selectCard(exclude, requestNumber);
        if (requestNumber === latestRequest) status.textContent = "";
      } catch (error) {
        if (requestNumber === latestRequest) {
          status.textContent = error.message === "card_unavailable"
            ? root.dataset.removedMessage
            : root.dataset.errorMessage;
        }
      } finally {
        if (requestNumber === latestRequest) root.setAttribute("aria-busy", "false");
      }
    };

    button.addEventListener("click", () => {
      if (!button.disabled) void requestCard(currentId);
    });

    void requestCard();
  });
})();
