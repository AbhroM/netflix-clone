import React from 'react'
import Jumbotron from '../Components/Jumbotron/'
import JumboData  from '../fixtures/jumbo.json'

const JumbotronContainer = () => {
    return (
        <div>
              <Jumbotron.Container>
                  {JumboData.map((item)=>(
                      <Jumbotron key={item.id}>
                          <Jumbotron.Pane>
                          <Jumbotron.Title>
                          {item.title}
                          </Jumbotron.Title>
                          <Jumbotron.SubTitle>
                             {item.subTitle}
                          </Jumbotron.SubTitle>
                          </Jumbotron.Pane>
                          <Jumbotron.Pane>
                          <Jumbotron.Image src={item.image} alt={item.alt}/>
                          </Jumbotron.Pane>
                     </Jumbotron>
                  ))}
              
            </Jumbotron.Container>
        </div>
    )
}

export default JumbotronContainer
