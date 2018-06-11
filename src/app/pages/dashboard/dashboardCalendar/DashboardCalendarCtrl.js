/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardCalendarCtrl', DashboardCalendarCtrl);

  /** @ngInject */
  function DashboardCalendarCtrl(baConfig) {
    var dashboardColors = baConfig.colors.dashboard;
    var $element = $('#calendar').fullCalendar({
      //height: 335,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2016-03-08',
      selectable: true,
      selectHelper: true,
      select: function (start, end) {
        var title = prompt('事件标题:');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $element.fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $element.fullCalendar('取消选择');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: '所有日期事件',
          start: '2016-03-01',
          color: dashboardColors.silverTree
        },
        {
          title: '长期事件',
          start: '2016-03-07',
          end: '2016-03-10',
          color: dashboardColors.blueStone
        },
        {
          title: '晚餐',
          start: '2016-03-14T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: '生日聚会',
          start: '2016-04-01T07:00:00',
          color: dashboardColors.gossipDark
        }
      ]
    });
  }
})();