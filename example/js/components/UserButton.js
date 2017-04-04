import React from 'react';
import cs from 'classnames';
import Button from 'src/Button/index.js';

export default class UserButton extends React.Component {

	constructor(props) {

	    super(props)


	    this.state = {
	    	isDisabled:false
	    }
	    this.callbackFun=function(e){
	    	console.log(e);

	    	this.setState({isDisabled: !this.state.isDisabled});
	    }
	}


	render () {

		return (

			<div>

				<div>

					<div className="topBanner">{this.props.location.query.name ? this.props.location.query.name: 'title'}</div>

				</div>
				<div className='btn-content'>
					<div className='btn-subTitle'>小按钮</div>
					<div>

						<Button
							size='small'
							type='primary'
							onClick={(e)=>{this.callbackFun(e)}}
						>开关按钮</Button>

						<Button
							size='small'
							type='colorfulHollow'
						>立即申请</Button>

						<Button
							size='small'
							type='grayHollow'
						>立即申请</Button>

						<Button
							size='small'
							type='primary'
							isDisabled={this.state.isDisabled}
						>立即申请</Button>

					</div>
					<div className='btn-subTitle'>中按钮</div>
					<div>

						<Button
							size='middle'
							type='primary'
						>立即申请</Button>

					</div>
					<div className='btn-subTitle'>大按钮</div>
					<div>
					
						<Button
							size='big'
							type='primary'
						>立即申请</Button>
					</div>
					<div className='btn-subTitle'>长按钮及icon</div>
					<div>
					
						<Button
							size='long'
							type='primary'
							icon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0REN0JGQTMxNDVEMTFFNzlFMDlDRDA0RkUxRUExRTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0REN0JGQTQxNDVEMTFFNzlFMDlDRDA0RkUxRUExRTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozREQ3QkZBMTE0NUQxMUU3OUUwOUNEMDRGRTFFQTFFMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozREQ3QkZBMjE0NUQxMUU3OUUwOUNEMDRGRTFFQTFFMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoSMVqkAAAQSSURBVHjaxJdtbFNVGMfPvWtv26y3y6Bbu4EoBSImGjWyML6YtdkEYjQjRMIkS4YZzjcSEhd1LsoIRGXxkwnMSUnYkECDcSPZHCwZkS/4AhtiNg2iJpfNrk5nsLfb2pX28j9wVmvX9p7OqU/yy23uuec5/z7nnOc5R9A0jfzq8ZAs5lCdzv2G8vJ1JpdrqaW0NP+3zs4vLcPDHxvi8Z/QrmmCIEck6bHY+vVPF23f/rB65crEdH//17KiHBQI+Taj4/PniaAnIC4InpKBgYEMzSEqAJiBMbVxtKqqXorFjmYTIBIdEzVt8Hpj47kMzVYgpxv8l5Mnf8TgZ3X9E337Ux4aeuPm0NAfhNNiodAt4vW+RnUshgCCefwm2NT0Nq+AnxsaOgya1sXzrcjr1BSNHrm+Z0+v3nc3vN4R2/g4t1iBYxck24oZk2kbE67NC5Qg5JnD4X5EbJDHGV2EBpKb3bBEIu+TRbScBMQE4Ymo0fgAwhZN1458YJCi0RHsnIHFFiBMWyxvrvD59uZZrcZsH4YDgZnAzp17WaS0xViEUrCo6NDK3t4DeoNTMzudlvv6+lpDNtu7dzfQPxNgCpaUtK3x+V7MdW5XdXe/DuGH0yUpbgGhgoIDa06ceG6hCwzCXwjJ8r4FCQgbjbtXdXU1ppaGnCNx5kwT9ZWTAFqAlrS1vZOmiSaiR8FTYDKl7QLwgpHUTtQX9ckrwH6rru6w7HJZ07SVAxX0AF/S+zFQDV4Bs6mdqK94fX07fpboCRBUu73lntra+zNErAjMzelHTAw16vwmaGYRmmfLampWB4uLW1LHFFNCX3Fve3u9zrRuBY+Dq+BzMAE+ACvBS1kX5alTdUhmVZkEGKfKypqNhYUmva0O3gMW8CHYzyLRCpbq5ZSZioq3mA+WPlGMAm43GfN4tmj6NgaeB9uATPsCWtAeAoNA4fChjVZW1tIxaX8xoays7GWOXUXn+TT4FETm/gPwg82Aq1CFN2yg0ywlIuD3eNx4hjnER8A18D14lUXAAT4DV1mEeCw47navo/3vFKNpWd5E0y6HeHosO8a22kX2TmVb0s52wA4OP3LYbK7E8/IdAbHly9dyJrbfQRsIJmXFadDJCs+znALIbGnpI4lyLEiSxJvewRds3g8xCpkAFyjgTdGiw1H813nA71d4j4ZgLlqOuQXM3q3OpUZoqjqVEGCenLyER0OOdeYZNrCcJIbbREUZTiQiXCD6Ro8f/yFHH2uZiE1MBLfRU1O+qnYnZ0K/2NHRjAtFlPwH5t+1qxUr9qu/pWJcND8JVFfXIBLX/q2Bx3t6FGXjxt35U1Mt2e4Fztm8vCdnbbYH41arnYiiQOJxbUEj3u0bF1V1QlLV7zDV9LSszLsd/592W4ABAGJ8JLRdDJFGAAAAAElFTkSuQmCC'
						>立即申请</Button>
						<br/>
						<Button
							size='long'
							type='colorfulHollow'
						>立即申请</Button>
					</div>
				</div>

			</div>

		)

	}

}
