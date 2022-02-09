module.exports.letMusic = (
  mute: boolean,
  play: () => void,
  setMute: (e: boolean) => void,
  stop: () => void
) => {
  if (!mute) {
    setMute(true);
    play();
  } else {
    stop();
    setMute(false);
  }
};
