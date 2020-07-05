<template>
  <el-table
    :data="tableData"
    size="medium"
    align="center"
  >
    <el-table-column
      prop="probability"
      label="Вероятность"
      width="150">
    </el-table-column>
    <el-table-column label="Количество доменов в решетке">
      <el-table-column
        prop="total"
        label="Всего"
        width="124">
      </el-table-column>
      <el-table-column
        prop="diffrentDomen"
        label="Неодносвязных"
        width="200">
      </el-table-column>
    </el-table-column>
    <el-table-column
      prop="paramL"
      label="L"
      width="50">
    </el-table-column>
    <el-table-column
      prop="paramM"
      label="M"
      width="50">
    </el-table-column>
    <el-table-column
      prop="paramN"
      label="N"
      width="50">
    </el-table-column>
    <el-table-column
      prop="totalCountHex"
      label="Количество ячеек в решетке"
      width="150">
    </el-table-column>
    <el-table-column
      prop="totalAmountHex"
      label="Количество выбранных ячеек (1)"
      width="225">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    tableData: {
      type: Array
    }
  },
}
</script>