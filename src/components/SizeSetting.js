import React, {Component, Fragment} from 'react';

class SizeSetting extends Component {
    render() {
        return (
           <Fragment>
               <div className="panel panel-warning">
                   <div className="panel-heading">
                       <h3 className="panel-title">Size: 15px</h3>
                   </div>
               </div>
               <div className="panel-body">
                   <button type="button" className="btn btn-success mr-1">Giảm</button>
                   <button type="button" className="btn btn-success mr-1">Tăng</button>
               </div>
           </Fragment>
        );
    }
}

export default SizeSetting;
