import React from 'react'
import ReactDom from 'react-dom'

//import BomDia from './componentes/BomDia'

import Pai from './componentes/pai'
import Filho from './componentes/filho'

ReactDom.render(
  <div>
     <Pai nome= "Paulo" sobrenome ="Silva">
         <Filho nome = "pedro" sobrenome= "silva"/>
         <Filho nome = "paulo" sobrenome= "silva"/>
         <Filho nome = "Carla" sobrenome= "silva"/>

    </Pai>
  </div>  
, document.getElementById('root'))