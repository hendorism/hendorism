let br = document.createElement("br");
document.body.appendChild(br);
//append a <ul> to the body
//the <ul> should have 10 <li>
//every <li> should have a link to an html page
//the href of the link should be the name of the html page
//the filenames are "index.html", "index2.html", "index3.html", etc.
let ul = d3.select("body").append("ul");
for (let i = 1; i <= 10; i++) {
  ul.append("li").append("a").attr("href", "index" + i + ".html").text("index" + i + ".html");
}