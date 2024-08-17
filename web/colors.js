var Body = {
  setColor: function (color) {
    $("body").css("color", color);
    //document.querySelector("body").style.color = color;
  },
  setBackgroundColor: function (color) {
    $("body").css("backgroundColor", color);
    //document.querySelector("body").style.backgroundColor = color;
  },
};

var Links = {
  setColor: function (color) {
    //이 웹 페이지에 있는 모든 a태그를 jQuery로 제어하겠단 뜻.
    $("a").css("color", color);
  },
  // setColor: function (color) {
  //   var alist = document.querySelectorAll("a");
  //   var i = 0;
  //   while (i < alist.length) {
  //     alist[i].style.color = color;
  //     i = i + 1;
  //   }
  // },
};

function setColor(color) {
  var alist = document.querySelectorAll("a");
  var i = 0;
  while (i < alist.length) {
    alist[i].style.color = color;
    i = i + 1;
  }
}
function nightDayHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "night") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.value = "day";

    Links.setColor("powderblue");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "night";

    Links.setColor("blue");
  }
}
