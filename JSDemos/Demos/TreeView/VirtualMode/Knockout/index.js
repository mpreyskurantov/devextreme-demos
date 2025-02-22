window.onload = function () {
  const viewModel = {
    treeViewOptions: {
      dataSource: new DevExpress.data.DataSource({
        store: new DevExpress.data.ODataStore({
          url: 'https://js.devexpress.com/Demos/WidgetsGallery/odata/HierarchicalItems',
        }),
      }),
      dataStructure: 'plain',
      keyExpr: 'Id',
      displayExpr: 'Name',
      parentIdExpr: 'CategoryId',
      hasItemsExpr: 'IsGroup',
      virtualModeEnabled: true,
    },
  };

  ko.applyBindings(viewModel, document.getElementById('treeview'));
};
