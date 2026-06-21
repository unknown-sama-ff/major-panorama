(function() {
  function initCharts() {
    if (typeof majorData === 'undefined' || typeof echarts === 'undefined') {
      setTimeout(initCharts, 100);
      return;
    }

    var style = getComputedStyle(document.documentElement);
    var accent = style.getPropertyValue('--accent').trim() || '#6B5B4E';
    var accent2 = style.getPropertyValue('--accent2').trim() || '#8B7D6B';
    var ink = style.getPropertyValue('--ink').trim() || '#2C2A28';
    var muted = style.getPropertyValue('--muted').trim() || '#7A756E';
    var rule = style.getPropertyValue('--rule').trim() || '#D5CFC7';
    var bg2 = style.getPropertyValue('--bg2').trim() || '#EFEBE6';

    // Chart 1: Discipline distribution pie chart
    var pieData = majorData.disciplines.map(function(d) {
      return {
        name: d.name,
        value: d.categories.reduce(function(sum, c) { return sum + c.majors.length; }, 0)
      };
    });

    var pieEl = document.getElementById('chart-discipline-pie');
    if (pieEl) {
      pieEl.innerHTML = '';
      pieEl.style.background = 'transparent';
      var pieChart = echarts.init(pieEl, null, { renderer: 'canvas' });
      pieChart.setOption({
        animation: false,
        tooltip: { trigger: 'item', appendToBody: true },
        legend: {
          orient: 'vertical',
          right: 10,
          top: 'center',
          textStyle: { color: ink }
        },
        series: [{
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['40%', '50%'],
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 6,
            borderColor: bg2,
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}\n{c}种',
            color: ink
          },
          emphasis: {
            label: { show: true, fontSize: 14, fontWeight: 'bold' }
          },
          data: pieData
        }]
      });
      window.addEventListener('resize', function() { pieChart.resize(); });
    }

    // Chart 2: New majors by discipline bar chart
    var newMajorsByDiscipline = [];
    majorData.disciplines.forEach(function(d) {
      var count = 0;
      d.categories.forEach(function(cat) {
        cat.majors.forEach(function(m) {
          if (m.isNew) count++;
        });
      });
      if (count > 0) {
        newMajorsByDiscipline.push({ name: d.name, value: count });
      }
    });

    var barEl = document.getElementById('chart-new-bar');
    if (barEl) {
      barEl.innerHTML = '';
      barEl.style.background = 'transparent';
      var barChart = echarts.init(barEl, null, { renderer: 'canvas' });
      barChart.setOption({
        animation: false,
        tooltip: { trigger: 'axis', appendToBody: true },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: {
          type: 'category',
          data: newMajorsByDiscipline.map(function(d) { return d.name; }),
          axisLabel: { color: muted, rotate: 30 },
          axisLine: { lineStyle: { color: rule } }
        },
        yAxis: {
          type: 'value',
          axisLabel: { color: muted },
          axisLine: { lineStyle: { color: rule } },
          splitLine: { lineStyle: { color: rule, type: 'dashed' } }
        },
        series: [{
          type: 'bar',
          data: newMajorsByDiscipline.map(function(d) { return d.value; }),
          itemStyle: {
            color: accent,
            borderRadius: [4, 4, 0, 0]
          },
          label: {
            show: true,
            position: 'top',
            color: ink
          }
        }]
      });
      window.addEventListener('resize', function() { barChart.resize(); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCharts);
  } else {
    initCharts();
  }
})();
