import React from "react";
import { render } from "react-dom";

function Popup() {
    return (
        <form>
            <input type="text" placeholder="Title" name="title" id="title-git-form"/>
            <textarea placeholder="Description" name="description" id="description-git-form" cols="30" rows="10"></textarea>
            <button type="button" class="submit-git-inp" id="submit-git-form">Submit</button>

            <script src="content.js"></script>
        </form>
    );
}

render(<Popup/>, document.getElementById("react-target"));