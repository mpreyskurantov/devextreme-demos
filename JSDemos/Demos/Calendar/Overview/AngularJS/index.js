const DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', ($scope) => {
  const now = new Date();

  $scope.zoomLevels = ['month', 'year', 'decade', 'century'];
  $scope.weekDays = [
    { id: 0, text: 'Sunday' },
    { id: 1, text: 'Monday' },
    { id: 2, text: 'Tuesday' },
    { id: 3, text: 'Wednesday' },
    { id: 4, text: 'Thursday' },
    { id: 5, text: 'Friday' },
    { id: 6, text: 'Saturday' },
  ];
  $scope.weekNumberRules = ['auto', 'firstDay', 'firstFourDays', 'fullWeek'];
  $scope.currentValue = new Date();
  $scope.firstDayOfWeek = 0;
  $scope.showWeekNumbers = false;
  $scope.weekNumberRule = $scope.weekNumberRules[0];
  $scope.disabled = false;
  $scope.minDateValue = null;
  $scope.maxDateValue = null;
  $scope.zoomLevel = $scope.zoomLevels[0];
  $scope.cellTemplate = 'cell';

  $scope.setMinDate = function (e) {
    if (e.value) {
      $scope.minDateValue = new Date(now.getTime() - 1000 * 60 * 60 * 24 * 3);
    } else {
      $scope.minDateValue = null;
    }
  };

  $scope.setMaxDate = function (e) {
    if (e.value) {
      $scope.maxDateValue = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 3);
    } else {
      $scope.maxDateValue = null;
    }
  };

  $scope.disableWeekend = function (e) {
    if (e.value) {
      $scope.disabledDates = function (data) {
        return data.view === 'month' && isWeekend(data.date);
      };
    } else {
      $scope.disabledDates = null;
    }
  };

  $scope.useCellTemplate = function (e) {
    if (e.value) {
      $scope.cellTemplate = getCellTemplate;
    } else {
      $scope.cellTemplate = 'cell';
    }
  };

  const holidays = [[1, 0], [4, 6], [25, 11]];

  function isWeekend(date) {
    const day = date.getDay();

    return day === 0 || day === 6;
  }

  function getCellTemplate(data) {
    let cssClass = '';

    if (data.view === 'month') {
      if (isWeekend(data.date)) { cssClass = 'weekend'; }

      $.each(holidays, (_, item) => {
        if (data.date.getDate() === item[0] && data.date.getMonth() === item[1]) {
          cssClass = 'holiday';
          return false;
        }
        return true;
      });
    }

    return `<span class='${cssClass}'>${data.text}</span>`;
  }
});
