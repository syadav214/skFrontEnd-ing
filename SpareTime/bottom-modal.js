import React, { Component } from 'react';
import '!style-loader!css-loader!sass-loader!./widget.module.scss';

class widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTaskInProgressModal: true
    };
  }

  render() {
    const { showTaskInProgressModal } = this.state;

    return (
      <div className='syncWidget'>
        {showTaskInProgressModal && (
          <div className='markCompleteModal modal-dialog modal-sm'>
            <div className='modal-content'>
              <div className='modal-header'>
                <div className='modal-title'>Task In Progress</div>
                <button
                  className='close'
                  onClick={() =>
                    this.setState({ showTaskInProgressModal: false })
                  }
                >
                  <svg width='16px' height='16px' viewBox='0 0 16 16'>
                    <path
                      fill-rule='evenodd'
                      fill='#4F5D75'
                      d='M7.29289322,8 L2.14644661,2.85355339 C1.95118446,2.65829124 1.95118446,2.34170876 2.14644661,2.14644661 C2.34170876,1.95118446 2.65829124,1.95118446 2.85355339,2.14644661 L8,7.29289322 L13.1464466,2.14644661 C13.3417088,1.95118446 13.6582912,1.95118446 13.8535534,2.14644661 C14.0488155,2.34170876 14.0488155,2.65829124 13.8535534,2.85355339 L8.70710678,8 L13.8535534,13.1464466 C14.0488155,13.3417088 14.0488155,13.6582912 13.8535534,13.8535534 C13.6582912,14.0488155 13.3417088,14.0488155 13.1464466,13.8535534 L8,8.70710678 L2.85355339,13.8535534 C2.65829124,14.0488155 2.34170876,14.0488155 2.14644661,13.8535534 C1.95118446,13.6582912 1.95118446,13.3417088 2.14644661,13.1464466 L7.29289322,8 Z'
                    ></path>
                  </svg>
                </button>
              </div>
              <div className='modal-body'>
                Update E-Commerce Product Business Cards (PRD-124ABCD) to
                Version 3
              </div>
              <div className='modal-footer'>
                <button className='btn btn-primary'>Mark as Complete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default widget;
