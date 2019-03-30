import React from 'react';
import {Button, NavItem, NavLink} from "reactstrap";

const Toolbar = () => {
    return (
        <header>
            <NavItem>
                <NavLink className="link" href="/"><h1>News Website</h1></NavLink>
            </NavItem>
            <NavItem>
                <Button color="info">
                    <NavLink className="link" href="/news/add">Publish New Post</NavLink>
                </Button>
            </NavItem>
        </header>
    );
};

export default Toolbar;