function Fcomponent() {
    return (
        // this the functional component.

        // writing another h1 with wrapping in div any other component will produce an error so to do that we will use div.
        <div>
            <h1>
                This is the functional component.
            </h1>

            <h1>Ab error nahi aayega mere bhai </h1>
            <h1>
                {/* if you do not use the export default ...,then you have to use like in you index.js file wrap that component in { this brackets } then you can use this  */
                /* only export keyword with function name and you don't have to ask for export default ...; */}

            </h1>
        </div>


    )
}

export default Fcomponent;
