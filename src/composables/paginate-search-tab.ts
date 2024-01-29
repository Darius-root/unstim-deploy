import { ref, computed, type Ref } from 'vue';

export default function useTablePagination(tableData:Ref<{}[]>) {
  const search = ref('');
  const page = ref(1);
  const pageSize = ref(10);

  const setPage = (val:number) => {
    page.value = val;
  }

  const pagedTableData = computed(() => {
    return filterTableData.value.slice(
      pageSize.value * page.value - pageSize.value,
      pageSize.value * page.value
    )
  });

  const filterTableData = computed(() =>
    tableData.value.filter(
      (data) => !search.value 
      
      || data.code.toLowerCase().includes(search.value.toLowerCase())
    )
  );

  const currentPage = ref(1);

  return {
    search,
    page,
    pageSize,
    setPage,
    pagedTableData,
    filterTableData,
    currentPage
  };
}


