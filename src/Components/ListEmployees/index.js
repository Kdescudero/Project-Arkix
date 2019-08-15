import React from 'react'
import { connect } from 'react-redux'
import { getEmployees } from '../../store/actions/listemployees.actions'
import { ListData, Failure, Spinner } from './compones'

class ListEmployees extends React.Component{

   componentDidMount() {
      this.props.getEmployees();
   }

   render() {
      const { loading, failure } = this.props;

      if(failure) return <Failure message = { failure } />;

      return(
         <div style={{ padding : 12 }}>
            {loading
               ? <Spinner />
               :
               <ListData
                  data = { this.props.data }
               />
            }
         </div>
      )
   }
}

const mapStateToProps = ({listemployees:{data, failure, loading}}) => ({
   loading,
   failure,
   data
});

const mapDispatchToProps = { getEmployees };

export default connect(mapStateToProps, mapDispatchToProps)(ListEmployees);
