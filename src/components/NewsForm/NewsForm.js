import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class NewsForm extends Component {
    state = {
        title: '',
        description: '',
        image: null
    };

    valueChanged = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    };

    submitHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.submit(formData, this.props.history);
    };

    render() {
        return (
                <Form onSubmit={this.submitHandler} className='newsForm'>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" value={this.state.title} id="title"  onChange={this.valueChanged} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="description" >Description</Label>
                            <Input type="textarea" name="description" value={this.state.description} id="description" onChange={this.valueChanged} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="image">News Image</Label>
                            <Input
                                type="file"
                                name="image" id="image"
                                onChange={this.fileChangeHandler}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" color="primary">POST NEWS</Button>
                    </FormGroup>
                </Form>
        );
    }
}

export default NewsForm;