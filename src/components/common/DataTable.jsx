import React from 'react'
import { AgGridReact } from 'ag-grid-react'

const DataTable = ({
  columnDefs = [],
  rowData = [],
  height = '500px',
  paginationPageSize = 10,
  paginationPageSizeSelector = [10, 20, 50],
}) => {
  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  }

  return (
    <div className="ag-theme-quartz" style={{ width: '100%', height }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
        columnTypes={{
          number: {
            filter: 'agNumberColumnFilter',
            editable: true,
            valueParser: p => Number(p.newValue),
          },
        }}
      />
    </div>
  )
}

export default DataTable
