<template>
  <div class="dx-fieldset">
    <div class="dx-field">
      <div class="dx-field-label">Data grouped in the DataSource</div>
      <div class="dx-field-value">
        <DxSelectBox
          :data-source="fromUngroupedData"
          :grouped="true"
          display-expr="Name"
          value-expr="ID"
          :value="1"
        />
      </div>
    </div>
    <div class="dx-field">
      <div class="dx-field-label">Pre-grouped data</div>
      <div class="dx-field-value">
        <DxSelectBox
          :data-source="fromPregroupedData"
          :grouped="true"
          display-expr="Name"
          value-expr="ID"
          :value="1"
        />
      </div>
    </div>
    <div class="dx-field">
      <div class="dx-field-label">Custom group template</div>
      <div class="dx-field-value">
        <DxSelectBox
          :data-source="fromUngroupedData"
          :grouped="true"
          display-expr="Name"
          value-expr="ID"
          :value="1"
        >
          <template #group="{ data }">
            <Group :item-data="data"/>
          </template>
        </DxSelectBox>
      </div>
    </div>
  </div>
</template>
<script>
import { DxSelectBox } from 'devextreme-vue/select-box';
import DataSource from 'devextreme/data/data_source';
import Group from './Group.vue';

import { ungroupedData, pregroupedData } from './data.js';

export default {
  components: {
    DxSelectBox,
    Group,
  },
  created() {
    this.fromPregroupedData.load();
  },
  data() {
    return {
      fromUngroupedData: new DataSource({
        store: {
          type: 'array',
          data: ungroupedData,
          key: 'ID',
        },
        group: 'Category',
      }),
      fromPregroupedData: new DataSource({
        store: {
          type: 'array',
          data: pregroupedData,
          key: 'ID',
        },
        map(item) {
          item.key = item.Category;
          item.items = item.Products;
          return item;
        },
      }),
    };
  },
};
</script>
