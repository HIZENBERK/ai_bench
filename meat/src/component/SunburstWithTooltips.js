// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
import React from 'react';
import { Hint, Sunburst } from 'react-vis';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function transformData(items) {
    const dataMap = {};

    items.forEach(item => {
        const { part, usage, product, quantity } = item;

        if (!dataMap[part]) {
            dataMap[part] = { name: part, children: {}, clr: getRandomColor() };
        }
        if (!dataMap[part].children[usage]) {
            dataMap[part].children[usage] = { name: usage, children: {}, clr: getRandomColor() };
        }
        if (!dataMap[part].children[usage].children[product]) {
            dataMap[part].children[usage].children[product] = { name: product, bigness: 0, clr: getRandomColor() };
        }

        dataMap[part].children[usage].children[product].bigness += parseInt(quantity);
    });

    function convertToChildren(obj) {
        return Object.values(obj).map(value => {
            if (value.children) {
                return { ...value, children: convertToChildren(value.children) };
            }
            return value;
        });
    }

    return { children: convertToChildren(dataMap) };
}

const tipStyle = {
    display: 'flex',
    color: '#fff',
    background: '#000',
    alignItems: 'center',
    padding: '5px'
};
const boxStyle = { height: '10px', width: '10px' };

function buildValue(hoveredCell) {
    const { radius, angle, angle0 } = hoveredCell;
    const truedAngle = (angle + angle0) / 2;
    return {
        x: radius * Math.cos(truedAngle),
        y: radius * Math.sin(truedAngle)
    };
}

export default class SunburstWithTooltips extends React.Component {
    state = {
        hoveredCell: false
    };
    render() {
        const { hoveredCell } = this.state;
        const { items } = this.props;
        const DATA = transformData(items);

        return (
            <Sunburst
                data={DATA}
                style={{ stroke: '#fff' }}
                onValueMouseOver={v =>
                    this.setState({ hoveredCell: v.x && v.y ? v : false })
                }
                onValueMouseOut={() => this.setState({ hoveredCell: false })}
                height={450}
                margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
                getLabel={d => d.name}
                getSize={d => d.bigness}
                getColor={d => d.clr}
                width={350}
                padAngle={() => 0.02}
            >
                {hoveredCell ? (
                    <Hint value={buildValue(hoveredCell)}>
                        <div style={tipStyle}>
                            <div style={{ ...boxStyle, background: hoveredCell.clr }} />
                            {hoveredCell.name}: {hoveredCell.bigness}
                        </div>
                    </Hint>
                ) : null}
            </Sunburst>
        );
    }
}
