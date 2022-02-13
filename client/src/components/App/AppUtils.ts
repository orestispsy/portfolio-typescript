module.exports.scrollTo = (
  top: number,
  behavior?: ScrollBehavior | undefined
) => {
  window.scrollTo({
    top: top,
    behavior: behavior || "auto",
  });
};

module.exports.letMusic = (
  mute: boolean,
  play: () => void,
  setMute: (e: boolean) => void,
  stop: () => void
) => {
  if (mute) {
    setMute(false);
    play();
  } else {
    stop();
    setMute(true);
  }
};
