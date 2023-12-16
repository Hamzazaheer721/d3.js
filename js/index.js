const SECTIONS = {
  SELECTION_AND_MANIPULATION: "SELECTION_AND_MANIPULATION",
  DATA_LOADING_AND_BINDING: "DATA_LOADING_AND_BINDING",
  BAR_CHART: "BAR_CHART"
}

const body = d3.select("body")

const selectionAndManipulation = () => {
  const heading = d3
    .select("h1")
    .style("color", "red")
    .style("class", "heading")
    .text("This is updated by d3")

  /* dynamically adding paragraphs */

  body.append("p").text("First Paragraph")
  body.append("p").text("Second Paragraph")
  body.append("p").text("Third Paragraph")

  d3.selectAll("p").style("color", "blue")
}

const dataLoadingAndBinding = () => {
  const data = [
    "First Paragraph",
    "Second Paragraph",
    "Third Paragraph",
    "Fourth Paragraph",
    "Fifth Paragraph"
  ]

  const paragraphs = body.selectAll("p")

  paragraphs
    .data(data)
    .enter()
    .append("p")
    .text((d) => d)
}

function main() {
  const section = SECTIONS.DATA_LOADING_AND_BINDING
  switch (section) {
    case SECTIONS.SELECTION_AND_MANIPULATION:
      selectionAndManipulation()
      break
    case SECTIONS.DATA_LOADING_AND_BINDING:
      dataLoadingAndBinding()
      break
    default:
      break
  }
}

main()
