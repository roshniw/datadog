import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: props.LabelDataValues,
      rowData: props.APIDataValues,
      height: window.innerWidth*0.35+'px',
      width: window.innerHeight*1.6+'px'
    }
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
        height: this.state.height,
        width: this.state.width }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          pagination={true}
          paginationPageSize={25}>
        </AgGridReact>
      </div>
    );
  }
}

export default DataTable;
