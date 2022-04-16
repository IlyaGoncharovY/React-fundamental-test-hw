import React from 'react';

type NewComponentPropsType = {
    topCars: Array<ArrayTopCarsPropsType>
}
type ArrayTopCarsPropsType = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    {props.topCars.map((car, index) => {
                        return (
                            <td key={index}>{index + 1 + ". " + car.manufacturer}</td>
                        )})}
                </tr>
                <tr>
                    {props.topCars.map((car, index) => {
                        return (
                            <td key={index}>{car.model}</td>
                        )})}
                </tr>
                </tbody>
            </table>


        </div>
    );
};

