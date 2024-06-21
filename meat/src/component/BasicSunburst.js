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
// BasicSunburst.js
// BasicSunburst.js
import React from 'react';
import { LabelSeries, Sunburst } from 'react-vis';

const LABEL_STYLE = {
    fontSize: '8px',
    textAnchor: 'middle'
};

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getShadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    const RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
    const GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
    const BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
}

function transformData(items) {
    const dataMap = {};

    items.forEach(item => {
        const { part, usage, product, quantity } = item;

        if (!dataMap[part]) {
            dataMap[part] = { name: part, children: {}, clr: getRandomColor(), count: 0 };
        }
        if (!dataMap[part].children[usage]) {
            dataMap[part].children[usage] = { name: usage, children: {}, clr: getShadeColor(dataMap[part].clr, -20), count: 0 };
        }
        if (!dataMap[part].children[usage].children[product]) {
            dataMap[part].children[usage].children[product] = { name: product, bigness: parseInt(quantity), clr: getShadeColor(dataMap[part].children[usage].clr, -20) };
        }

        dataMap[part].children[usage].children[product].bigness += parseInt(quantity);
    });

    function convertToChildren(obj) {
        return Object.values(obj).map(value => {
            if (value.children) {
                value.count = Object.keys(value.children).length;
                return { ...value, children: convertToChildren(value.children) };
            }
            return value;
        });
    }

    return { children: convertToChildren(dataMap) };
}

export default class BasicSunburst extends React.Component {
    state = {
        pathValue: false,
        finalValue: 'SUNBURST',
        clicked: false
    };

    render() {
        const { clicked, finalValue, pathValue } = this.state;
        const { items } = this.props;
        const data = transformData(items);

        return (
            <div className="basic-sunburst-example-wrapper">
                <div>{clicked ? 'click to unlock selection' : 'click to lock selection'}</div>
                <Sunburst
                    animation
                    className="basic-sunburst-example"
                    hideRootNode
                    onValueMouseOver={node => {
                        if (clicked) {
                            return;
                        }
                        const path = getKeyPath(node).reverse();
                        const pathAsMap = path.reduce((res, row) => {
                            res[row] = true;
                            return res;
                        }, {});
                        this.setState({
                            finalValue: path[path.length - 1],
                            pathValue: path.join(' > '),
                            data: updateData(data, pathAsMap)
                        });
                    }}
                    onValueMouseOut={() =>
                        clicked
                            ? () => {}
                            : this.setState({
                                pathValue: false,
                                finalValue: false,
                                data: transformData(items)
                            })
                    }
                    onValueClick={() => this.setState({ clicked: !clicked })}
                    style={{
                        stroke: '#ddd',
                        strokeOpacity: 0.3,
                        strokeWidth: '0.5'
                    }}
                    colorType="literal"
                    getSize={d => d.bigness}
                    getColor={d => d.clr}
                    data={data}
                    height={300}
                    width={350}
                >
                    {finalValue && <LabelSeries data={[{ x: 0, y: 0, label: finalValue, style: LABEL_STYLE }]} />}
                </Sunburst>
                <div className="basic-sunburst-example-path-name">{pathValue}</div>
            </div>
        );
    }
}

function getKeyPath(node) {
    if (!node.parent) {
        return ['root'];
    }
    return [(node.data && node.data.name) || node.name].concat(getKeyPath(node.parent));
}

function updateData(data, keyPath) {
    if (data.children) {
        data.children.map(child => updateData(child, keyPath));
    }
    data.style = {
        fillOpacity: keyPath && !keyPath[data.name] ? 0.2 : 1
    };
    return data;
}