import React from 'react';
import classnames from "classnames";
import BsCard from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";

function Card({ className, title, children, img, ...props }) {
    const classNames = classnames(className, 'poke-card');

    return (
        <BsCard {...props} className={classNames}>
            <BsCard.Img variant="top" src={img} />
            <BsCard.Body>
                <BsCard.Title>{title}</BsCard.Title>
                <BsCard.Text>
                    {children}
                </BsCard.Text>
                <Button variant="primary">Go somewhere</Button>
            </BsCard.Body>
        </BsCard>
    );
}


export default Card;