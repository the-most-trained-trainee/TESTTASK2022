import scroller from "react-scroll/modules/mixins/scroller";


const smoothScroll = (direction, adjustment = 0) => {
  scroller.scrollTo(direction, {
    duration: 900,
    delay: 0,
    smooth: true,
    offset: adjustment,
  });
}

export default smoothScroll;