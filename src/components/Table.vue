<template>
  <el-table
    :data="tableData"
    size="medium"
    align="center"
  >
    <el-table-column
      prop="date"
      label="Вероятность"
      width="150">
    </el-table-column>
    <el-table-column label="Количество доменов в решетке">
      <el-table-column
        prop="name"
        label="Всего"
        width="124">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Неодносвязных"
        width="200">
      </el-table-column>
    </el-table-column>
    <el-table-column
      prop="state"
      label="Количество ячеек в решетке"
      width="150">
    </el-table-column>
    <el-table-column
      prop="city"
      label="Количество выбранных (1)"
      width="200">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Table',
  // props: {
  //   tableWidth: {
  //     type: String
  //   },
  //   data: {
  //     type: Array
  //   }
  // },
  data() {
    return {
      tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
    }
  }
}
</script>