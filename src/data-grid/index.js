import React from 'react';
import axios from 'axios';
import DataTable from "./data-table.js";
import Card from '@material-ui/core/Card';

class DataAcquisition extends React.Component {
  constructor(props){
    super(props);
    this.getData(this);
    this.state = {
      dataAcquired: [],
      labelData: [],
      dataTable: "Loading ....... "
    }
  }
  getData(self){
    axios.get("https://jsonplaceholder.typicode.com/posts", {
    data:"data"
    })
    .then(function (response) {
      console.log(response);
      self.setState({
        dataAcquired: response.data
      });
      /* Retreiving Labels from data */
      var labels = [];
      for(var i in response.data){
            var key = i;
            var val = response.data[i];
            for(var j in val){
                var sub_key = j;
                var sub_val = val[j];
                var label = {headerName: sub_key.toUpperCase(), field: sub_key, sortable:true, filter:true}
                labels.push(label);
            }
            self.setState({
              labelData: labels
            })
            console.log(labels);
            break;
      }
      self.setState({
        dataTable: <DataTable LabelDataValues={labels} APIDataValues={response.data}/>
      })
     })
     .catch(function (error) {
       console.log(error);
     });
  }

  render(){
  return (
    <div className="App">
    <Card
    style={{
    padding: '15px' }}
    >{this.state.dataTable}</Card>
    </div>
  );
};
}

export default DataAcquisition;
