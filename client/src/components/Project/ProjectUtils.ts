module.exports.projectWindowScroller = (
  elem: React.MutableRefObject<HTMLDivElement | null>,
  num1: number,
  num2: number,
  limit: number,
  symbol: number
) => {
  let i = num1;
  let int: NodeJS.Timer = setInterval(function () {
    if (elem.current) {
      elem.current.scrollTop = elem.current.scrollTop + symbol * i;
      i += num2;
      if (i >= limit) clearInterval(int);
    }
  }, 20);
};
