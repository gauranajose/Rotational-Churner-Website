import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

const fields = ['mobile_number', 'activity', 'date', 'time', 'duration(min)', 'length_of_text', 'type_of_load', 'amount_load', 'receiver', 'mb_use', 'location(city)', 'location(district)'];

const columns = [{
  field: 'id',
  headerName: 'activity_id',
  headerClassName: 'text-blue-600 font-black font-sans',
  width: 200, 
}].concat(fields.map(field => ({
  field: field,
  headerClassName: 'text-blue-600 font-black font-sans',
  headerName: field,
  width: 200,
})))

const useStyles = makeStyles({
  root: {
    '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus': {
        outline: 'none',
    },
  }
});

const DatasetTable = ({ rows }) => {
  const classes = useStyles();

  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* {console.log(columns)} */}
      <DataGrid
        className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
      />
    </div>
  );
}

export default DatasetTable;