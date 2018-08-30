import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { render } from "react-dom";
import {
  SelectionState,
  PagingState,
  IntegratedPaging,
  IntegratedSelection
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
  PagingPanel
} from "@devexpress/dx-react-grid-material-ui";

import { generateRows } from "./generator";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: "name", title: "Name" },
        { name: "sex", title: "Sex" },
        { name: "city", title: "City" },
        { name: "car", title: "Car" }
      ],
      rows: generateRows({ length: 8 }),
      selection: []
    };

    this.changeSelection = selection => this.setState({ selection });
  }

  render() {
    const { rows, columns, selection } = this.state;

    return (
      <div>
        <span>Total rows selected: {selection.length}</span>
        <Paper>
          <Grid rows={rows} columns={columns}>
            <PagingState defaultCurrentPage={0} pageSize={6} />
            <SelectionState
              selection={selection}
              onSelectionChange={this.changeSelection}
            />
            <IntegratedPaging />
            <IntegratedSelection />
            <Table />
            <TableHeaderRow />
            <TableSelection showSelectAll />
            <PagingPanel />
          </Grid>
        </Paper>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
