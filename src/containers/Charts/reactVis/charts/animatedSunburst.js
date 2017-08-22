import React, { Component } from 'react';
import { Sunburst } from 'react-vis';
import Button from '../button';

function randomLeaf() {
  return {
    size: Math.random() * 1000,
    color: Math.random()
  };
}

function updateData() {
  const totalLeaves = Math.random() * 20;
  const leaves = [];
  for (let i = 0; i < totalLeaves; i++) {
    const leaf = randomLeaf();
    if (Math.random() > 0.8) {
      leaf.children = [...new Array(3)].map(() => randomLeaf());
    }
    leaves.push(leaf);
  }
  return {
    title: '',
    color: 1,
    children: leaves
  };
}

const DIVERGING_COLOR_SCALE = ['#00939C', '#85C4C8', '#EC9370', '#C22E00'];

export default class AnimatedSunburst extends Component {
  state = {
    data: updateData()
  }

  render() {
    const {data} = this.state;

    return (
      <div className="isoChartWrapper">
        <div className="isoChartControl">
          <Button
            onClick={() => this.setState({data: updateData()})}
            buttonContent={'UPDATE'} />
        </div>
        <Sunburst
          animation={{damping: 20, stiffness: 300}}
          data={data}
          colorType={'category'}
          colorRange={DIVERGING_COLOR_SCALE}
          style={{stroke: '#fff'}}
          height={this.props.height}
          width={this.props.width}/>
      </div>
    );
  }

}
