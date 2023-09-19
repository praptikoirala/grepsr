import React from "react";
import { useSelector } from "react-redux";
import { PieChart, PieArcSeries } from "reaviz";

const Piechart = () => {
    const { categoryCount } = useSelector((state) => state.categories);

    const data = categoryCount.map((countObj) => ({
        key: countObj.key.toUpperCase(),
        data: countObj.count,
    }));

    // const colorScheme = ["#999999", "#777777", "#555555", "#333333", "#111111"];

    return (
        <PieChart
            width={700}
            height={500}
            data={data}
            series={<PieArcSeries colorScheme="cybertron" />}
        />
    );
};

export default Piechart;