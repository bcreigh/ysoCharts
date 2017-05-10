import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ChartList extends Component {
  render() {
    return (
      <div>
        <h1>Chart List</h1>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Chart #</th>
              <th>Chart Title</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <td><Link to={`/charts/1`}>100</Link></td>
              <td>Yesterday</td>
            </tr>
            <tr>
              <td><Link to={`/charts/2`}>102</Link></td>
              <td>What the World Needs Now Is Love</td>
            </tr>
            <tr>
              <td><Link to={`/charts/3`}>104</Link></td>
              <td>Hoop Dee Doo</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
