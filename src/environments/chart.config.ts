export const chartConfig = {
  chartData: [
    { label: 'Sun', value: '10' },
    { label: 'Mon', value: '25' },
    { label: 'Tue', value: '15' },
    { label: 'Wed', value: '40' },
    { label: 'Thu', value: '0' },
    { label: 'Fri', value: '45' },
    { label: 'Sat', value: '35' },
  ],
  chartOptions: {
    chart: {
      "theme": "fusion",
      "caption": "Sales Statistics",
      "captionFont": "Arial",
      "captionFontSize": "18",
      "captionFontColor": "#000",
      "captionFontBold": "1",
      "alignCaptionWithCanvas": "1",
      "captionHorizontalPadding": "2",
      "captionOnTop": "1",
      "captionAlignment": "left",
      "showCanvasBorder": "0",
      "drawAnchors": "0",
      "plotToolText": "<div style='background-color: #f4f4f4; border: 1px solid #ddd; padding: 10px;'>" +
        "<div style='display: flex; justify-content: center; padding: 2px; color: #6368b8;'>" +
        "<b>$</b><b>$value</b></div>" +
        "<span>$label</span>" +
        "<div style='width: 100%; text-align: center;'><div style='border-top: 6px solid transparent; " +
        "border-bottom: 6px solid #f4f4f4;'></div></div>" +
        "</div>",
    },
    trendlines:  [
      {
        line: [
          {
            startValue: "40", // Set the start value for the trendline
            endValue: "40",   // Set the end value for the trendline
            color: "#29C3BE",
            displayValue: "Avg yearly sales",
            valueOnRight: "1",
            dashed: "1",
            thickness: "2",
          },
        ],
      },
    ],
  },
  
};
