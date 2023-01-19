import {Field, Form} from "react-final-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {composeValidators, maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";

const AddMessageForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            component={Textarea} name={"newMessageBody"}
                            placeholder={"Enter your message"} validate={composeValidators[required, maxLengthCreator(50)]} // maxlength нужно создавать за пределами формы, иначе будет зацикличность и все сломается
                        />
                    </div>
                    <div><button>Send</button></div>
                </form>
            )}
        />
    )
}

export default AddMessageForm;