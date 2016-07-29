import style from "./style";
import classed from "./classed";
import {hasIcon} from "./createIcon";

export default function (parent, data, index) {

    var span = document.createElement('span');
    span.textContent = data.title;

    classed(span, 'text', true);
    style(span, 'margin-top', hasIcon(data.icon)? "-10px": this._calc.textTop);

    parent.appendChild(span);
}