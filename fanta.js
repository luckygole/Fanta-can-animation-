var tl = gsap.timeline({
  duration: 2,
  // delay:2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",

    scrub: 5,
    markers: true,
  },
});

tl.to(
  "#fanta",
  {
    top: "120%",
    left: "0%",
  },
  "orange"
);

tl.to(
  "#orange-cut",
  {
    top: "160%",
    left: "23%",
  },
  "orange"
);

tl.to(
  "#orange",
  {
    width: "15%",
    top: "160%",
    right: "10%",
  },
  "orange"
);

tl.to(
  "#leaf",
  {
    top: "110%",
    rotate: "130deg",
    left: "70%",
  },
  "orange"
);
tl.to(
  "#leaf2",
  {
    top: "110%",
    left: "0%",
  },
  "orange"
);

var tl2 = gsap.timeline({
  duration: 3,
  // delay:1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    // pin:true,
    scrub: 5,
    // markers:true,
  },
});

tl2.from(
  ".lemon1",
  {
    rotate: "-90deg",
    left: "-100%",
    top: "110%",
  },
  "ca"
);

tl2.from(
  "#sprite",
  {
    rotate: "-90deg",
    left: "-100%",
    top: "110%",
  },
  "ca"
);

tl2.from(
  ".lemon2",
  {
    rotate: "90deg",
    left: "100%",
    top: "110%",
  },
  "ca"
);

tl2.from(
  "#pepsi",
  {
    rotate: "90deg",
    left: "100%",
    top: "110%",
  },
  "ca"
);

tl2.to(
  "#orange-cut",
  {
    width: "18%",
    left: "42%",
    top: "200%",
  },
  "ca"
);

tl2.to(
  "#fanta",
  {
    width: "35%",
    left: "33%",
    top: "205%",
  },
  "ca"
);
