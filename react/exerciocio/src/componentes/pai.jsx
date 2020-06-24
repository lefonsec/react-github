import React from 'react'


export default props =>
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>filho</h2>
    <ul>
        {props.children}
    </ul>
</div> 