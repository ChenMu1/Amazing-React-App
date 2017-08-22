import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Alert from '../../../components/feedback/alert';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

export default class isomorphicAlert extends Component {

	onClose = function (e) {
	  console.log(e, 'I was closed.');
	};

	render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
		const marginBot = {
			marginBottom: '10px'
		}
		return(<LayoutWrapper>
			<PageHeader>Alert</PageHeader>
			<Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Basic Alert Type"
            >
            <ContentHolder>
      	      <Alert message="Success Text" type="success" style={marginBot}/>
						  <Alert message="Info Text" type="info" style={marginBot}/>
						  <Alert message="Warning Text" type="warning" style={marginBot}/>
						  <Alert message="Error Text" type="error" />
            </ContentHolder>
          </Box>
         </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
           <Box
              title="Closable Alert Type"
            >
            <ContentHolder>
              <Alert message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
				    		type="warning"
						    closable
						    onClose={this.onClose}
								style={marginBot}
						  />
						  <Alert message="Error Text"
						    description="Error Description Error Description Error Description Error Description Error Description Error Description"
						    type="error"
						    closable
						    onClose={this.onClose}
						  />
            </ContentHolder>
          </Box>
        </Col>
      </Row>

      <Row style={rowStyle} gutter={gutter} justify="start">
      	<Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Icon Alert Type"
          >
          <ContentHolder>
    	      <Alert message="Success Text" type="success" style={marginBot}/>
					  <Alert message="Info Text" type="info" style={marginBot}/>
					  <Alert message="Warning Text" type="warning" style={marginBot}/>
					  <Alert message="Error Text" type="error" />
          </ContentHolder>
        </Box>
       </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
           <Box
              title="Icon Info Alert Type"
            >
            <ContentHolder>
		           <Alert
							  message="success tips"
							  description="Detailed description and advices about successful copywriting."
							  type="success"
							  showIcon
								style={marginBot}
							/>
							<Alert
							  message="Informational Notes"
							  description="Additional description and informations about copywriting."
							  type="info"
							  showIcon
								style={marginBot}
							/>
							<Alert
							  message="Warning"
							  description="This is a warning notice about copywriting."
							  type="warning"
							  showIcon
								style={marginBot}
							/>
							<Alert
							  message="Error"
							  description="This is an error message about copywriting."
							  type="error"
							  showIcon
							/>
            </ContentHolder>
          </Box>
        </Col>
      </Row>

		</LayoutWrapper>);
	}
}
