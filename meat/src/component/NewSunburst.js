import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import "../css/Pagination.css"

const COLORS = {

};

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getColor(name) {
    if (!COLORS[name]) {
        COLORS[name] = getRandomColor();
    }
    return COLORS[name];
}

let fill;

const data = {
    children: [
        {
            name: "채끝",
            children: [
                { name: "네모등심",
                children: [
                    { name : "안심 스테이크 200g",
                    children: [
                        {
                            name: "5", size: 100
                        }
                    ]}
                ]},
                { name: "구이",
                children: [
                    { name: "안심 스테이크 200g",
                    children: [
                        {
                            name: "5", size: 200
                        }
                    ]}
                ]}
            ]
        },
        {
            name: "차돌박이",
            children: [
                { name: "볶음밥, 찌개",
                children: [
                    { name: "안심 스테이크 200g",
                    children: [
                        {
                            name: "5", size: 100
                        }
                    ]}
                ]},
                { name: "구이",
                children: [
                    { name: "안심 스테이크 200g",
                    children: [
                        {
                            name:"5", size: 100
                        }
                    ]}
                ]}
            ]
        },
        {
            name: "부채살", style:{ name : "부채살" ? fill = "white" : null},
            children: [
                { name: "불고기",
                children: [
                    { name: "안심 스테이크 200g",
                    children: [
                        {
                            name: "5", size: 100
                        }
                    ]}
                ]},
                { name: "구이",
                children: [
                    { name: "안심 스테이크 200g",
                    children: [
                        {
                            name: "5", size: 200
                        }
                    ]}
                ]}
            ]
        },
        {
            name: "소갈비",
            children: [
                { name: "구이",
                children: [
                    { name: "폭립 200g",
                    children: [
                        {
                            name: "11", size: 100
                        }
                    ]}
                ]}
            ]
        }
    ]
};

const NewSunburst = () => {
    const ref = useRef();

    useEffect(() => {
        const width = 450;
        const radius = width / 2;



        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", width)
            .append("g")
            .attr("transform", `translate(${width / 2},${width / 2})`);

        const partition = d3.partition()
            .size([2 * Math.PI, radius]);

        const root = d3.hierarchy(data)
            .sum(d => d.size);

        partition(root);

        const arc = d3.arc()
            .startAngle(d => d.x0)
            .endAngle(d => d.x1)
            .innerRadius(d => d.y0)
            .outerRadius(d => d.y1);

        svg.selectAll("path")
            .data(root.descendants())
            .enter().append("path")
            .attr("d", arc)
            .style("fill", d => getColor(d.data.name))
            .style("stroke", "white");

        svg.selectAll("text")
            .data(root.descendants())
            .enter().append("text")
            .attr("transform", function(d) {
                const angle = (d.x0 + d.x1) / 2 * 180 / Math.PI - 90;
                const rotate = angle > 90 ? angle - 180 : angle;
                const x = (d.y0 + d.y1) / 2 * Math.cos((d.x0 + d.x1) / 2 - Math.PI / 2);
                const y = (d.y0 + d.y1) / 2 * Math.sin((d.x0 + d.x1) / 2 - Math.PI / 2);
                return `translate(${x},${y}) rotate(${rotate})`;
            })
            .style("text-anchor", "middle")
            .style("font-size", "11px")
            .style("writing-mode", "vertical-lr")
            .style("font-weight", "bold")
            .text(d => d.data.name);

    }, []);

    return (
        <div className="newSunburst">
            <svg className="newSunburst1" ref={ref}></svg>
        </div>
    );
};

export default NewSunburst;
