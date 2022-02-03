module.exports.scrollTo = (
  top: number,
  behavior?: ScrollBehavior | undefined
) => {
  window.scrollTo({
    top: top,
    behavior: behavior || "auto",
  });
};
