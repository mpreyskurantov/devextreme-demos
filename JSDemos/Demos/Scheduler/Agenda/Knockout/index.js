window.onload = function () {
  const viewModel = {
    schedulerOptions: {
      timeZone: 'America/Los_Angeles',
      dataSource: data,
      views: ['agenda'],
      currentView: 'agenda',
      currentDate: new Date(2021, 4, 11),
      startDayHour: 9,
      height: 600,
    },
  };

  ko.applyBindings(viewModel, document.getElementById('scheduler-demo'));
};
