
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

const Select = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <select
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </select>
    );
};

Select.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

Select.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

    /**
     * The children of this component
     */
    'children': PropTypes.node,

    /**
     * An integer that represents the number of times
     * that this element has been clicked on.
     */
    'n_clicks': PropTypes.number,

    /**
     * An integer that represents the time (in ms since 1970)
     * at which n_clicks changed. This can be used to tell
     * which button was changed most recently.
     */
    'n_clicks_timestamp': PropTypes.number,

    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    'key': PropTypes.string,

    /**
     * The ARIA role attribute
     */
    'role': PropTypes.string,

    /**
     * A wildcard data attribute
     */
    'data-*': PropTypes.string,

    /**
     * A wildcard aria attribute
     */
    'aria-*': PropTypes.string,

    /**
     * The element should be automatically focused after the page loaded.
     */
    'autoFocus': PropTypes.oneOfType([
        PropTypes.oneOf(['autoFocus', 'autofocus', 'AUTOFOCUS']),
        PropTypes.bool
     ]),

    /**
     * Indicates whether the user can interact with the element.
     */
    'disabled': PropTypes.oneOfType([
        PropTypes.oneOf(['disabled', 'DISABLED']),
        PropTypes.bool
     ]),

    /**
     * Indicates the form that is the owner of the element.
     */
    'form': PropTypes.string,

    /**
     * Indicates whether multiple values can be entered in an input of the type email or file.
     */
    'multiple': PropTypes.oneOfType([
        PropTypes.oneOf(['multiple', 'MULTIPLE']),
        PropTypes.bool
     ]),

    /**
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    'name': PropTypes.string,

    /**
     * Indicates whether this element is required to fill out or not.
     */
    'required': PropTypes.oneOfType([
        PropTypes.oneOf(['required', 'REQUIRED']),
        PropTypes.bool
     ]),

    /**
     * Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.
     */
    'size': PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
     ]),

    /**
     * Defines a keyboard shortcut to activate or add focus to the element.
     */
    'accessKey': PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * Indicates whether the element's content is editable.
     */
    'contentEditable': PropTypes.string,

    /**
     * Defines the ID of a <menu> element which will serve as the element's context menu.
     */
    'contextMenu': PropTypes.string,

    /**
     * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
     */
    'dir': PropTypes.string,

    /**
     * Defines whether the element can be dragged.
     */
    'draggable': PropTypes.string,

    /**
     * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
     */
    'hidden': PropTypes.oneOfType([
        PropTypes.oneOf(['hidden', 'HIDDEN']),
        PropTypes.bool
     ]),

    /**
     * Defines the language used in the element.
     */
    'lang': PropTypes.string,

    /**
     * Indicates whether spell checking is allowed for the element.
     */
    'spellCheck': PropTypes.string,

    /**
     * Defines CSS styles which will override styles previously set.
     */
    'style': PropTypes.object,

    /**
     * Overrides the browser's default tab order and follows the one specified instead.
     */
    'tabIndex': PropTypes.string,

    /**
     * Text to be displayed in a tooltip when hovering over the element.
     */
    'title': PropTypes.string,

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    'loading_state': PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),

    'setProps': PropTypes.func
};

export default Select;
