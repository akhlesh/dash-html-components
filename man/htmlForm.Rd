% Auto-generated: do not edit by hand
\name{htmlForm}

\alias{htmlForm}

\title{Form component}

\description{

}

\usage{
htmlForm(children=NULL, id=NULL, n_clicks=NULL, n_clicks_timestamp=NULL, key=NULL, role=NULL, accept=NULL, acceptCharset=NULL, action=NULL, autoComplete=NULL, encType=NULL, method=NULL, name=NULL, noValidate=NULL, target=NULL, accessKey=NULL, className=NULL, contentEditable=NULL, contextMenu=NULL, dir=NULL, draggable=NULL, hidden=NULL, lang=NULL, spellCheck=NULL, style=NULL, tabIndex=NULL, title=NULL, loading_state=NULL, ...)
}

\arguments{
\item{children}{The children of this component}

\item{id}{The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{n_clicks}{An integer that represents the number of times
that this element has been clicked on.}

\item{n_clicks_timestamp}{An integer that represents the time (in ms since 1970)
at which n_clicks changed. This can be used to tell
which button was changed most recently.}

\item{key}{A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{role}{The ARIA role attribute}

\item{accept}{List of types the server accepts, typically a file type.}

\item{acceptCharset}{List of supported charsets.}

\item{action}{The URI of a program that processes the information submitted via the form.}

\item{autoComplete}{Indicates whether controls in this form can by default have their values automatically completed by the browser.}

\item{encType}{Defines the content type of the form date when the method is POST.}

\item{method}{Defines which HTTP method to use when submitting the form. Can be GET (default) or POST.}

\item{name}{Name of the element. For example used by the server to identify the fields in form submits.}

\item{noValidate}{This attribute indicates that the form shouldn't be validated when submitted.}

\item{target}{}

\item{accessKey}{Defines a keyboard shortcut to activate or add focus to the element.}

\item{className}{Often used with CSS to style elements with common properties.}

\item{contentEditable}{Indicates whether the element's content is editable.}

\item{contextMenu}{Defines the ID of a <menu> element which will serve as the element's context menu.}

\item{dir}{Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)}

\item{draggable}{Defines whether the element can be dragged.}

\item{hidden}{Prevents rendering of given element, while keeping child elements, e.g. script elements, active.}

\item{lang}{Defines the language used in the element.}

\item{spellCheck}{Indicates whether spell checking is allowed for the element.}

\item{style}{Defines CSS styles which will override styles previously set.}

\item{tabIndex}{Overrides the browser's default tab order and follows the one specified instead.}

\item{title}{Text to be displayed in a tooltip when hovering over the element.}

\item{loading_state}{Object that holds the loading state object coming from dash-renderer}

\item{...}{wildcards: `data-*` or `aria-*`}
}
